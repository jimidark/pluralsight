(function() {

    var app = angular.module('githubViewer', []);

    var MainController = function($scope, $http) {
        var onUserComplete = function(response) {
            $scope.user = response.data;

            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data";
        };

        $scope.message = "Github Viewer";
        $scope.username = "angular";
        $scope.repoSortOrder = "+name";

        $scope.search = function(username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        }

        $scope.search($scope.username);
    };

    app.controller("MainController", ["$scope", "$http", MainController]);

}());