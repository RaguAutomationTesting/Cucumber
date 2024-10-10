
@search
Feature: As a user i want to search for hotel to book
  
  
  Background:
Given User launch adactin application and sees home page
 And User enters "username" and "password"
|SIRagu123|66E170|
And User clicks Login button
  
  
  Scenario: To search hotel for various inputs
  
  When User selects location, hotel,roomtype and no of rooms
  
  And User selects checkin and checkout date
  
  And User selects adults and childs per room
  
  And User clicks search button
  
  Then user should see results based on his selection and clicks continue button
  