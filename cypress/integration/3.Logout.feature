Feature: Logout
    
    Scenario: logout to Spa
        Given User has already been loggedin
        When User clicks on logout button
        Then "Username" will display