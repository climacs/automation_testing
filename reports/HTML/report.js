$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ValidateUI.feature");
formatter.feature({
  "line": 1,
  "name": "Test Automation Demo",
  "description": "",
  "id": "test-automation-demo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Test element display",
  "description": "",
  "id": "test-automation-demo;test-element-display",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User accesses the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the test element is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_accesses_the_application()"
});
formatter.result({
  "duration": 1030191615,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_test_element_is_displayed()"
});
formatter.result({
  "duration": 8992170117,
  "error_message": "java.lang.NullPointerException\r\n\tat com.aa.lookahead.tstauto.seleniumdriver.LKAWebDriver.isElementPresentNDisplayed(LKAWebDriver.java:855)\r\n\tat test.StepDefinitions.the_test_element_is_displayed(StepDefinitions.java:16)\r\n\tat ✽.Then the test element is displayed(ValidateUI.feature:7)\r\n",
  "status": "failed"
});
});