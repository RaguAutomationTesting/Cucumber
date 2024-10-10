package org.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class HomePage extends BaseClass {
	
	
	
	public HomePage() {
		 PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//a[text()='Booked Itinerary']")
	private WebElement bkdItineraryLnk;

	public WebElement getBkdItineraryLnk() {
		return bkdItineraryLnk;
	}
	
	
	@FindBy(xpath="//select[@id='location']")
	private WebElement locationDrpDwn;
	
	@FindBy(xpath="//select[@id='hotels']")
	private WebElement hotelDrpDwn;
	
	@FindBy(xpath="//select[@id='room_type']")
	private WebElement roomTypeDrpDwn;
	
	@FindBy(xpath="//select[@id='room_nos']")
	private WebElement noOfRoomsDrpDwn;

	@FindBy(xpath="//input[@id='datepick_in']")
	private WebElement checkInDate;
	
	@FindBy(xpath="//input[@id='datepick_out']")
	private WebElement chcekOutDate;
	
		
	@FindBy(xpath="//select[@id='adult_room']")
	private WebElement adultRoomDrpDwn;
	
	@FindBy(xpath="//select[@id='child_room']")
	private WebElement childRoomDrpDwn;
	
	
	@FindBy(xpath="//input[@id='Submit']")
	private WebElement searchBtn;
	
	
	@FindBy(css="input#radiobutton_0")
	private WebElement radiobtn;
	
	@FindBy(css="input#continue")
	private WebElement cntue;
	
	
	public WebElement getCntue() {
		return cntue;
	}

	public WebElement getRadiobtn() {
		return radiobtn;
	}

	public WebElement getSearchBtn() {
		return searchBtn;
	}

	public WebElement getCheckInDate() {
		return checkInDate;
	}

	public WebElement getChcekOutDate() {
		return chcekOutDate;
	}

	public WebElement getAdultRoomDrpDwn() {
		return adultRoomDrpDwn;
	}

	public WebElement getChildRoomDrpDwn() {
		return childRoomDrpDwn;
	}

	public WebElement getLocationDrpDwn() {
		return locationDrpDwn;
	}

	public WebElement getHotelDrpDwn() {
		return hotelDrpDwn;
	}

	public WebElement getRoomTypeDrpDwn() {
		return roomTypeDrpDwn;
	}

	public WebElement getNoOfRoomsDrpDwn() {
		return noOfRoomsDrpDwn;
	}
	
	
	
	
	
	
	
	
	

}
