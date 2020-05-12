const puppeteer = require('puppeteer');

const processoNumero = '1000452-49.2013.5.02.0521'.substring(0, 15) + '1000452-49.2013.5.02.0521'.substring(20, 24)

async function getPdf(req, res, next) {
    const browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();

    await page.goto('https://pje.trt2.jus.br/primeirograu/login.seam?cid=515669');
    await page.type('#username', '09369008810');
    await page.type('#password', 'pje9963');
    await page.click('#btnEntrar');
    await page.goto('https://pje.trt2.jus.br/primeirograu/Painel/painel_usuario/advogado.seam?cid=455498')
    await page.click('#leftAdvPnl_header_label');
    await page.click('input[name=consultaProcessoAdvogadoForm\\:numeroProcessoDecoration\\:numeroProcesso]');
    await page.keyboard.press('Home');
    await page.keyboard.type(processoNumero);
    await page.click('input[name=consultaProcessoAdvogadoForm\\:searchButon]');
    await page.waitFor(2000);
    await page.click('#leftAdvPnl_header_label');
    for (i = 0; i < 3; i++) {
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter');

    await page.waitFor(2000);

    let pages = await browser.pages();
    page = pages[2];

    await page.click('a img')
    await page.waitFor(4000);
    for (i = 0; i < 11; i++) {
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Enter');
    
    return next()
}

module.exports = getPdf;

