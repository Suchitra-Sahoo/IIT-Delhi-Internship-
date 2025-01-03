import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import Chart from 'chart.js/auto';

const generatePDF = async (user) => {
  const doc = new jsPDF();
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(14);

  // Title and basic info
  doc.text(`Test Analysis Report`, 14, 16);
  doc.text(`Name: ${user.name}`, 14, 27);
  doc.text(`Email: ${user.email}`, 14, 33);

  // Set up table data and column headers
  const tableData = [];
  const columns = ['Test Name', 'High Score', 'Low Score', 'Average Score'];

  let yPosition = 37; // Y position for table and graph

  // Loop through tests and add results to tableData
  for (const test of user.tests) {
    const validResults = test.results.filter(result => result.scoretest2); // Filter out tests with no results
    if (validResults.length > 0) {
      const scores = validResults.map(result => result.scoretest2);
      const highScore = Math.max(...scores);
      const lowScore = Math.min(...scores);
      const avgScore = scores.reduce((acc, score) => acc + score, 0) / scores.length;

      // Add test data to table
      tableData.push([test.testName, highScore, lowScore, avgScore.toFixed(2)]);
    }
  }

  // Generate table if there is data
  if (tableData.length > 0) {
    doc.autoTable({
      startY: yPosition, // Start after basic info
      head: [columns],
      body: tableData,
      theme: 'grid',
      styles: {
        fontSize: 12,
        cellPadding: 5,
      },
    });

    // Set Y position for graphs after table
    yPosition = doc.lastAutoTable.finalY + 10; // Reduced space after table
  } else {
    doc.text('No test results available', 14, yPosition);
    yPosition += 10;
  }

  // Data for the graphs
  const graphData = tableData.map(row => parseFloat(row[3])); // Extracting average scores
  const labels = tableData.map(row => row[0]); // Extracting test names

  // Create a high-resolution canvas for the line chart
  const lineCanvas = document.createElement('canvas');
  const lineCtx = lineCanvas.getContext('2d');
  const scale = 2; // High resolution
  lineCanvas.width = 400 * scale;
  lineCanvas.height = 200 * scale;
  lineCtx.scale(scale, scale);

  // Render the line chart and wait for it to complete
  await new Promise((resolve) => {
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Average Scores Over Tests',
            data: graphData,
            borderColor: '#007bff',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Tests',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Average Scores',
            },
          },
        },
        animation: {
          onComplete: resolve,
        },
      },
    });
  });

  // Convert the line chart to an image
  const lineChartImg = lineCanvas.toDataURL('image/png');

  // Add line chart to PDF
  doc.addImage(lineChartImg, 'PNG', 14, yPosition, 180, 60);

  // Update Y position for pie chart
  yPosition += 70;

  // Create a high-resolution canvas for the pie chart
  const pieCanvas = document.createElement('canvas');
  const pieCtx = pieCanvas.getContext('2d');
  pieCanvas.width = 400 * scale;
  pieCanvas.height = 200 * scale;
  pieCtx.scale(scale, scale);

  // Render the pie chart and wait for it to complete
  await new Promise((resolve) => {
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Scores Distribution',
            data: graphData,
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6c757d', '#343a40', '#fd7e14', '#20c997', '#e83e8c'],
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: { display: true },
        },
        animation: {
          onComplete: resolve,
        },
      },
    });
  });

  // Convert the pie chart to an image
  const pieChartImg = pieCanvas.toDataURL('image/png');

  // Add pie chart to PDF
  doc.addImage(pieChartImg, 'PNG', 14, yPosition, 180, 60);

  // Finalize and save the PDF after all content is added
  doc.save(`${user.name}_report.pdf`);
};

export default generatePDF;
