const path = require('path');
const fs = require('fs');

// lib that runs the dcu commands
var shell = require('shelljs');

// starts .envfile
const dotenv = require('dotenv');
dotenv.config();

const node = process.env.ADMIN_URL;
const dir = process.env.FOLDER_PATH;
const component = process.env.FOLDER_NAME;
const key = process.env.APP_KEY;

// init script
try{
    listFolders(dir);

} catch(err){
    console.log(err);
}


function listFolders(dir) {
    
    const directoryPath = path.join(__dirname, dir);
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error (`Unable to scan directory: ${err}`);
        } 
        files.forEach(function (file) {
            // Running the --grab dommand for the current file
            runScript(file);
        });
        console.log('Grab concluído com sucesso');
    });
}


function runScript(folder) {
    console.log(shell.exec(`dcu --grab "${component}/${folder}" -n ${node} -k ${key}`));
    console.log(`--------------------------------------------`);
}