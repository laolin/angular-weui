'use strict';

describe('myApp.my module', function() {

  beforeEach(module('myApp.my'));

  describe('my controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var myCtrl = $controller('myCtrl');
      expect(myCtrl).toBeDefined();
    }));

  });
});