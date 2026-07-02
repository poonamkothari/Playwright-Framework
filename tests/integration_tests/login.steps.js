const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const loginData=require('../Data/LoginData.json');

//import { Given,When,Then } from "@cucumber/cucumber";
//const { chromium } = require('playwright');
//import { chromium, expect} from '@playwright/test';
//const {LoginPage} =require('./Pages/LoginPage');
//const path = require('path');
//console.log('Resolved path:', path.resolve(__dirname, '../Pages/LoginPage.js'));
const{LoginPage} =require('../Pages/login-page');

let loginPage;

Given('the user navigates to the login page', async function () {
 
 //await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
loginPage = new LoginPage(this.page);
 await loginPage.navigate();

});

 //When('the user enters username {string}', async function (username) {
 When('the user enters username', async function () {
          // await this.page.getByRole('textbox', {name:'Username'}).fill(username);
        // await loginPage.enterUserName(username);
          await loginPage.enterUserName(loginData.validUser.username);
        
        });


        // When('the user enters password {string}', async function (password) {
          When('the user enters password', async function () {
           //await this.page.getByRole('textbox',{name:'password'}).fill(password);
           //await loginPage.enterPassword(password); 
           await loginPage.enterPassword(loginData.validUser.password); 
         });


         When('the user clicks the login button', async function () {
          //await this.page.getByRole('button', {name: ' Login '}).click();
           await loginPage.clickLogin();
          
         });

         Then('the user should be redirected to the dashboard', async function () {
            //await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
          //await loginPage.assertOnDashboard();
          
            await loginPage.assertOnDashboard();
         });

          Then('the dashboard should display a dashboard heading', async function () {
           //await expect(this.page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
           //await expect(page.locator('h1')).toHaveText('Dashboard');
          await loginPage.AssertOnDashboardHeading();
            });