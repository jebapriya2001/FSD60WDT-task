const fs = require('node:fs');
const path = require('path');

const FILE_DIR = path.join(__dirname, 'files');


if (!fs.existsSync(FILE_DIR)) {
    fs.mkdirSync(FILE_DIR, { recursive: true });
}

// Function to create a text file with the current timestamp
function createTimestampFile() {
    const timestamp = new Date().toISOString();
    const filename = `${timestamp.replace(/:/g, '-')}.txt`;
    const filePath = path.join(FILE_DIR, filename);

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            console.error("Error creating file:", err);
        } else {
            console.log("File created successfully:", filename);
        }
    });
}

// Function to retrieve all text files in the folder
function getAllTextFiles() {
    fs.readdir(FILE_DIR, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }
        const textFiles = files.filter(file => file.endsWith('.txt'));
        console.log("Text files in directory:", textFiles);
    });
}

createTimestampFile();
getAllTextFiles(); 
