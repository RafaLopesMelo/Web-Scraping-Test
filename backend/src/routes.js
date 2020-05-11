const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');
                                    
router.get('/', async (req, res) => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
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
})

module.exports = router;
