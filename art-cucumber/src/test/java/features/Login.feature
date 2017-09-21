Feature: Login Feature
  This feature deals with login functionality of Digi Marketplace Website

  Scenario: Login with correct username and password
    Given I navigate to DigiMarketPlace Website
    And I click on Login button as Email: admin
    And I enter Username and Password
      | username                  | password |
      | aayush.tuladhar@gmail.com | Clock124 |
    Then I should be routed to User Dashboard page

#
#  Scenario: Login with correct username and password
#    Given I navigate to DigiMarketPlace Website
#    And I click on Login button
#    And I enter Username and Password
#      | username                  | password |
#      | aayush.tuladhar@gmail.com | Clock124 |
#    Then I should be routed to User Dashboard page
#
#    @SmokeTest
#  Scenario: Login with correct username and password
#    Given I navigate to DigiMarketPlace Website
#    And I click on Login button
#    And I enter Username and Password
#      | username                  | password |
#      | aayush.tuladhar@gmail.com | Clock124 |
#    Then I should be routed to User Dashboard page

#    Scenario Outline: Login with correct username and password
#      Given I navigate to DigiMarketPlace Website
#      And I click on Login button
#      And I enter Username and Password
#        | username                  | password |
#        | aayush.tuladhar@gmail.com | Clock124 |
#      Then I should be routed to User Dashboard page
#      Examples:

 Scenario: Login with incorrect username and password
   Given I enter invalid Username and Password
   Then I should be in bad page
