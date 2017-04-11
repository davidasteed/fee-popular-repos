(function() {
  'use strict';

  angular.module('gh')
    .filter('resize', resize);

  /**
   * [resize filter displays repo size in MB]
   * @return {String} [repo decimal size and 'MB' as a String]
   */
  function resize() {
    /**
     * [doResize does conversion of number to String]
     * @param  {Number} inputNum [number in KBytes]
     * @return {String}          [String of repo size in MB]
     */
    return function doResize(inputNum) {
      // let formattedNum = inputNum;
      return inputNum / 1000 + 'MB';
    };
  }

}());
