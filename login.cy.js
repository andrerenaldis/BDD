import LoginPage from './login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I Open login Page ', () => {
    LoginPage.visit();
})
When('I Submit Login', () => {

    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.SignIn();
})
Then('I Should See Homepage', () => {
    cy.get('#homeMenu').should('be.visible');
    cy.get('#homeMenu').should('equal','Home');
})