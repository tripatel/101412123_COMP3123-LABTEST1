const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Function to create log files
function createLogFiles() {
    // Create Logs directory if it doesn't exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    // Change current process to Logs directory
    process.chdir(logsDir);

    // Create 10 log files
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Created file: ${fileName}`);
    }
}

// Run the function
createLogFiles();
