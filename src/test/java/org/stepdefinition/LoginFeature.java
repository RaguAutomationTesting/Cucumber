package org.stepdefinition;

import org.junit.Assert;
import org.objectrepository.LoginPojo;
import org.openqa.selenium.WebElement;
import org.utility.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginFeature extends BaseClass {

	@Given("User launch adactin application and sees home page")
	public void user_launch_adactin_application_and_sees_home_page() {

		launchBrowser("edge");
		maximize();

		launchUrl("https://adactinhotelapp.com");

	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String string, String string2, io.cucumber.datatable.DataTable dataTable) {

		LoginPojo lp = new LoginPojo();

		WebElement userName = lp.getUserName();

		WebElement passWord = lp.getPassWord();

		enterText(userName, "SIRagu123", 3);
		enterText(passWord, "66E170", 4);

	}

	@When("User clicks Login button")
	public void user_clicks_Login_button() {
		LoginPojo lp = new LoginPojo();

		click(lp.getLoginBtn());

	}

	@Then("User successfully login to his account")
	public void user_successfully_login_to_his_account() {

		LoginPojo lp = new LoginPojo();

		WebElement successMsg = lp.getSuccessMsg();

		String elementValue = elementValue(successMsg);

		Assert.assertTrue("Login Attempt Failed", elementValue.equals("Hello SIRagu123!"));

	}

	@When("User enter {string} and {string}")
	public void user_enter_and(String s1, String s2) {

		LoginPojo lp = new LoginPojo();

		WebElement userName = lp.getUserName();

		WebElement passWord = lp.getPassWord();

		enterText(userName, s1, 3);

		System.out.println(elementValue(userName));
		enterText(passWord, s2, 4);
		System.out.println(elementValue(passWord));

	}

	@Then("User sees error message for unsuccesfull login attempt")
	public void user_sees_error_message_for_unsuccesfull_login_attempt() {

		LoginPojo lp = new LoginPojo();

		WebElement errorMsg = lp.getErrorMsg();
		String errText = errorMsg.getText();

		Assert.assertTrue("Error Message Not Shown for unsuccesfull login",
				errText.contains("Invalid Login details or Your Password might have expired. "));
		closeBrowser();
	}

}
