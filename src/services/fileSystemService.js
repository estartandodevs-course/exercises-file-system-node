const process =  require('process');
const fs = require('fs');
const path = require('path');

const getDirectoryDataPath = () => {
  const dir = path.join( __dirname, '../data' );
  return dir;
};

const createFile = (data, fileName) => {
  try {
    fs.writeFileSync(`${getDirectoryDataPath()}/${fileName}`, data);
    return `${fileName} written`;
  } catch (error) {
    return 'Error creating file';
  }
};

const renameFile = (currentName, newName) => {
  try {
    fs.renameSync(`${getDirectoryDataPath()}/${currentName}`, `${getDirectoryDataPath()}/${newName}`);
    return `${currentName} renamed to ${newName}`;
  } catch (error) {
    return 'Error renaming file';
  }
};

const deleteFile = (fileName) => {
  try {
    fs.unlinkSync(`${getDirectoryDataPath()}/${fileName}`);
    return `${fileName} deleted successfully`;
  } catch (error) {
    return 'Error deleting file';
  }
};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };