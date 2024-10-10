package org.objectrepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class BookedItineraryPojo extends BaseClass{
	
	public BookedItineraryPojo() {
	
		PageFactory.initElements(driver, this);
	
	}
	
	
	@FindBy(xpath="(//tbody)[5]")
	private WebElement table;


	public WebElement getTable() {
		return table;
	}
	
	
	
	
	
	
	
	

}
