package org.pgm;

import java.time.Duration;
import java.util.Iterator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class pgm {
	public static void main(String[] args) {
		String name = "MANIMARAN";
		String res = "";
		for (int i = name.length() - 1; i >= 0; i--) {
			char c = name.charAt(i);
			res=res+c;

		}
		System.out.println(res);

	}

}
