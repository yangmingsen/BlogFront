app.service('listService',function ($http) {
    this.findAll=function () {
        return $http.get('http://localhost:8080/article/list/findAll');
    };

    this.findAllByTagId=function (searchMap) {
        return $http.post('http://localhost:8080/article/list/findAllByTagId',searchMap);
    };

    this.findAllByCateGoryId=function (searchMap) {
        return $http.post('http://localhost:8080/article/list/findAllByCategoryId',searchMap);
    };

});