const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'log.txt');

/**
 * Read log file
 */
function readLogFile() {
  if (!fs.existsSync(filePath)) {
    return "Log file does not exist";
  }
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Write log file (overwrite)
 */
function writeLogFile(content) {
  fs.writeFileSync(filePath, content);
  return "Log file written successfully";
}

/**
 * Append log file
 */
function appendLogFile(content) {
  fs.appendFileSync(filePath, content + '\n');
  return "Log appended successfully";
}

/**
 * Delete log file
 */
function deleteLogFile() {
  if (!fs.existsSync(filePath)) {
    return "Log file does not exist";
  }
  fs.unlinkSync(filePath);
  return "Log file deleted successfully";
}

module.exports = {
  readLogFile,
  writeLogFile,
  appendLogFile,
  deleteLogFile
};
