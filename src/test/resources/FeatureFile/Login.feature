@Login
Feature: Login Feature

As a user, i want to login to AdactinHotel page.
So that i can book rooms.


Background:
Given User launch adactin application and sees home page

@valid
Scenario: Login with valid credentials

When User enters "username" and "password"
|SIRagu123|66E170|
And User clicks Login button
Then User successfully login to his account


@invalid

Scenario Outline: Login with invalid credentials

When User enter "<username>" and "<password>"
And User clicks Login button
Then User sees error message for unsuccesfull login attempt

Examples:
|username|password|
|avaca|aefe|
|wve|evv|
|ecrv|ecev|
|evet|evtb|
