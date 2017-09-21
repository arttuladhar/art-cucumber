package steps;

import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

import base.BaseUtils;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksExample {

    private BaseUtils baseUtils;

    public HooksExample(BaseUtils baseUtils) {
        this.baseUtils = baseUtils;
    }

    @Before("@SmokeTest")
    public void initSmokeTest(){
        System.out.println("In Smoke Test Hook");
    }

    @Before
    public void initTest(){
        System.out.println("Opening Browser - Chrome");

        //Passing Dummy Webdrive
        baseUtils.stepInfo = "Chrome Driver";

        System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver");
        baseUtils.webDriver = new ChromeDriver();
        baseUtils.webDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void destroyTest(){
        // baseUtils.webDriver.close();

    }

}
