const puppeteer = require('puppeteer');
const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();

const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData() {
    const dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(data => console.log(data.text));
}

async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err, stat) => {
        err == null ? getData() : verifyFileExists();
    })
}

module.exports = verifyFileExists;