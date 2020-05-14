const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();
const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData(req, res) {
    
    const dataBuffer = await fs.readFileSync(pdfPath);
    await pdf(dataBuffer, {max: 1})
    .then(result => dataArray = result.text.split(' ').join('').split('\n'));
    let filteredDataArray = dataArray.filter(el => el.trim() !== "")

    function search(term) {
        for (i=0; i<filteredDataArray.lenght; i++) {
            var position = filteredDataArray[i].indexOf(term);
        }
        return position
    }

    const data = {
        author: search('RECLAMANTE'),
        defendent: "",
        processNumber: "",
        court: "",
        classification: ""
    }
    
    res.json({data, filteredDataArray});
}



async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err) => {
        err == null ? getData(req, res) : verifyFileExists(req, res);
    })
}

module.exports = verifyFileExists;