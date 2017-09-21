package steps;

import org.openqa.selenium.By;

import java.util.ArrayList;
import java.util.List;

import base.BaseUtils;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import transformation.EmailTransformation;

public class LoginStep {

    private BaseUtils baseUtils;

    public LoginStep(BaseUtils baseUtils) {
        this.baseUtils = baseUtils;
    }

    @Given("^I navigate to DigiMarketPlace Website$")
    public void iNavigateToDigiMarketPlaceWebsite() throws Throwable {

        System.out.println("Navigating to DigiMarketplace Website");
        System.out.println("Step Info - " + baseUtils.stepInfo);

        baseUtils.webDriver.navigate().to("http://digimarketplace.aayushtuladhar.com");
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() throws Throwable {
    }

    @And("^I enter User Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
    public void iEnterUserEmailAsAndPasswordAs(String username, String password) throws Throwable {
        System.out.println(username + password);
    }

    @Then("^I should be routed to User Dashboard page$")
    public void iShouldBeRoutedToUserDashboardPage() throws Throwable {
    }

    @And("^I enter Username and Password$")
    public void iEnterUsernameAndPassword(DataTable dataTable) throws Throwable {
        List<List<String>> rawdataTable = dataTable.raw();

/*
        String username = rawdataTable.get(1).get(0);
        String password = rawdataTable.get(1).get(1);
*/
        List<User> users = new ArrayList<User>();
        users = dataTable.asList(User.class);

        String username = users.get(0).username;
        String password = users.get(0).password;

        System.out.println("Username - " + username);
        System.out.println("Password - " + password);

        //*[@id="userEmail"]

        baseUtils.webDriver.findElement(By.id("userEmail")).sendKeys(username);
        baseUtils.webDriver.findElement(By.id("exampleInputPassword1")).sendKeys(password);


    }


    @And("^I click on Login button as Email: (\\w+)$")
    public void iClickOnLoginButtonAsEmailAdmin(@Transform(EmailTransformation.class) String email) throws Throwable {
        System.out.println("Email : " + email);
        baseUtils.webDriver.findElement(By.linkText("Login")).click();
    }

    @Given("^I enter invalid Username and Password$")
    public void iEnterInvalidUsernameAndPassword() throws Throwable {


    }


    public class User {
        String username;
        String password;

        public User(String username, String password) {
            this.username = username;
            this.password = password;
        }
    }


}
