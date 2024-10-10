 
 Feature: As a user i want to book a room in hotel
 
 Background:
 	
 	Given User launch adactin application and sees home page
 	
 	And User enters "username" and "password"
	
									|SIRagu123|66E170|
	
	And User clicks Login button
  
 	And User selects location, hotel,roomtype and no of rooms
  
  And User selects checkin and checkout date
  
  And User selects adults and childs per room
  
  And User clicks search button
  
  And user should see results based on his selection and clicks continue button
  
  
  Scenario: To validate Booking Functionality
  
  When user enters firstName and LastName
  