package org.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utility.BaseClass;

public class LoginPojo extends BaseClass {

	public LoginPojo() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@id = 'username']")
	private WebElement userName;

	@FindBy(xpath = "//input[@id = 'password']")
	private WebElement passWord;

	@FindBy(id = "login")
	private WebElement loginBtn;

	@FindBy(id = "username_show")
	private WebElement successMsg;
	
	@FindBy(xpath=" //div[@class='auth_error']")
	private WebElement errorMsg;
	
	public WebElement getErrorMsg() {
		return errorMsg;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	public WebElement getSuccessMsg() {
		return successMsg;
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getPassWord() {
		return passWord;
	}

}
