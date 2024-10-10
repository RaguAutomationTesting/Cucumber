$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/BookedIternary.feature");
formatter.feature({
  "name": "To validate BookedIternary function in Adactin Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BookedIti"
    }
  ]
});
formatter.scenario({
  "name": "BookedIternary Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BookedIti"
    }
  ]
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/BookedIternary.feature:7)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"username\" and \"password\"",
  "rows": [
    {
      "cells": [
        "SIRagu123",
        "66E170"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enters_and(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Booked Itinerary link",
  "keyword": "And "
});
formatter.match({
  "location": "BookedItinerary.user_clicks_Booked_Itinerary_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User lands on Booked Itinerary page and Booked hotel history is stored to excel",
  "keyword": "Then "
});
formatter.match({
  "location": "BookedItinerary.user_lands_on_Booked_Itinerary_page_and_Booked_hotel_history_is_stored_to_excel()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/FeatureFile/Booking.feature");
formatter.feature({
  "name": "As a user i want to book a room in hotel",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Booking.feature:6)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"username\" and \"password\"",
  "rows": [
    {
      "cells": [
        "SIRagu123",
        "66E170"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_enters_and(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects location, hotel,roomtype and no of rooms",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_selects_location_hotel_roomtype_and_no_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects checkin and checkout date",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_selects_checkin_and_checkout_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects adults and childs per room",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_selects_adults_and_childs_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_clicks_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see results based on his selection and clicks continue button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_should_see_results_based_on_his_selection_and_clicks_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate Booking Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enters firstName and LastName",
  "keyword": "When "
});
formatter.match({
  "location": "Booking.user_enters_firstName_and_LastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/FeatureFile/Login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "As a user, i want to login to AdactinHotel page.\nSo that i can book rooms.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Login.feature:9)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "User enters \"username\" and \"password\"",
  "rows": [
    {
      "cells": [
        "SIRagu123",
        "66E170"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enters_and(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User successfully login to his account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.user_successfully_login_to_his_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User sees error message for unsuccesfull login attempt",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "avaca",
        "aefe"
      ]
    },
    {
      "cells": [
        "wve",
        "evv"
      ]
    },
    {
      "cells": [
        "ecrv",
        "ecev"
      ]
    },
    {
      "cells": [
        "evet",
        "evtb"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Login.feature:9)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "User enter \"avaca\" and \"aefe\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees error message for unsuccesfull login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.user_sees_error_message_for_unsuccesfull_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Login.feature:9)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "User enter \"wve\" and \"evv\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees error message for unsuccesfull login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.user_sees_error_message_for_unsuccesfull_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Login.feature:9)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "User enter \"ecrv\" and \"ecev\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees error message for unsuccesfull login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.user_sees_error_message_for_unsuccesfull_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/Login.feature:9)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@invalid"
    }
  ]
});
formatter.step({
  "name": "User enter \"evet\" and \"evtb\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeature.user_enter_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User sees error message for unsuccesfull login attempt",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.user_sees_error_message_for_unsuccesfull_login_attempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/FeatureFile/SearchHotel.feature");
formatter.feature({
  "name": "As a user i want to search for hotel to book",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch adactin application and sees home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeature.user_launch_adactin_application_and_sees_home_page()"
});
formatter.result({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:749)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat ✽.User launch adactin application and sees home page(file:src/test/resources/FeatureFile/SearchHotel.feature:7)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: Error HTTP 404 executing https://msedgewebdriverstorage.blob.core.windows.net/edgewebdriver/129.0.2792.76/edgedriver_win32.zip\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:152)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.downloadAndExtract(Downloader.java:131)\r\n\tat io.github.bonigarcia.wdm.online.Downloader.download(Downloader.java:88)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:630)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:549)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:746)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:555)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:285)\r\n\tat org.utility.BaseClass.launchBrowser(BaseClass.java:47)\r\n\tat org.stepdefinition.LoginFeature.user_launch_adactin_application_and_sees_home_page(LoginFeature.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"username\" and \"password\"",
  "rows": [
    {
      "cells": [
        "SIRagu123",
        "66E170"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_enters_and(String,String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeature.user_clicks_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To search hotel for various inputs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.step({
  "name": "User selects location, hotel,roomtype and no of rooms",
  "keyword": "When "
});
formatter.match({
  "location": "SearchHotel.user_selects_location_hotel_roomtype_and_no_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects checkin and checkout date",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_selects_checkin_and_checkout_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects adults and childs per room",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_selects_adults_and_childs_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks search button",
  "keyword": "And "
});
formatter.match({
  "location": "SearchHotel.user_clicks_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see results based on his selection and clicks continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_should_see_results_based_on_his_selection_and_clicks_continue_button()"
});
formatter.result({
  "status": "skipped"
});
});