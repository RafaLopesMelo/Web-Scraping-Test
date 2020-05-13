const puppeteer = require('puppeteer');
const fs = require('fs');
const pdf = require('pdf-parse');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();

const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData(req, res) {
    const dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer, {max: 1}).then(data => res.json(data.text.split('\n')));
}

async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err) => {
        err == null ? getData(req, res) : verifyFileExists(req, res);
    })
}

module.exports = verifyFileExists;