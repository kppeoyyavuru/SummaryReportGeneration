// Simple test script for the discharge summary generator
const fs = require('fs');
const path = require('path');

// Read the test files
const patientData = fs.readFileSync(path.join(__dirname, 'test_patient_data.txt'), 'utf8');
const patientHistory = fs.readFileSync(path.join(__dirname, 'test_patient_history.txt'), 'utf8');
const labResults = fs.readFileSync(path.join(__dirname, 'test_lab_results.txt'), 'utf8');

// Combine the documents
const combinedText = [patientData, patientHistory, labResults].join('\n\n');

// Simple text splitting function (similar to the one in summarizer.ts)
function splitText(text) {
  const chunkSize = 1000;
  const overlap = 200;
  const chunks = [];
  
  for (let i = 0; i < text.length; i += chunkSize - overlap) {
    const chunk = text.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  
  return chunks;
}

// Split the text into chunks
const chunks = splitText(combinedText);

// Print the chunks for verification
console.log(`Split text into ${chunks.length} chunks`);
console.log('First chunk sample:');
console.log(chunks[0].substring(0, 200) + '...');

// In a real scenario, these chunks would be sent to the Hugging Face API
// for summarization, but we'll just print a message for this test
console.log('\nIn a real scenario, these chunks would be sent to the Hugging Face API for summarization.');
console.log('Make sure your .env.local file contains a valid HUGGINGFACE_API_KEY.');

// Sample patient info
const patientInfo = {
  name: 'John Doe',
  id: '12345678',
  dob: '1975-05-12',
  admissionDate: '2023-11-15',
  dischargeDate: '2023-11-21',
};

console.log('\nPatient Info:');
console.log(patientInfo);

console.log('\nTest completed successfully!'); 