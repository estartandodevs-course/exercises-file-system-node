const path = require('path'),
      fs = require('fs');

const getDirectoryDataPath = () => { return path.join(__dirname,"..","data")};
const dataPath = getDirectoryDataPath()


const createFile = async (data, fileName) => {
  
  try {
    fs.writeFileSync(path.join(dataPath,fileName), data, { mode: 0o755 })  
  } catch (error) {
    throw new Error('Error creating file')
  }

  return(`${fileName} written`) 

};


const renameFile = async (currentName, newName) => {

  try {
    fs.renameSync(path.join(dataPath,currentName),path.join(dataPath,newName));  
  } catch (error) {
    throw new Error('there was an error:', error.message);
  }

  return(`${currentName} renamed to ${newName}`)

};

const deleteFile = async (fileName) => {

  try {
    fs.unlinkSync(path.join(dataPath,fileName));
  } catch(err) {
    throw new Error("Error deleting file")
  }
  return(`${fileName} deleted successfully`)
};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };
