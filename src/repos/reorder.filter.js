(function() {
  'use strict';

  angular.module('gh')
    .filter('reorder', reorder);

  /**
   * [reorder filter function sort the repo array]
   * @return {Array} [returns sorted array]
   */
  function reorder() {
    /**
     * [doReorder sorts against copy of the array]
     * @param  {Array} repoArray [input array from GitHub]
     * @return {Array}           [returns sorted array]
     */
    return function doReorder(repoArray) {
      if (!Array.isArray(repoArray)) {
        return repoArray;
      }

      // make a copy of the array prior to filtering
      // important because otherwise the filter
      // would continually reorder the repoArray
      let sortArray = [].concat(repoArray);

      return sortArray.sort(function popularitySort(a, b) {
        // compareFunction will sort by popularity
        return ((b.stargazers_count + (2 * b.forks_count) +
          (0.5 * b.open_issues_count)) - (a.stargazers_count +
          (2 * a.forks_count) + (0.5 * a.open_issues_count)));
      });
    };
  }

}());
