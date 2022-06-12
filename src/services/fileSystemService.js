const fs = require("fs");
const path = require("path");

/*
   TODO 1:  Deve retornar o caminho para a pasta src/data 
            independente de la base de sistema operacional 
            Exemplo:  
                Windows : c:\\caminho-ate-seu-projeto\src\data  
                Linux/macOs: /caminho-ate-seu-projeto/src/data
*/

const getDirectoryDataPath = () => { 
    return path.join(__dirname, "../../src/data");
};

/*
   TODO 2: 
           a) Implemente a função createFile para que ela de forma síncrona
           Crie um arquivo com o parâmetro enviado (data) e o nome do arquivo (fileName) na pasta src/data
           
           b) Essa função além de criar o arquivo deve retornar a mensagem: "fileName written"
           onde fileName é o fileName enviado. 
           c) Se ocorrer algum erro, retorne a mensagem: "Error creating file"
*/
const createFile = async (data, fileName) => {
    try {
        await fs.writeFileSync(path.join(getDirectoryDataPath(), fileName), data);
        return `${fileName} written`;
    } catch (error) {
        return "Error creating file";
    }};

/*
   TODO 3: 
           a) Implemente a função renameFile para que ela de forma síncrona
           Renomeie um arquivo com os parâmetro enviados, dê: (currentName) para (newName) na pasta src/data
           
           b) Essa função deve retornar a mensagem: "currentName renamed to newName"
           onde currentName e newName são os valores enviados. 
           c) Se ocorrer algum erro, retorne a mensagem: "Error renaming file"
*/
const renameFile = async (currentName, newName) => {
    try {
        await fs.renameSync(path.join(getDirectoryDataPath(), currentName), path.join(getDirectoryDataPath(), newName));
        return `${currentName} renamed to ${newName}`;
    } catch (error) {
        return "Error renaming file";
    }};

/*
   TODO 4: 
           a) Implemente a função deleteFile para que ela de forma síncrona
           delete o arquivo com o parâmetro enviado (fileName) na pasta src/data
           
           b) Essa função deve retornar a mensagem: "fileName deleted successfully"
           onde fileName é p valor enviado por parâmetro. 
           c) Se ocorrer algum erro, retorne a mensagem: "Error deleting file"
*/
const deleteFile = async (fileName) => {
    try {
        await fs.unlinkSync(path.join(getDirectoryDataPath(), fileName));
        return `${fileName} deleted successfully`;
    } catch (error) {
        return "Error deleting file";
    }};

module.exports = { getDirectoryDataPath, createFile, renameFile, deleteFile };