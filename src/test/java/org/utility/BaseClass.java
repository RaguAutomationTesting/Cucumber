package org.utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;

	public static Select select;

	public static FileInputStream fin;

	public static File f;

	public static Workbook w;

	public static Sheet s;

	public static Row r;

	public static Cell c;

	public void launchBrowser(String browserName) {

		if (browserName.equals("edge")) {

			WebDriverManager.edgedriver().setup();

			driver = new EdgeDriver();

		}

	}

	public void maximize() {

		driver.manage().window().maximize();
	}

	public void launchUrl(String urlAdrs) {
		driver.get(urlAdrs);
	}

	public void enterText(WebElement element, String value, int seconds) {

		element.sendKeys(value);

		driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);

	}

	public void click(WebElement element) {

		if (element.isEnabled()) {

			element.click();

		}

	}

	public String elementValue(WebElement element) {

		return element.getAttribute("value");

	}

	public void closeBrowser() {
		driver.close();
	}

	public void createExcel(String excelPath, String sheetName) throws Exception {

		f = new File(excelPath);

		w = new XSSFWorkbook();

		s = w.createSheet(sheetName);

		r = s.createRow(0);

		c = r.createCell(0);

	}

	public void selectByTxt(WebElement element, String text) {

		select = new Select(element);

		select.selectByVisibleText(text);

	}

	public void selectByVlue(WebElement element, String text) {

		select = new Select(element);

		select.selectByValue(text);

	}

	public void selectByIndx(WebElement element, int index) {

		select = new Select(element);

		select.selectByIndex(index);

	}

	public String getValueFromExcel(String sheetName, String header, int headerRowNum, int headerCellNo, int valueRowNo,
			int cellNo) throws IOException {

		f = new File(
				"C:\\Users\\HP\\eclipse-workspace\\AdactinAutomation\\src\\test\\resources\\DataToExcel\\searchHotelData.xlsx");

		fin = new FileInputStream(f);

		w = new XSSFWorkbook(fin);
		s = w.getSheet(sheetName);

		r = s.getRow(headerRowNum);

		c = r.getCell(headerCellNo);

		String value = "";

		if (c.getStringCellValue().equals(header)) {

			r = s.getRow(valueRowNo);

			c = r.getCell(cellNo);

			int cellType = c.getCellType();
			if (cellType == 1) {

				value = c.getStringCellValue();

			} 
			
			else if (DateUtil.isCellDateFormatted(c)) {

				Date d = c.getDateCellValue();

				SimpleDateFormat sim = new SimpleDateFormat("dd/mm/yyyy");

				value = sim.format(d);

			}
			
			else {
				
				double d = c.getNumericCellValue();
				
				long l = (long) d;
				
				value = String.valueOf(l);
				
				
			}

		}

		  
		return value;

	}
	
	public static String readProperty(String propName) throws IOException {
		
		File file = new File("C:\\Users\\HP\\eclipse-workspace\\AdactinAutomation\\src\\test\\resources\\Eniv Variables\\config.properties");
		
		FileReader fr = new FileReader(file);
		
		Properties p = new Properties();
		
		p.load(fr);
		
		String value = p.getProperty(propName);
		
		return value;
		
	}

}
