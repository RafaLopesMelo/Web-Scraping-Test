const puppeteer = require('puppeteer');
const fs = require('fs');
const downloadsFolder = require('downloads-folder');
const downloadsPath = downloadsFolder();

const processoNumero = '1000452-49.2013.5.02.0521';
const pdfPath = `${downloadsPath}/${processoNumero}.pdf`;

async function getData(req, res) {
    const browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();
    await page.goto(pdfPath);
}

async function verifyFileExists(req, res) {
    fs.stat(pdfPath, (err, stat) => {
        err == null ? getData() : verifyFileExists();
    })
}

module.exports = verifyFileExists;