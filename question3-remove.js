const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Function to remove log files and Logs directory
function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        fs.readdir(logsDir, (err, files) => {
            if (err) throw err;

            // Remove all files inside Logs directory
            files.forEach(file => {
                const filePath = path.join(logsDir, file);
                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                    console.log(`Deleted file: ${filePath}`);
                });
            });

            // Remove Logs directory
            fs.rmdir(logsDir, (err) => {
                if (err) throw err;
                console.log(`Deleted directory: ${logsDir}`);
            });
        });
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Run the function
removeLogFiles();
