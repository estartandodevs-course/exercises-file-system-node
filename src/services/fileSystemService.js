/*
   TODO 1:  Deve retornar o caminho para a pasta src/data 
            independente de la base de sistema operacional 
            Exemplo:  
                Windows : c:\\caminho-ate-seu-projeto\src\data  
                Linux/macOs: /caminho-ate-seu-projeto/src/data
*/
const process = require('node:process');
const fs = require('node:fs');
const path = require('node:path');

const getDirectoryDataPath = () => {
  // Implemente aqui o Todo 1
  const dir = path.join(__dirname, '../data');
  return dir;
};

//console.log(getDirectoryDataPath());
/*
   TODO 2: 
           a) Implemente a função createFile para que ela de forma síncrona
           Crie um arquivo com o parâmetro enviado (data) e o nome do arquivo (fileName) na pasta src/data
           
           b) Essa função além de criar o arquivo deve retornar a mensagem: "fileName written"
           onde fileName é o fileName enviado. 

           c) Se ocorrer algum erro, retorne a mensagem: "Error creating file"
*/
const createFile = async (data, fileName) => {
  // Implemente aqui o Todo 2
  try {
    await fs.writeFileSync(`${getDirectoryDataPath()}/${fileName}`, data);
    return `${fileName} written`;
  } catch (error) { 
    return 'Error creating file';
  }
};
 

/*
   TODO 3: 
           a) Implemente a função renameFile para que ela de forma síncrona
           Renomeie um arquivo com os parâmetro enviados, dê: (currentName) para (newName) na pasta src/data
           
           b) Essa função deve retornar a mensagem: "currentName renamed to newName"
           onde currentName e newName são os valores enviados. 

           c) Se ocorrer algum erro, retorne a mensagem: "Error renaming file"
*/
const renameFile = async (currentName, newName) => {
  // Implemente aqui o Todo 3
  try {
    await fs.renameSync(`${getDirectoryDataPath()}/${currentName}`, `${getDirectoryDataPath()}/${newName}`);
    return `${currentName} renamed to ${newName}`;
  } catch (error) {
    return 'Error renaming file';
  }

};

renameFile('file1.txt', 'file2.txt');

/*
   TODO 4: 
           a) Implemente a função deleteFile para que ela de forma síncrona
           delete o arquivo com o parâmetro enviado (fileName) na pasta src/data
           
           b) Essa função deve retornar a mensagem: "fileName deleted successfully"
           onde fileName é p valor enviado por parâmetro. 

           c) Se ocorrer algum erro, retorne a mensagem: "Error deleting file"
*/
const deleteFile = async (fileName) => {
  // Implemente aqui o Todo 4
  try {
    await fs.unlinkSync(`${getDirectoryDataPath()}/${fileName}`);
    return `${fileName} deleted successfully`;
  } catch (error) {
    return 'Error deleting file';
  }
};



module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };
