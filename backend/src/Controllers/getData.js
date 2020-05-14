const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();

let filteredDataArray;
const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData(req, res) {
    
    const dataBuffer = await fs.readFileSync(pdfPath);
    await pdf(dataBuffer, {max: 1})
    .then(result => dataArray = result.text.split(' ').join('').split('\n'));
    filteredDataArray = dataArray.filter(el => el.trim() !== "")

    const data = {
        author: search('RECLAMANTE'),
        defendent: "",
        processNumber: "",
        court: "",
        classification: ""
    }
    
    res.json({data, filteredDataArray});
}

function search(term) {
    for (i=0; i<filteredDataArray.lenght; i++) {
        var position = filteredDataArray[i].indexOf(term);
    }
    return position
}

async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err) => {
        err == null ? getData(req, res) : verifyFileExists(req, res);
    })
}

module.exports = verifyFileExists;