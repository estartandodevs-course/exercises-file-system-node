/*
   TODO 1:  Deve retornar o caminho para a pasta src/data 
            independente de la base de sistema operacional 
            Exemplo:  
                Windows : c:\\caminho-ate-seu-projeto\src\data  
                Linux/macOs: /caminho-ate-seu-projeto/src/data
*/

const path = require ('path')

const getDirectoryDataPath = () => {
  // Implemente aqui o Todo 1
  const dataPath = path.join(__dirname, '..', 'data');
  return dataPath;
};

getDirectoryDataPath()

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
};

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
};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };
