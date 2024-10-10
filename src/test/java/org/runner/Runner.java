package org.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.utility.ReportUtils;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src/test/resources",
		glue = "org.stepdefinition", 
		dryRun = false,
		plugin= { "pretty",
				"html:src//test//resources//Reports//abc.html",
				"json:src//test//resources//Reports//output.json",
				"junit:src//test//resources//Reports//ad.xml"}
	
)
public class Runner {
	
	@AfterClass
	public static void reportGeneration() throws IOException {
		
		ReportUtils.generateJvmReports(System.getProperty("user.dir")+"src//test//resources//Reports//output.json");
		
	}

}
