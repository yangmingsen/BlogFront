app.service('infoService',function ($http) {
    this.search=function (searchMap) {
        return $http.post('http://localhost:8080/info/findOne',searchMap);
    };

    this.addComment=function (entity)  {
        return $http.post('http://localhost:8080/comment/add',entity);
    };

});