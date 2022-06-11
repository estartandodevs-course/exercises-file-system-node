const path = require('path');
const fs = require('fs');

const getDirectoryDataPath = () => path.join( __dirname, '../','data' );

const createFile = async (data, fileName) => {
const filePath = path.join(getDirectoryDataPath(), fileName);
  try {
    fs.writeFileSync(`${filePath}`, data , `${fileName}`);
    return `${fileName} written`;
  } catch (err) {
    return 'Error creating file';
  }
};

const renameFile = async (currentName, newName) => {
  try {
    const sourceFilePath = path.join(getDirectoryDataPath(), currentName);
    const targetFilePath = path.join(getDirectoryDataPath(), newName);
    fs.renameSync(sourceFilePath, targetFilePath);
    return `${currentName} renamed to ${newName}`;
  } catch (err) {
    return 'Error renaming file';
  }
};

const deleteFile = async (fileName) => {
  try {
    const filePath = path.join(getDirectoryDataPath(), fileName);
    fs.unlinkSync(filePath);
    return `${fileName} deleted successfully`;
  } catch (err) {
    return 'Error deleting file';
  }
};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };