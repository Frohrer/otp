'use strict';

import express from 'express';
import { join } from 'path';
import { document_maker } from './pdf_helpers/html_composer.js';
import { generateRandomString } from './pdf_helpers/helper_functions.js';
import { launch } from 'puppeteer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();

let PORT = 8080;

app.get('/test', (req, res) => {
    res.send('Hello World');
  });

app.get('/', async function(req, res){
    let custom_html = await document_maker()
    let pdf_dir = join(`${__dirname}/tmp/${generateRandomString(10)}.pdf`)
    const browser = await launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--allow-file-access-from-files',
            '--enable-local-file-access'
            ],
        executablePath: '/usr/bin/chromium-browser'
    });
    const page = await browser.newPage();
    await page.setContent(custom_html);
    await page.pdf({
        path: pdf_dir,
        format: 'Letter' || 'A4',
        displayHeaderFooter: true,
        headerTemplate:`<span style="position: inherit; top: 30px; font-size: 10px; width: 800px; height: 30px; background-color: black; color:black; margin-left: 30px;">One Time Pad</span>`,
        footerTemplate:`<span style="font-size: 10px; width: 800px; height: 20px; background-color: black; color:black; margin-left: 30px;">One Time Pad</span>
        <span style="font-size: 10px; width: 100px; height: 20px; background-color: black; color:black; margin-top: 30px;"><span class="pageNumber"></span>/<span class="totalPages"></span></span>`,
        printBackground: true,
        scale:1,
        margin: {
            top: "80px",
            left: "35px",
            right: "35px",
            bottom: "80px"
        }
    });

    await browser.close();
    res.sendFile(pdf_dir, function (err) {
        if (err) {
            console.log(err,id);
        } else {
            console.log('Sent:', pdf_dir);
        }
    });
});

app.listen(PORT, function(err){
		if (err) console.log(err);
		console.log("Server listening on PORT", PORT);
});
