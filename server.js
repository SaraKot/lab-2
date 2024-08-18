// Require the Express module
const express = require('express');
const child_process = require('child_process');

// Create a new Express web application
const app = express();

// Set handler for the index of the website
app.get('/', (req, res) => {
    // Run the system `fortune` command and respond with the message
    child_process.exec('fortune', (error, message) => {

        // Get the current date and time
        const now = new Date().toLocaleString();  
        // Fixed typo
        // Check for errors
        if (error === null) {
            // Build response string with fortune message and current date/time
            const response = `Your fortune is: ${message}\n\nDate and Time: ${now}`;
            res.send(response);
        } else {
            // Build response string with error message and current date/time
            const response = `Error: ${error.message}\n\nDate and Time: ${now}`;
            res.send(response);
        }
    });
});

// Start web application server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
