'use strict';

describe('Service: contentFarm', function () {

  // load the service's module
  beforeEach(module('bookingApp'));

  // instantiate service
  var contentFarm;
  beforeEach(inject(function (_contentFarm_) {
    contentFarm = _contentFarm_;
  }));

  it('should do something', function () {
    expect(!!contentFarm).toBe(true);
  });

});
