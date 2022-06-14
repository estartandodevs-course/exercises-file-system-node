const path = require("path")
const fs = require("fs")

const getDirectoryDataPath = () => path.join(__dirname, "..","data");

const filePath = getDirectoryDataPath() + "\\";

const createFile = (data, fileName) => {
  try {
    fs.writeFileSync(filePath + fileName, data)
    return (`${fileName} written`)
  }
  catch(error) {
    throw new Error("Error creating file")
  }
};

const renameFile = (currentName, newName) => {
  try {
    fs.renameSync(filePath + currentName, filePath + newName)
    return (`${currentName} renamed to ${newName}`)
  }
  catch(error) {
    throw new Error("Error renaming file")
  }
};

const deleteFile = (fileName) => {
  try {
    fs.unlinkSync(filePath + fileName)
    return (`${fileName} deleted successfully`)
  }
  catch(error) {
    throw new Error("Error deleting file")
  }
};


module.exports = { getDirectoryDataPath, createFile , renameFile, deleteFile };
