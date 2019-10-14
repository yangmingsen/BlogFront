app.controller('listController',function ($scope,$sce,$location,listService) {
    //��ʼ��2�з�ʽ��
    //1.���url��û�в�����ʾ��ȡ��������
    //2.���url���в������ʾѡ���Ի�ȡ

    $scope.searchMap={'tagId':'','categoryId':'','keywords':''};

    $scope.loadInfo=function () {
        $scope.findAll();
    };

    /**
     * ����tag
     * @param tagId
     */
    $scope.updateByTag=function(tagId) {
        $scope.searchMap.tagId=parseInt(tagId);
        $scope.findAllBytagId();
    };

    /***
     * ����category
     * @param categoryId
     */
    $scope.updateByCategory=function(categoryId) {
        $scope.searchMap.categoryId=parseInt(categoryId);
        $scope.findAllByCategoryId();
    };


    $scope.addCategoryName = function() {
        //��ÿ��article���ӷ�����
        for (let i = 0; i <$scope.resultMap.articles.length ; i++) {
            for (let j = 0; j < $scope.resultMap.categorys.length; j++) {
                if($scope.resultMap.categorys[j].id == $scope.resultMap.articles[i].articleCategoryId) {
                    $scope.resultMap.articles[i].categoryName=$scope.resultMap.categorys[j].categoryName;
                    break;
                }
            }
        }

        //����trustAsHtml
        for (let i = 0; i < $scope.resultMap.articles.length; i++) {
            $scope.resultMap.articles[i].title = $sce.trustAsHtml($scope.resultMap.articles[i].title);
            $scope.resultMap.articles[i].abstractContent = $sce.trustAsHtml($scope.resultMap.articles[i].abstractContent);
        }

    };

    //�ҵ�����
    $scope.findAll=function () {
        //��ȡ��������
        listService.findAll().success(
            function (response) {
                $scope.resultMap=response;
                $scope.localCache = angular.copy(response);

                /***
                 * 1.��������������ý���ʱ,�ȼ�鴫�����,�����������3������,��ô
                 * ������Ӧ�ķ�����,ֱ�ӷ���.
                 *
                 * 2.�������ý����޲���,˵����ֱ�ӵ��list.html.��ôĬ�ϲ�����������
                 */
                var tagId =$location.search()['tagId'];
                var categoryId =$location.search()['categoryId'];
                var keywords =$location.search()['keywords'];

                if(tagId != null) {//����tagId���в���
                    $scope.searchMap.tagId=parseInt(tagId);
                    $scope.findAllBytagId();
                    return ;
                } else if (categoryId != null) {//����categoryId���в���
                    $scope.searchMap.categoryId=parseInt(categoryId);
                    $scope.findAllByCategoryId();
                    return ;
                } else if(keywords != null && keywords.length>0) {//���ݱ���������ݽ��в���
                    console.log("keywords="+keywords);
                    $scope.searchMap.keywords=keywords;
                    $scope.findAllByKeywords();
                }

                $scope.addCategoryName();

        });
    };

    //�����û�����Ĺؼ��ֲ�ѯ����
    $scope.findAllByKeywords=function() {
        $scope.resultMap.articles=[];

        let keywords = $scope.searchMap.keywords;
        for (let i = 0; i < $scope.localCache.articles.length; i++) {

            let article = angular.copy($scope.localCache.articles[i]);
            let flag = 0;

            if (article.title.indexOf(keywords) >-1) {

                article.title=article.title.replace(new RegExp(keywords,'g'),
                    "<span style='color: red'>"+keywords+"</span>");

                flag = 1;
            }
            if (article.abstractContent.indexOf(keywords) > -1) {

                article.abstractContent=article.abstractContent.replace(new RegExp(keywords,'g'),
                    "<span style='color: red'>"+keywords+"</span>");
                flag = 1;
            }

            if (flag == 1) {
                $scope.resultMap.articles.push(article);
            }
        }


    };

    //����tag����
    $scope.findAllBytagId=function () {
        $scope.resultMap.articles=[];

        listService.findAllByTagId($scope.searchMap).success(
            function (response) {
                for (let i = 0; i < response.articles.length; i++) {
                    $scope.resultMap.articles.push(response.articles[i]);
                }
                $scope.addCategoryName();
            }
        );
    };

    //����category����
    $scope.findAllByCategoryId=function () {
        $scope.resultMap.articles=[];

        listService.findAllByCateGoryId($scope.searchMap).success(
            function (response) {
                for (let i = 0; i < response.articles.length; i++) {
                    $scope.resultMap.articles.push(response.articles[i]);
                }
                $scope.addCategoryName();
            }
        );

    };


    /**
     * ����
     */
    $scope.update1=function() {
        var tagId =$location.search()['tagId'];
        var categoryId =$location.search()['categoryId'];
        var name =$location.search()['name'];

        if(tagId != null) {//����tagId���в���
            $scope.searchMap.tagId=parseInt(tagId);
            console.log("tagId = "+$scope.searchMap.tagId);
            $scope.findAllBytagId();
        } else if (categoryId != null) {//����categoryId���в���
            $scope.searchMap.categoryId=parseInt(categoryId);
            $scope.findAllByCategoryId();
        } else if(name != null) {//���ݱ���������ݽ��в���
            console.log("name");
            $scope.searchMap.name=name;
            //$scope.findAll();
        }

    };


});