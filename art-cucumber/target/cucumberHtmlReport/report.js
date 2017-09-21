$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "This feature deals with login functionality of Digi Marketplace Website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1272185947,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "login-feature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to DigiMarketPlace Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login button as Email: admin",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter Username and Password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "aayush.tuladhar@gmail.com",
        "Clock124"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be routed to User Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToDigiMarketPlaceWebsite()"
});
formatter.result({
  "duration": 3371526947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 34
    }
  ],
  "location": "LoginStep.iClickOnLoginButtonAsEmailAdmin(String)"
});
formatter.result({
  "duration": 173599104,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterUsernameAndPassword(DataTable)"
});
formatter.result({
  "duration": 432266688,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldBeRoutedToUserDashboardPage()"
});
formatter.result({
  "duration": 26346,
  "status": "passed"
});
formatter.after({
  "duration": 14925,
  "status": "passed"
});
formatter.before({
  "duration": 522673786,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#"
    },
    {
      "line": 13,
      "value": "#  Scenario: Login with correct username and password"
    },
    {
      "line": 14,
      "value": "#    Given I navigate to DigiMarketPlace Website"
    },
    {
      "line": 15,
      "value": "#    And I click on Login button"
    },
    {
      "line": 16,
      "value": "#    And I enter Username and Password"
    },
    {
      "line": 17,
      "value": "#      | username                  | password |"
    },
    {
      "line": 18,
      "value": "#      | aayush.tuladhar@gmail.com | Clock124 |"
    },
    {
      "line": 19,
      "value": "#    Then I should be routed to User Dashboard page"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#    @SmokeTest"
    },
    {
      "line": 22,
      "value": "#  Scenario: Login with correct username and password"
    },
    {
      "line": 23,
      "value": "#    Given I navigate to DigiMarketPlace Website"
    },
    {
      "line": 24,
      "value": "#    And I click on Login button"
    },
    {
      "line": 25,
      "value": "#    And I enter Username and Password"
    },
    {
      "line": 26,
      "value": "#      | username                  | password |"
    },
    {
      "line": 27,
      "value": "#      | aayush.tuladhar@gmail.com | Clock124 |"
    },
    {
      "line": 28,
      "value": "#    Then I should be routed to User Dashboard page"
    },
    {
      "line": 30,
      "value": "#    Scenario Outline: Login with correct username and password"
    },
    {
      "line": 31,
      "value": "#      Given I navigate to DigiMarketPlace Website"
    },
    {
      "line": 32,
      "value": "#      And I click on Login button"
    },
    {
      "line": 33,
      "value": "#      And I enter Username and Password"
    },
    {
      "line": 34,
      "value": "#        | username                  | password |"
    },
    {
      "line": 35,
      "value": "#        | aayush.tuladhar@gmail.com | Clock124 |"
    },
    {
      "line": 36,
      "value": "#      Then I should be routed to User Dashboard page"
    },
    {
      "line": 37,
      "value": "#      Examples:"
    }
  ],
  "line": 39,
  "name": "Login with incorrect username and password",
  "description": "",
  "id": "login-feature;login-with-incorrect-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I enter invalid Username and Password",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I should be in bad page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iEnterInvalidUsernameAndPassword()"
});
formatter.result({
  "duration": 146027,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 27918,
  "status": "passed"
});
});