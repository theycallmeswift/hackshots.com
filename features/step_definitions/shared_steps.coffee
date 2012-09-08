sharedSteps = module.exports = ->
  assert = require 'assert'
  querystring = require 'querystring'
  last_response_body = false
  last_response_code = false

  @World = require("../support/world").World

  @Given /^the pinkyurl API returns the following response for the query "([^"]*)":$/, (qs, response, next) ->
    query = querystring.stringify(querystring.parse(qs))
    @pinky.get("/i?#{query}").reply(200, JSON.parse(response))
    next()

  @When /^I make a GET request to the API with the query "([^"]*)"$/, (qs, next) ->
    @request("http://localhost:3000/api/v1/i?#{qs}", (err, res, body) =>
      assert.equal(err, undefined)
      last_response_code = res.statusCode
      last_response_body = body
      next()
    )

  @Then /^I should have received the following (\d+) response:$/, (status, response, next) ->
    assert.equal(JSON.parse(status), last_response_code)
    assert.equal(JSON.stringify(JSON.parse(response)), JSON.stringify(JSON.parse(last_response_body)))
    next()

  @After "@API", (next) ->
    @pinky.done()
    next()
