angular.module("taskApp", ["ngRoute"])
       .constant("serverUrl",
                 'http://localhost:8080/exo3Angular/')
       .config(function($routeProvider, taskServiceProvider, serverUrl) {
           // le service que l'on configure est "route"
           // donc on inject "routeProvider" dans la fonction
           // config
           $routeProvider.when("/tasks", 
                {
                    templateUrl: "views/taskList.html",
                    controller: 'taskListCtrl'   
                });
           $routeProvider.when("/taskCreate", 
                {
                    templateUrl: "views/taskEdit.html",
                    controller: 'taskEditCtrl'   
                });
           $routeProvider.when("/taskEdit/:tid", 
                {
                    templateUrl: "views/taskEdit.html",
                    controller: 'taskEditCtrl' 
                    //controller:'taskListCtrl'  
                });
                
           $routeProvider.when("/about", 
                {
                    templateUrl: "views/about.html"   
                });
           $routeProvider.otherwise( 
                {
                    templateUrl: "views/taskList.html",
                    controller: 'taskListCtrl'  
                });
           // configuration de mon service de requettage de produits
           taskServiceProvider.setUrlBase(serverUrl);
});