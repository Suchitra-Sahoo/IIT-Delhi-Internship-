// Import the necessary modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Create an Express application
const app = express();
const port = 5000;

// Use middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB for the first database (AnalysisLoginSignup)
mongoose.connect('mongodb://localhost:27017/AnalysisLoginSignup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to AnalysisLoginSignup MongoDB'))
  .catch(err => console.error('Failed to connect to AnalysisLoginSignup MongoDB:', err));

// Connect to MongoDB for the second database (MemoryGameLoginSignup)
const memoryGameDb = mongoose.createConnection('mongodb://localhost:27017/MemoryGameLoginSignup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

memoryGameDb.once('open', () => {
  console.log('Connected to MemoryGameLoginSignup MongoDB');
});

// Define the schema and model for the 'loginconnections' collection for both databases
const loginConnectionSchema = new mongoose.Schema({
  fieldName1: String,
  fieldName2: String,
  // Add other fields as needed
});

// Define models for both databases
const LoginConnection = mongoose.model('LoginConnection', loginConnectionSchema);  // for AnalysisLoginSignup database
const MemoryGameLoginConnection = memoryGameDb.model('LoginConnection', loginConnectionSchema);  // for MemoryGameLoginSignup database

// Define a route to fetch the loginconnections data from the AnalysisLoginSignup database
app.get('/api/loginconnections', async (req, res) => {
  try {
    const data = await LoginConnection.find(); // Fetch all records from AnalysisLoginSignup
    res.json(data); // Send the data as a JSON response
  } catch (err) {
    res.status(400).send('Error fetching data from AnalysisLoginSignup: ' + err.message);
  }
});

// Define a route to fetch the loginconnections data from the MemoryGameLoginSignup database
app.get('/api/memorygame-loginconnections', async (req, res) => {
  try {
    const data = await MemoryGameLoginConnection.find(); // Fetch all records from MemoryGameLoginSignup
    res.json(data); // Send the data as a JSON response
  } catch (err) {
    res.status(400).send('Error fetching data from MemoryGameLoginSignup: ' + err.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
