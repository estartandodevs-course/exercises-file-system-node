const fs = require("fs")
const path = require('path')

const getDirectoryDataPath = (fileName) => {
   return path.join(__dirname, "..", "data", fileName) //*¹Não lembro se fica melhor atribuindo a uma var!? (ou algo semelhante).
};


const createFile = async (data, fileName, fileTipe) => {
  /**
   * fileTipe - parametro opcional
   */
  try {
    if (fileTipe === undefined) { //TESTE Parametro opcional; Funciona, porem tipos ".jpg" não consegue guardar o -data- 'obvious
      fileTipe = ".txt"
    }
    fs.openSync(`${getDirectoryDataPath(fileName)}${fileTipe}`, `ax`) //*¹Pq quando for chamar o path tem que passar a func, fica claro, porem pode melhorar?
    fs.appendFileSync(`${getDirectoryDataPath(fileName)}${fileTipe}`, data); //*¹P? e se for atribuido a var teria que ser definida fora da func!? Seria mais pratico ou mais legivel ?
    return console.log(`${fileName} written`);
  } catch (err) {
    if (err.code === `EEXIST`) {
        return console.error(`arquive ${fileName}.txt already exists \n         ^`);
    } else {
      return console.log(`Error creating file`)
    }
}
};


const renameFile = async (currentName, newName) => {
   /**
   * Necessario passar o nome do arquivo com a extenção
   * Exemplo: filename.txt
   *                    ^
   */
  try {
    fs.renameSync(getDirectoryDataPath(currentName), getDirectoryDataPath(newName))
    return console.log(`${currentName} renamed to ${newName}`)
  } catch (err) {
    return console.log(`Error renaming file`)
  }
};


const deleteFile = async (fileName) => {
  /**
   * Necessario passar o nome do arquivo com a extenção
   * Exemplo: filename.txt
   *                    ^
   */
  try {
    fs.unlinkSync(getDirectoryDataPath(fileName))
    return console.log(`${fileName} deleted successfully`)
} catch (err) {
    if (err.code === 'ENOENT') {
      return console.log(`There is no file named ${fileName}, please try again \n                         ^`)
    } else {
    return console.log(`Error deleting file`)
    }
}
};


module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };
