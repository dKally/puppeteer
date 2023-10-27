import puppeteer from 'puppeteer'

(async () => {
    const browser = await puppeteer.launch({ headless: "new"});
    const page = await browser.newPage();
    await page.goto('https://github.com/dKally');
    const elements = await page.$$('.application-main');
    console.log(elements)
    await page.screenshot({ path: 'eu.png' });
    await browser.close();
})();