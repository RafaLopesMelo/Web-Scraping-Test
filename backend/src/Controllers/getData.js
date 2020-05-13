const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();
let data;

const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData(req, res) {
    const dataBuffer = await fs.readFileSync(pdfPath);
    await pdf(dataBuffer, {max: 1})
    .then(result => data = result.text.split(' ').join('').split('\n'));
    const filteredData = data.filter(el => el.trim() !== "");
    filteredData.splice(0, 3);
    filteredData.splice(2, 1);
    res.json(filteredData);
}

async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err) => {
        err == null ? getData(req, res) : verifyFileExists(req, res);
    })
}

module.exports = verifyFileExists;