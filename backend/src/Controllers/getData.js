const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();

const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;


async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err) => {
        err == null ? getData(req, res) : verifyFileExists(req, res);
    })
}

async function getData(req, res) {
    const dataBuffer = await fs.readFileSync(pdfPath);
    await pdf(dataBuffer, {max: 1})
    .then(result => dataArray = result.text.split(' ').join('').split('\n'));

    let filteredDataArray = dataArray.filter(el => el.trim() !== "");

    function searchForData(term){
        for(i=0; i<filteredDataArray.length; i++) {
            if(filteredDataArray[i].search(term) != -1) return i;
        };
        return 'Informação não encontrada!';
    }

    const data = {
        author: filteredDataArray[searchForData('RECLAMANTE')],
        defendent: filteredDataArray[searchForData('RECLAMADO')],
        defendentCnpj: filteredDataArray[searchForData('CNPJ')],
        processNumber: filteredDataArray[searchForData('ATOrd')],
        court: filteredDataArray[searchForData('TRIBUNAL')],
        classification: filteredDataArray[searchForData('AÇÃOTRABALHISTA')]
    }
    
    res.json({data, filteredDataArray});
}

module.exports = verifyFileExists;