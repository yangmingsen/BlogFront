app.controller('infoController',function ($scope,$filter,$location,$sce,infoService) {
    $scope.searchMap={'id':''};//��������

    $scope.loadInfo=function() {

        let searchId = $location.search()['id'];
        if (searchId == null) {//���������ת�ý��� ֱ��ת��list.html
            window.location.href="./list.html";
        }

        $scope.searchMap.id=searchId;
        $scope.search();

    };

    $scope.search=function () {
        $scope.searchMap.id=parseInt($scope.searchMap.id);

        infoService.search($scope.searchMap).success(
            function (response) {
                $scope.resultMap=response;
                $scope.handleSomeProblem();
            });

    };

    /***
     *����ʵ��
     * @type {{articleId: string, createdTime: string, id: number, content: string, username: string}}
     */
    $scope.comment={'id':-1,'articleId':'','createdTime':'','username':'','content':''};
    /***
     * ������۷���
     */
    $scope.addComment=function() {
        $scope.comment.articleId=parseInt($scope.resultMap.article.id);

        //����ʱ��
        $scope.dt1 = new Date();
        let dd = $filter("date")($scope.dt1, "yyyy-MM-dd HH:mm:ss");

        $scope.comment.createdTime=dd;

        infoService.addComment($scope.comment).success(
            function (response) {
                if(response.success) {
                    $scope.resultMap.comments.push(angular.copy($scope.comment));
                    $scope.randomImage();
                    $scope.clearComment();
                } else {
                    alert("���ʧ��")
                }
            }
        );
    };

    /***
     * �����������
     */
    $scope.clearComment=function() {
        $scope.comment.username='';
        $scope.comment.content='';
    };

    /***
     * �������ͷ��
     */
    $scope.randomImage=function() {
        for (let i = 0; i < $scope.resultMap.comments.length; i++) {
            $scope.resultMap.comments[i].imageIdx=Math.ceil(Math.random()*9)+1;
        }
    };


    $scope.handleSomeProblem=function() {

        //��������ʱ���ʽ
        $scope.resultMap.article.updateTime = $scope.resultMap.article.updateTime.substr(0,10);

        //�ҵ���ǰ���·���
        var category = $scope.resultMap.categorys;
        for(var i=0; i<category.length; i++) {
            if(category[i].id == $scope.resultMap.article.articleCategoryId) {
                $scope.resultMap.categoryName=category[i].categoryName;
                break;
            }
        }

        //Ϊ���ҳ������µı�ǩ����;
        var tagNames = new Array();
        var splitTagId = $scope.resultMap.article.tagId.split(',');
        for(var i=0; i<splitTagId.length; i++) {
            for(var j =0; j<$scope.resultMap.tags.length; j++) {
                var tt = $scope.resultMap.tags[j].id;
                if(splitTagId[i] == tt ) {
                    tagNames.push($scope.resultMap.tags[j]);
                    break;
                }
            }
        }
        $scope.resultMap.tagNames=angular.copy(tagNames);

        //��angularJS���в���HTML����
        $scope.resultMap.article.content = $sce.trustAsHtml($scope.resultMap.article.content);

        $scope.randomImage();

    };

});