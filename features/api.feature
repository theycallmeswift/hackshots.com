Feature: Wrapping pinkyurl
  In order to use https for hack images
  As a consumer of the hackshots API
  I want retrieve the pinkyurl response through the API

  @API
  Scenario: Requesting an image with a query string
    Given the pinkyurl API returns the following response for the query "resize=266x173&url=http://hackerleague.org/logo.png":
      """
      { "status": "OK" }
      """
    When I make a GET request to the API with the query "resize=266x173&url=http://hackerleague.org/logo.png"
    Then I should have received the following 200 response:
      """
      { "status": "OK" }
      """
