(function() {
  'use strict';

  describe('ngCaseFilters', function() {
    var $filter;

    beforeEach(function() {
      module ('ngCaseFilters');

      inject(function(_$filter_) {
        $filter = _$filter_;
      });
    });

    describe('upperCase', function() {
      it('should convert a string to upper case', function() {
        var string = 'I am a Code Monkey.';
        expect($filter('upperCase')(string)).toEqual('I AM A CODE MONKEY.');
      });
    });

    describe('lowerCase', function() {
      it('should convert a string to lower case', function() {
        var string = 'I am a Code Monkey.';
        expect($filter('lowerCase')(string)).toEqual('i am a code monkey.');
      });
    });

    describe('snakeCase', function() {
      it('should convert a string to snake case', function() {
        var string = 'CodeMonkey';
        expect($filter('snakeCase')(string)).toEqual('code_monkey');
      });
    });

    describe('squishCase', function() {
      it('should convert a string to squish case', function() {
        var string = 'code_monkey';
        expect($filter('squishCase')(string)).toEqual('CodeMonkey');
      });
    });

    describe('camelCase', function() {
      it('should convert a string to camel case', function() {
        var string = 'code_monkey';
        expect($filter('camelCase')(string)).toEqual('codeMonkey');
      });
    });

    describe('constantCase', function() {
      it('should convert a string to constant case', function() {
        var string = 'code_monkey';
        expect($filter('constantCase')(string)).toEqual('CODE_MONKEY');
      });
    });

    describe('titleCase', function() {
      it('should convert a string to title case', function() {
        var string = 'code_monkey';
        expect($filter('titleCase')(string)).toEqual('Code Monkey');
      });
    });

    describe('capitalCase', function() {
      it('should convert a string to capital case', function() {
        var string = 'code_monkey';
        expect($filter('capitalCase')(string)).toEqual('Code Monkey');
      });
    });

    describe('sentenceCase', function() {
      it('should convert a string to sentence case', function() {
        var string = 'code_monkey';
        expect($filter('sentenceCase')(string)).toEqual('Code monkey');
      });
    });

    describe('flipCase', function() {
      it('should convert a string to flip case', function() {
        var string = 'Code monkeY';
        expect($filter('flipCase')(string)).toEqual('cODE MONKEy');
      });
    });
  });

})();
