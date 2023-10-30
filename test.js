import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://blitz.gg/lol/profile/br1/KaczL');

    const topLineText = await page.evaluate(() => {
        const rankElement = document.querySelector('.name');
        const pdlElement = document.querySelector('.points');
        
        if (rankElement && pdlElement) {
            const rank = rankElement.textContent.trim();
            const pdl = pdlElement.textContent.trim();
            return { rank, pdl };
        } else {
            return null;
        }
    });

    if (topLineText) {
        console.log('Rank atual:', topLineText.rank, ' ', topLineText.pdl);
    } else {
        console.log('Rank não encontrado...');
    }

    await browser.close();
})();