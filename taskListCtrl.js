angular.module("taskApp")
    .controller("taskListCtrl",
    function ($scope, $location, taskService) {
        $scope.pages = [];
        $scope.currentPage = 0;

        $scope.setCurrentPage = function (noPage) {
            $scope.currentPage = noPage;
            console.log("new page =" + noPage);
            $scope.refresh();
        };
        $scope.isPageActive = function (noPage) {
            $scope.currentPage == noPage;
        };


        $scope.champTri = 'title';
        $scope.setChampTri = function (nomChamp) {
            $scope.champTri = nomChamp;
        };

        $scope.tasks = [];

        $scope.refresh = function () {
            taskService.liste($scope.currentPage, 5)
                .then(function (reponse) {
                    console.log("success!");
                    //console.log(reponse);
                    $scope.tasks = reponse.data.content;
                    $scope.pages = [];
                    for (var idx = 0; idx < reponse.data.totalPages; idx++) {
                        $scope.pages.push(idx);
                    }
                }, function (reponse) {
                    console.log("error");
                    console.log(reponse);
                });
        };
        $scope.editTask = function (tid) {
            console.log("in edit..." + tid);
            $location.url("/taskEdit/" + tid);
        };
        $scope.deleteTask = function (tid) {
            taskService.delete(tid)
                .then(function (reponse) {
                    $scope.refresh();
                }, function (reponse) {
                    console.log("erreur a la suppression");
                });
        };
        $scope.completeTask = function (tid) {
            console.log("test to complete task:" + tid);
            console.log("task");
        };

        $scope.refresh();
    });