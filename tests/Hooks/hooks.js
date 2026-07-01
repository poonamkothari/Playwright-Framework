//import{BeforeAll, AfterAll} from '@cucumber/cucumber'
//mport { chromium } from '@playwright/test'
//import { pageFixture } from './pageFixture';
const { Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber');
const{chromium}=require('playwright')


//const{pageFixture}=require('./pageFixture');
//const { pageFixture } = require('./pageFixture');
let browser;
let context;

BeforeAll(async function(){
   browser = await chromium.launch({ headless: false }); 
})

Before(async function() {
    try {
    //browser = await chromium.launch({ headless: false });
    context=await browser.newContext();
    //this.page = await this.browser.newPage();
    context=await browser.newContext();
     this.page=await context.newPage();
  } catch (err) {
    console.error('Error in BeforeAll:', err);
    throw err; // rethrow so Cucumber reports the failure
  }
});
   //pageFixture.page=page;
   //global.page =page;


After(async function({pickle}){
 
    const screenshot = await this.page.screenshot({ path: `./reports/${pickle.name}.png`, fullPage: true });

 // Attach screenshot to Cucumber report 
 await this.attach(screenshot, 'image/png');
 
 //if(this.context)await this.context.close();
//if(context)await context.close();
await context.close();
});

AfterAll(async function(){
   //if (this.browser) await this.browser.close();
    // if (browser) await browser.close();
    await browser.close();
});