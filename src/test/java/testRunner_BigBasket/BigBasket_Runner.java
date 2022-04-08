package testRunner_BigBasket;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = ".\\Features\\Big_Basket.feature",
glue = "steps_BigBasket",
monochrome = true,
plugin= {"pretty","html:test-output"}

)
public class BigBasket_Runner {

}
