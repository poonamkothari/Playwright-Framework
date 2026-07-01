Feature: Login functionality

  As a valid user
  I want to log into the OrangeHRM application
  So that I can access the dashboard

  
   Background:
    Given the user navigates to the login page

     Scenario: Successful login with valid credentials
     When the user enters username
     And the user enters password
     And the user clicks the login button
    Then the user should be redirected to the dashboard
    And the dashboard should display a dashboard heading
