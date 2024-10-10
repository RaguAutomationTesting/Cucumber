package org.utility;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportUtils extends BaseClass {
	
	public static void generateJvmReports(String jpath) throws IOException {
		
		File name = new File(System.getProperty("user.dir")+"src//test//resources//Reports");
		
		Configuration c = new Configuration(name,"Adactin Web Application");
		
		c.addClassifications("Browser Name", readProperty("browser"));
		c.addClassifications("Build Url", readProperty("sit-url"));
		c.addClassifications("PlateForm Name", "windows");
		c.addClassifications("Sprint ", "21");
		
		
		
		List<String> li = new ArrayList<String>();
		
		li.add(jpath);
		
		ReportBuilder r = new ReportBuilder(li,c);
		
		r.generateReports();
		

	}

}
