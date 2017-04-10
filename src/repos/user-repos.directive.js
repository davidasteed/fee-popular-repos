(function() {
  'use strict';

  angular.module('gh')
    .directive('ghRepo', ghRepo); // known as gh-repos to Angular in the DOM

  /**
   * [ghRepo custom directive populates a template at the call site]
   * @return {Object} [configuration details for the directive]
   */
  function ghRepo() {
    return {
      templateUrl: 'repos/gh-repo.template.html',
      restrict: 'EA', // we need to replace both elements and attributes
      scope: {
        repo: '=',
        repos: '='
      }
    };
  }

}());
