const Puppeteer = require('puppeteer')

    ; (async () => {
        const browser = await Puppeteer.launch({
            headless: true,
            //defaultViewport: null,
            //executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            //slowMo: 500,
            //args: [ '--start-maximized']
        })
        const page = await browser.newPage()
        //await page.goto("https://www.correios.com.br")
        await page.goto("https://buscacepinter.correios.com.br/app/endereco/index.php");
        await page.waitForSelector('#endereco');
        await page.type('#endereco', '03336000');
        await page.click("#btn_pesquisar");
        await page.waitForSelector("#btn_nbusca");

        await page.screenshot({ path: './images/correios.png' });

        // Implementar novamente com as mudanças de ids, table enfim tudo

        //const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page() )))
        //await page.keyboard.press('Enter')
        //const page2 = await newPagePromise;
        //await page2.bringToFront(); 

        //await page2.waitForResponse(response => response.url().includes('/app/endereco/'));

        // let headerData = await page2.$$eval('table thead tr th', ths => ths.map( (th) => {
        //     return th.innerText;
        // })) 
        // console.log('headerData: ', headerData)


        // let bodyData = await page2.$$eval('table tbody tr td', tds => tds.map( (td) => {
        //     return td.innerText;
        // }))
        // console.log('bodyData: ', bodyData)

        // let fullData = [];
        // fullData.push(headerData)
        // fullData.push(bodyData)
        // console.log('fullData', fullData)

        // let obj = {};
        // for (let i = 0; i < headerData.length; i++) {
        //     obj[headerData[i]] = bodyData[i];
        // }
        // console.log('objectData', obj)

        // let mapObj = new Map(); 
        // for(let i = 0; i < headerData.length; i++){ 
        //     mapObj.set(headerData[i], bodyData[i]); 
        // }
        // console.log('mapObj', mapObj)

        // let table = await page2.$eval('#resultado-DNEC', (el) => el.outerHTML)
        // console.log('Table: ', table)

        //await page.screenshot({ path: 'correios.png' });

        await browser.close()
    })()
