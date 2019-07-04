app.controller('indexController',function ($scope,indexService) {

    var ai={
        "articles": [
            {
                "id": 1561911293772922,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561910658515056,1561910658528091,1561910658552046",
                "title": "骑士共存问题",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 00:14:53",
                "updateTime": "2019-07-01 00:14:53",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "C++,算法,刷题"
            },
            {
                "id": 1561913712138354,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561910658515056,1561910658528091,1561913712258076,1561913712282076",
                "title": "二分查找",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 00:55:12",
                "updateTime": "2019-07-01 00:55:12",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "C++,算法,二分,遍历"
            },
            {
                "id": 1561913821619104,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561910658515056,1561910658528091,1561913821636049,1561913712282076,1561913821677061",
                "title": "二叉搜索树中的搜索",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 00:57:01",
                "updateTime": "2019-07-01 00:57:01",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "C++,算法,树,遍历,二叉树"
            },
            {
                "id": 1561913855573644,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561910658528091,1561913821636049,1561913712282076,1561913821677061",
                "title": "二叉搜索树",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 00:57:35",
                "updateTime": "2019-07-01 00:57:35",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "树,遍历,二叉树"
            },
            {
                "id": 1561913932979080,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561910658528091,1561913932986061",
                "title": "回文数",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 00:58:53",
                "updateTime": "2019-07-01 00:58:53",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "算法,回文"
            },
            {
                "id": 1561914017428453,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017431001,1561914017443071,1561914017459047,1561914017491098,1561914017508069,1561914017524099",
                "title": "SpringBoot Maven配置",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:00:17",
                "updateTime": "2019-07-01 01:00:17",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "xml,spring,springboot,技术,框架,Java"
            },
            {
                "id": 1561914117035401,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017508069,1561914017524099,1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914117118012",
                "title": "Tomcat 总体结构",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:01:57",
                "updateTime": "2019-07-01 01:01:57",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,设计模式"
            },
            {
                "id": 1561914137145248,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017508069,1561914017524099,1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914117118012",
                "title": "Tomcat 总体结构二",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:02:17",
                "updateTime": "2019-07-01 01:02:17",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,设计模式"
            },
            {
                "id": 1561914144244130,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017508069,1561914017524099,1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914117118012",
                "title": "Tomcat 总体结构三",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:02:24",
                "updateTime": "2019-07-01 01:02:24",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,设计模式"
            },
            {
                "id": 1561914149979667,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017508069,1561914017524099,1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914117118012",
                "title": "Tomcat 总体结构四",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:02:30",
                "updateTime": "2019-07-01 01:02:30",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,设计模式"
            },
            {
                "id": 1561914160528620,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914017508069,1561914017524099,1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914117118012",
                "title": "Tomcat 总体结构五",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:02:40",
                "updateTime": "2019-07-01 01:02:40",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,设计模式"
            },
            {
                "id": 1561914284622172,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:04:44",
                "updateTime": "2019-07-01 01:04:44",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914291722114,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件二",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:04:51",
                "updateTime": "2019-07-01 01:04:51",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914297707201,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件三",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:04:57",
                "updateTime": "2019-07-01 01:04:57",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914304389005,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件四",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:05:04",
                "updateTime": "2019-07-01 01:05:04",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914313573045,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件五",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:05:13",
                "updateTime": "2019-07-01 01:05:13",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914320208921,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件六",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:05:20",
                "updateTime": "2019-07-01 01:05:20",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            },
            {
                "id": 1561914327491995,
                "authorId": 0,
                "articleCategoryId": 1,
                "tagId": "1561914117051008,1561914017524099,1561914017491098,1561914117084030,1561914117101059,1561914284661082",
                "title": "Tomcat架构及常用的组件七",
                "content": "如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开",
                "createdTime": "2019-07-01 01:05:27",
                "updateTime": "2019-07-01 01:05:27",
                "browseNum": 0,
                "likeNum": 0,
                "isPublic": 1,
                "publishStates": 1,
                "isDel": 0,
                "keywords": "tomcat,Java,技术,服务器,server,配置"
            }
        ],
        "categorys": [
            {
                "id": 1,
                "categoryName": "技术文章",
                "createdTime": "2019-06-28 18:55:31"
            },
            {
                "id": 2,
                "categoryName": "生活文章",
                "createdTime": "2019-06-28 18:55:32"
            },
            {
                "id": 3,
                "categoryName": "心理文章",
                "createdTime": "2019-06-28 18:55:33"
            },
            {
                "id": 4,
                "categoryName": "团队协作",
                "createdTime": "2019-06-28 18:55:43"
            },
            {
                "id": 5,
                "categoryName": "看点经济",
                "createdTime": "2019-06-28 18:55:53"
            }
        ],
        "tags": [
            {
                "id": 1561910658515056,
                "tagName": "C++",
                "createdTime": "2019-07-01 00:04:18"
            },
            {
                "id": 1561910658528091,
                "tagName": "算法",
                "createdTime": "2019-07-01 00:04:18"
            },
            {
                "id": 1561910658552046,
                "tagName": "刷题",
                "createdTime": "2019-07-01 00:04:18"
            },
            {
                "id": 1561913712258076,
                "tagName": "二分",
                "createdTime": "2019-07-01 00:55:12"
            },
            {
                "id": 1561913712282076,
                "tagName": "遍历",
                "createdTime": "2019-07-01 00:55:12"
            },
            {
                "id": 1561913821636049,
                "tagName": "树",
                "createdTime": "2019-07-01 00:57:01"
            },
            {
                "id": 1561913821677061,
                "tagName": "二叉树",
                "createdTime": "2019-07-01 00:57:01"
            },
            {
                "id": 1561913932986061,
                "tagName": "回文",
                "createdTime": "2019-07-01 00:58:52"
            },
            {
                "id": 1561914017431001,
                "tagName": "xml",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914017443071,
                "tagName": "spring",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914017459047,
                "tagName": "springboot",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914017491098,
                "tagName": "技术",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914017508069,
                "tagName": "框架",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914017524099,
                "tagName": "Java",
                "createdTime": "2019-07-01 01:00:17"
            },
            {
                "id": 1561914117051008,
                "tagName": "tomcat",
                "createdTime": "2019-07-01 01:01:57"
            },
            {
                "id": 1561914117084030,
                "tagName": "服务器",
                "createdTime": "2019-07-01 01:01:57"
            },
            {
                "id": 1561914117101059,
                "tagName": "server",
                "createdTime": "2019-07-01 01:01:57"
            },
            {
                "id": 1561914117118012,
                "tagName": "设计模式",
                "createdTime": "2019-07-01 01:01:57"
            },
            {
                "id": 1561914284661082,
                "tagName": "配置",
                "createdTime": "2019-07-01 01:04:44"
            }
        ],
        "nickName": "杨铭森",
        "descMe": "null"
    }


    $scope.findAll=function () {

        $scope.list = ai;

        // indexService.findAll().success(
        //   function (response) {
        //       $scope.list = response;
        //
        //   }
        // );

    }

});