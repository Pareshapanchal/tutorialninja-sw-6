$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktops.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Page Test",
  "description": "",
  "id": "desktops-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8428535899,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verifyProductAddedToShoppingCartSuccessFully",
  "description": "",
  "id": "desktops-page-test;verifyproductaddedtoshoppingcartsuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on Desktops",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Sort By position \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Delivery Date 2022-11-30 onproduct page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Qty \"1\" using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the Message \"Success: You have added HP LP3065 to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify the text \"Shopping Cart\" on shopingcart page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the Delivery Date \"2022-11-30\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the Model \"Product21\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the Total \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopsPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 72488499,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iMouseHoverOnDesktops()"
});
formatter.result({
  "duration": 191894401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 12
    }
  ],
  "location": "DesktopsPageSteps.iClickOn(String)"
});
formatter.result({
  "duration": 1162528701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 27
    }
  ],
  "location": "DesktopsPageSteps.iSelectSortByPosition(String)"
});
formatter.result({
  "duration": 387237001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopsPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1171332800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 19
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 40679400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 23
    },
    {
      "val": "11",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 31
    }
  ],
  "location": "DesktopsPageSteps.iSelectDeliveryDateOnproductPage(int,int,int)"
});
formatter.result({
  "duration": 8473851001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "DesktopsPageSteps.iEnterQtyUsingSelectClass(String)"
});
formatter.result({
  "duration": 175051800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 51797000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart!",
      "offset": 22
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 595265399,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 1420877500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheTextOnShopingcartPage(String)"
});
formatter.result({
  "duration": 19721700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 27
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheProductName(String)"
});
formatter.result({
  "duration": 23765800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 28
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheDeliveryDateIsDisplayed(String)"
});
formatter.result({
  "duration": 46194000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product21",
      "offset": 20
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheModel(String)"
});
formatter.result({
  "duration": 31770899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 20
    }
  ],
  "location": "DesktopsPageSteps.iVerifyTheTotal(String)"
});
formatter.result({
  "duration": 23672500,
  "status": "passed"
});
formatter.after({
  "duration": 156499,
  "status": "passed"
});
});