
@BookedIti
 Feature: To validate BookedIternary function in Adactin Application
 
 Scenario: BookedIternary Functionality
 
 Given User launch adactin application and sees home page
 When User enters "username" and "password"
|SIRagu123|66E170|
And User clicks Login button
And User clicks Booked Itinerary link
Then User lands on Booked Itinerary page and Booked hotel history is stored to excel