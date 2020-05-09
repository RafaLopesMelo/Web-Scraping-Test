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
    /*await page.click('#jurisdicaoForm\:jurisTree\:j__id251\:1\::j_id25');*/
})

module.exports = router;