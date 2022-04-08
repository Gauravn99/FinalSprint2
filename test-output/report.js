$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Big_Basket.feature");
formatter.feature({
  "name": "bigbasket Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Flow of Addchart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I want to open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BigBasket_Steps.i_want_to_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open url",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.open_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on signup/signin",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.click_on_signup_signin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid mobile number and OTP",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.enter_valid_mobile_number_and_OTP()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Verify and Continue",
  "keyword": "When "
});
formatter.match({
  "location": "BigBasket_Steps.click_on_Verify_and_Continue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter firstname lastname and emailid",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.enter_firstname_lastname_and_emailid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on startshopping",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.click_on_startshopping()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Goto search",
  "keyword": "Then "
});
formatter.match({
  "location": "BigBasket_Steps.goto_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search for Onion",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.search_for_Onion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Quantity and click on Add",
  "keyword": "And "
});
formatter.match({
  "location": "BigBasket_Steps.select_the_Quantity_and_click_on_Add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print message Item is added successfully in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "BigBasket_Steps.print_message_Item_is_added_successfully_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
});