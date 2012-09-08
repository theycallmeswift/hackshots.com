var hackshots = require('../../worker')
  , request = require('request')
  , nock = require('nock');

function World(callback) {
  this.request = request;
  this.pinky = nock("http://pinkyurl.com");

  callback();
};

exports.World = World;
