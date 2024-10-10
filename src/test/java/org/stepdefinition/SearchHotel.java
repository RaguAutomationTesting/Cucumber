package org.stepdefinition;

import java.io.IOException;

import org.objectrepository.HomePage;
import org.openqa.selenium.WebElement;
import org.utility.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchHotel extends BaseClass {

	public static HomePage hp;

	@When("User selects location, hotel,roomtype and no of rooms")
	public void user_selects_location_hotel_roomtype_and_no_of_rooms() throws IOException {
		hp = new HomePage();

		selectByTxt(hp.getLocationDrpDwn(), getValueFromExcel("SearchHotelData", "Location", 0, 0, 1, 0));
		selectByTxt(hp.getHotelDrpDwn(), getValueFromExcel("SearchHotelData", "Hotels", 0, 1, 1, 1));
		selectByTxt(hp.getRoomTypeDrpDwn(), getValueFromExcel("SearchHotelData", "RoomType", 0, 2, 1, 2));

		selectByVlue(hp.getNoOfRoomsDrpDwn(), getValueFromExcel("SearchHotelData", "No of Rooms", 0, 3, 3, 3));
	}

	@When("User selects checkin and checkout date")
	public void user_selects_checkin_and_checkout_date() throws IOException {
		hp = new HomePage();
		
		WebElement checkInDate = hp.getCheckInDate();
		checkInDate.sendKeys(getValueFromExcel("SearchHotelData", "checkInDate", 0, 6, 1, 6));
		
		WebElement chcekOutDate = hp.getChcekOutDate();
		
		chcekOutDate.sendKeys(getValueFromExcel("SearchHotelData", "checkOutDate", 0, 7, 1, 7));
		
		
	}

	@When("User selects adults and childs per room")
	public void user_selects_adults_and_childs_per_room() throws IOException {
		hp = new HomePage();
		
		selectByVlue(hp.getAdultRoomDrpDwn(), getValueFromExcel("SearchHotelData","Adults Per Room", 0, 4, 3, 4));
		
		selectByVlue(hp.getChildRoomDrpDwn(), getValueFromExcel("SearchHotelData","Childrens Per Room", 0, 5, 3, 5));
		
	}

	@When("User clicks search button")
	public void user_clicks_search_button() {
		hp = new HomePage();
		
		hp.getSearchBtn().click();
		

	}

	@Then("user should see results based on his selection and clicks continue button")
	public void user_should_see_results_based_on_his_selection_and_clicks_continue_button() {
		hp = new HomePage();
		
		hp.getRadiobtn().click();
		
		hp.getCntue().click();
		
	}



}
