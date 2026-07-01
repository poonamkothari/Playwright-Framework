const{expect} = require('@playwright/test');
const config =require('../Data/LoginData.json');

class LoginPage {

    constructor(page){
        this.page=page;

        this.usernameInput=page.getByRole('textbox', {name:'Username'});
       this.passwordInput= page.getByRole('textbox', {name:'password'});
       this.loginButton = page.getByRole('button', {name:'Login'});
       //this.loginUrl='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
       //this.dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
       this.dashboardHeading=page.getByRole('heading', {name: 'Dashboard'});
    }
    async navigate(){
        //await this.page.goto(this.loginUrl)
     await this.page.goto(config.urls.loginUrl);
    }

    async enterUserName(username){
    await this.usernameInput.fill(username);
    }
   
    async enterPassword(password){
    await this.passwordInput.fill(password);

    }

    async clickLogin(){
    await this.loginButton.click();
 }
   async assertOnDashboard() {
   
await expect(this.page).toHaveURL(config.urls.dashboardUrl);
   }
   
   async AssertOnDashboardHeading(){
    await expect(this.dashboardHeading).toBeVisible();
   }
}
module.exports = { LoginPage };