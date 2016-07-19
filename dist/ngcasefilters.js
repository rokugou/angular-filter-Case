(function() {
  'use strict';

  var CaseFilterFunctions = ['upper', 'lower', 'snake', 'squish', 'camel', 'constant', 'title', 'capital', 'sentence', 'flip'];

  var ngCaseFilters = angular.module('ngCaseFilters',[]);

  CaseFilterFunctions.forEach(function(f){
    ngCaseFilters.filter(f + 'Case',function(){
      return function(input, params){
        return Case[f](input, params);
      };
    });
  });

})();
