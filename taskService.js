angular.module("taskApp")
       .provider("taskService", function() {

           var urlbase = "http://localhost";

           return {
               setUrlBase: function(url) {
                   urlbase = url;
               },

               $get : function($http) {
     //--------------Service-------------------------------              
    return  {
        liste : function(noPage, taillePage) {
                return $http.get(urlbase + "task?noPage="
                        + noPage + "&taillePage=" + taillePage);
        },
        findById : function(id) {
                return $http.get(urlbase + "task/find/" + id);
        },
        save : function(p) {
            return $http.post(urlbase + 'task/save', p);
        },
        delete : function(id) {
            // toujours passer un objet au post
            // meme vide, pour que spring ne nous bloque pas
            return $http.post(urlbase + "task/delete/" + id, {});
        }
    }
    //---------------------------------------------
               }
           };
});