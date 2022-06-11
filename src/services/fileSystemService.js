const process =  require('node:process');
const fs = require('node:fs');
const path = require('node:path');

const getDirectoryDataPath = () => {
  const dir = path.join( __dirname, '../data' );
  return dir;
};

const createFile = async (data, fileName) => {
  try {
    await fs.writeFileSync(`${getDirectoryDataPath()}/${fileName}`, data);
    return `${fileName} written`;
  } catch (error) {
    return 'Error creating file';
  }
};

const renameFile = async (currentName, newName) => {
  try {
    await fs.renameSync(`${getDirectoryDataPath()}/${currentName}`, `${getDirectoryDataPath()}/${newName}`);
    return `${currentName} renamed to ${newName}`;
  } catch (error) {
    return 'Error renaming file';
  }
};

const deleteFile = async (fileName) => {
  try {
    await fs.unlinkSync(`${getDirectoryDataPath()}/${fileName}`);
    return `${fileName} deleted successfully`;
  } catch (error) {
    return 'Error deleting file';
  }
};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };