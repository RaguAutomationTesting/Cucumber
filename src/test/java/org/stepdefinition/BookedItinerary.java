package org.stepdefinition;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.objectrepository.BookedItineraryPojo;
import org.objectrepository.HomePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.utility.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BookedItinerary extends BaseClass {

	@When("User clicks Booked Itinerary link")
	public void user_clicks_Booked_Itinerary_link() {
		HomePage hp = new HomePage();

		click(hp.getBkdItineraryLnk());

	}

	@Then("User lands on Booked Itinerary page and Booked hotel history is stored to excel")
	public void user_lands_on_Booked_Itinerary_page_and_Booked_hotel_history_is_stored_to_excel() throws Exception {

		BookedItineraryPojo bip = new BookedItineraryPojo();

		WebElement table = bip.getTable();

		List<WebElement> rows = table.findElements(By.tagName("tr"));

		System.out.println(rows.size());// 52 rows

		File f = new File(
				"C:\\Users\\HP\\eclipse-workspace\\AdactinAutomation\\src\\test\\resources\\DataToExcel\\BookHistory.xlsx");

		Workbook w = new XSSFWorkbook();

		Sheet s = w.createSheet("BookingHistory");

		for (int i = 1; i < rows.size(); i++) {
			
			WebElement row = rows.get(i);

			List<WebElement> datas = row.findElements(By.tagName("td"));
			
			Row r = s.createRow(i);
			int cellNo=0;
						
			for (WebElement data : datas) {
				
							
				
				WebElement input = data.findElement(By.tagName("input"));

				String attribute = input.getAttribute("value");
				
				
				Cell c = r.createCell(cellNo);

				c.setCellValue(attribute);
				
				cellNo++;
				
			}

			}
		
		
		FileOutputStream fout = new FileOutputStream(f);

		w.write(fout);

		System.out.println("done");
		}

	}

