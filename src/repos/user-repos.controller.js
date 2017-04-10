(function() {
  'use strict';

  angular.module('gh')
    .controller('UserReposController', UserReposController);

  UserReposController.$inject = ['GithubService'];

  /**
   * [UserReposController ]
   * @param {Object} GithubService [angularJS service object]
   */
  function UserReposController(GithubService) {
    let vm = this;
    vm.list = [];
    vm.user = {};

    /**
     * [lookup obtains user repos and placed on controller scoe]
     * @param  {Object} user [user Object]
     * @return {void}
     */
    vm.lookup = function lookup(user) {
      GithubService.getRepos(user)
        .then(function setReposOnScope(repos) {
          console.log('repos', repos);
          vm.list = repos;
        })
        .catch(function handleErrors(err) {
          console.error(err);
        });
    };
  }
})();
