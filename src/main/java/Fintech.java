import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Fintech {
	
	public static void main(String[] args) throws InterruptedException {
	WebDriverManager.iedriver().setup();
	WebDriver driver = new EdgeDriver();
	driver.get("https://m2pfintech.com/");
	driver.manage().window().maximize();
	Thread.sleep(10000);
	WebElement element = driver.findElement(By.id("illow-banner-widget"));
	WebDriverWait w = new WebDriverWait(driver, Duration.ofSeconds(10));
	w.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(element));
	driver.switchTo().frame(element);
	driver.findElement(By.xpath("(//*[@id=\"cmp-reject-all\"]//*[text()=\"Reject\"])[1]")).click();
	driver.quit();

	}

}