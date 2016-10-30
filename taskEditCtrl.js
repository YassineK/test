angular.module("taskApp")
       .controller("taskEditCtrl",
        function($scope, $location, $routeParams, taskService) {
            //console.log($routeParams);
            if (angular.isDefined($routeParams.tid)) {
                //get task to edit
                taskService.findById($routeParams.tid)
                            .then(function(reponse) {
                                console.log("edit mode")
                                $scope.newTask = reponse.data;
                            }, function (reponse) {
                                // no task to edit
                                console.log("unknown task");
                                $location.url("/tasks");
                            });
            }
            else {
                // new task
                $scope.newTask = {
                    id:0,
                    title:"",
                    context:"",
                    priority:0,
                    completed:false,
                    endDate:new Date()
                    
                };
            };

            $scope.saveTask= function(task) {
                console.log($scope.taskForm);
                // ne sauvegarder que si valide
               if ($scope.taskForm.$valid) {
                    taskService.save(task)
                        .then(function(reponse) {
                            console.log("save successfull");
                            console.log(reponse);
                            // revenir a la page d'acceuil
                            $location.url("/tasks");
                        }, function(reponse) {
                            console.log("error on save");
                            console.log(reponse);
                        });
                }
           };

});