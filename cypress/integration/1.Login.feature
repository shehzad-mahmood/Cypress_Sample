Feature: Login

    Scenario: login to Spa
        Given Display login page
        When i type in
            | username | password |
            | shehzad | ddddd*  |
        And i click on login button
        Then "Sales Navigator" will display
        And "salesnavigator" should display in the url