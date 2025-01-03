import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Chart from 'chart.js/auto';

const generatePDF = async (user) => {
  const doc = new jsPDF();

  // Title and summary
  doc.setFontSize(18);
  doc.text('Performance Analysis of Aptitude Test', 14, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${user.name}`, 14, 30);
  doc.text(`Email: ${user.email}`, 14, 35);
  doc.text(`Total Attempts: ${user.results.length}`, 14, 41);

  // Calculate average, highest, and lowest scores
  const scores = user.results.map((result) => result.score);
  const avgScore = (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(2);
  const highestScore = Math.max(...scores);
  const lowestScore = Math.min(...scores);

  doc.text(`Performance Summary:`, 14, 50);
  doc.text(`  - Average Score: ${avgScore}`, 14, 57); 
  doc.text(`  - Highest Score: ${highestScore}`, 14, 63);
  doc.text(`  - Lowest Score: ${lowestScore}`, 14, 69);

  // Provide feedback based on the average score
  let feedback = '';
  if (avgScore >= 30) {
    feedback = 'Excellent! Keep up the great work.';
  } else if (avgScore >= 23) {
    feedback = 'Good job! You can aim for higher scores by practicing more.';
  } else if (avgScore >= 17) {
    feedback = 'Average performance. Focus on your weak areas to improve.';
  } else {
    feedback = 'Needs Improvement. Consider revising the basics and practicing regularly.';
  }
  doc.text(`Feedback: ${feedback}`, 14, 75);

  // Chart data
  const labels = user.results.map((_, i) => `Attempt ${i + 1}`);

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
            label: 'Scores Over Attempts',
            data: scores,
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
            title: {  //title`
              display: true,
              text: 'Attempts',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Scores',
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
  doc.addImage(lineChartImg, 'PNG', 14, 85, 180, 60);

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
        labels: ['0-10', '11-20', '21-30', '31-33'],
        datasets: [
          {
            label: 'Scores Distribution',
            data: [
              scores.filter(score => score <= 10).length,
              scores.filter(score => score > 10 && score <= 20).length,
              scores.filter(score => score > 20 && score <= 30).length,
              scores.filter(score => score > 30).length, 
            ],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
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
  doc.addImage(pieChartImg, 'PNG', 14, 150, 180, 60);

  // Add detailed results in a table
  const tableData = user.results.map((result, index) => [
    `Attempt ${index + 1}`,
    new Date(result.date).toLocaleDateString(),
    new Date(result.date).toLocaleTimeString(),
    result.score,
  ]); 

  autoTable(doc, {
    head: [['Attempt', 'Date', 'Time', 'Score (out of 33)']],
    body: tableData,
    startY: 220, // Adjust Y position for the table
  }); 

  // Save PDF
  doc.save(`${user.name}_Performance_Analysis.pdf`);
};

export default generatePDF;
