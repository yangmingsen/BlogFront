app.service('indexService',function ($http) {


    this.findAll=function () {
        return $http.get('http://localhost:8080/index/main');
    };

    this.findAllByCategory=function (category) {
        return $http.get('../');
    }

});