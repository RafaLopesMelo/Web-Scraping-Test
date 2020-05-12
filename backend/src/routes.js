const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');
                                    
router.get('/', async (req, res) => {
   await getPDF();
})

async function getPDF() {
    const browser = await puppeteer.launch({headless: false});
    let page = await browser.newPage();

    await page.goto('https://pje.trt2.jus.br/primeirograu/login.seam?cid=515669');
    await page.type('#username', '09369008810');
    await page.type('#password', 'pje9963');
    await page.click('#btnEntrar');
    await page.goto('https://pje.trt2.jus.br/primeirograu/Painel/painel_usuario/advogado.seam?cid=455498')
    await page.click('#leftAdvPnl_header_label');
    await page.click('input[name=consultaProcessoAdvogadoForm\\:numeroProcessoDecoration\\:numeroProcesso]');
    await page.keyboard.press('Home');
    await page.keyboard.type('00000524920140252');
    await page.click('input[name=consultaProcessoAdvogadoForm\\:searchButon]');
    await page.waitFor(2000);
    await page.click('#leftAdvPnl_header_label');
    for(i=0; i<3; i++){
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter');

    await page.waitFor(1000);

    let pages = await browser.pages();
    page = pages[2];

    await page.click('a img')
    await page.waitFor(1000);
    for(i=0; i<11; i++){
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter');
}

module.exports = router;