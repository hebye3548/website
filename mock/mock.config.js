var fs = require('fs');
var multiparty = require('multiparty');
var statuFun = function(res){
    setTimeout(function() {
        res.json({
            'retCode': 0,
            'retMsg': '成功'
        });
    }, 1000);
}
module.exports = {
    'POST:/todos': function(req, res) {
        setTimeout(function() {
            res.json({
                success: true,
                data: [{
                    id: 1,
                    text: 'Learn antd',
                    isComplete: true,
                }, {
                    id: 2,
                    text: 'Learn ant-tool',
                }, {
                    id: 3,
                    text: 'Learn dora',
                }, ],
            });
        }, 500);
    },
    'POST:/isoc/rest/api/usermenu/info': function(req, res) {
        res.json(require('./nav/nav'));
    },
    'POST:/isoc/rest/api/userlogin': function(req, res) {
        if (req.body.userAccount == 'admin') {
            res.json(require('./user/user_login').success)
        } else {
            res.json(require('./user/user_login').error)
        }
    },
    'POST:/isoc/rest/api/pwdlost': function(req, res) {
        if (req.body.userAccount == 'admin') {
            res.json(require('./user/user_pwdlost').success)
        } else {
            res.json(require('./user/user_pwdlost').error)
        }
    },
    'POST:/isoc/rest/api/sp/nsp/vuldealdetails/list': function(req, res) {
        res.json(require('./nsp/vuldealdetails'));
    },
    'POST:/isoc/rest/api/sp/nsp/wholenettargetsummary': function(req, res) {
        res.json(require('./nsp/wholenettargetsummary'));
    },
    'POST:/isoc/rest/api/sp/nsp/provincevuldealinfo/summary': function(req, res) {
        res.json(require('./nsp/provincevuldealinfo'));
    },
    //首页地图数据
    'POST:/isoc/rest/api/sp/nsp/wholenetsecsituation/info': function(req, res) {
        setTimeout(function() {
            res.json(require('./nsp/wholenetsecsituation'));
        }, 1000);
    },
    //4.1.2. 各省漏洞工单数据分布接口
    'POST:/isoc/rest/api/sp/sss/vulresend': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/sp/sss/provincesordersummary': function(req, res) {
        setTimeout(function() {
            res.json(require('./sss/provincesordersummary'));
        }, 1000);
    },
    //4.1.3. 漏洞等级/漏洞类型分布接口
    'POST:/isoc/rest/api/sp/sss/vultypesummary': function(req, res) {
        setTimeout(function() {
            res.json(require('./sss/vulleveltypesummary'));
        }, 1000);
    },
    //4.1.3. 漏洞等级/漏洞类型分布接口
    'POST:/isoc/rest/api/sp/sss/vullevelsummary': function(req, res) {
        setTimeout(function() {
            res.json(require('./sss/vulleveltypesummary'));
        }, 1000);
    },
    //4.1.4. 安全漏洞处理详情列表接口
    'POST:/isoc/rest/api/sp/sss/vuldeallist': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./sss/vuldeallist');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //8.2.2. 立即扫描接口
    'POST:/isoc/rest/api/riskassess/scan/scansubmit': function(req, res) {
        setTimeout(function() {
            res.json(require('./scan/scansubmit'));
        }, 1000);
    },
    //8.1.1. 任务列表接口
    'POST:/isoc/rest/api/riskassess/scan/list': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./scan/list');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //8.1.2. 删除任务接口
    'POST:/isoc/rest/api/riskassess/scan/deletetask': function(req, res) {
        statuFun(res);
    },
    //8.1.2. 删除任务接口
    'POST:/isoc/rest/api/riskassess/scan/rescan': function(req, res) {
        statuFun(res);
    },
    //刷新任务
    'POST:/isoc/rest/api/riskassess/scan/refreshtask': function(req, res) {
        setTimeout(function() {
            res.json(require('./scan/refreshtask'));
        }, 1000);
    },
    //下载文件
    'POST:/isoc/rest/api/riskassess/scan/downloadresult': function(req, res) {
        setTimeout(function() {
            var filePath = 'e:/test.rar'
            var stats = fs.statSync(filePath);
            if (stats.isFile()) {
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=aaa.zip',
                    'Content-Length': stats.size
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.end(404);
            }
        }, 1000);
    },
    //插件
    //我的插件列表
    'POST:/isoc/rest/api/poc/plugin/myPluginQuery': function(req, res) {
          var pageNo = req.body.pageNo;
          var resData = require('./plugin/myPluginQuery');
          resData.data.pageNo = pageNo;
          setTimeout(function() {
              res.json(resData);
          }, 1000);
    },
    //插件详情
    'POST:/isoc/rest/api/poc/plugin/myPluginDetails': function(req, res) {
        setTimeout(function() {
            res.json(require('./plugin/myPluginDetails'));
        }, 1000);
    },
    //插件详情
    'POST:/isoc/rest/api/poc/plugin/myPluginScore': function(req, res) {
        setTimeout(function() {
            res.json({
                'retCode': 0,
                'retMsg': '成功',
                'data':

                 {
                    'myPluginScore': 1000
                 }
            });
        }, 1000);
    },
    //删除
    'POST:/isoc/rest/api/poc/plugin/myPluginDelete': function(req, res) {
        statuFun(res);
    },
    //上传
    'POST:/isoc/rest/api/poc/plugin/upload': function(req, res) {
      var form = new multiparty.Form();
      form.parse(req, function (err, fields, files) {
    });
        setTimeout(function() {
            res.json({
                'retCode': 5,
                'retMsg': '成功'
            });
        }, 1000);
    },
    //审核
    'POST:/isoc/rest/api/poc/plugin/pluginAuditing': function(req, res) {
        statuFun(res);
    },
    //流行漏洞检测
    'POST:/isoc/rest/api/poc/plugin/scanPluginQuery':function(req, res) {
        setTimeout(function() {
            res.json(require('./pluginScan/pluginlist'));
        }, 1000);
    },
    //流行漏洞检测-开始检测
    'POST:/isoc/rest/api/poc/plugin/pluginScan': function(req, res) {
        setTimeout(function() {
            res.json(require('./pluginScan/pluginScan'));
        }, 1000);
    },
    //流行漏洞检测-轮询结果
    'POST:/isoc/rest/api/poc/plugin/pluginResult': function(req, res) {
        setTimeout(function() {
            res.json(require('./pluginScan/scanresults'));
        }, 1000);
    },
    'GET:/XX':function(req,res){

        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        });

        // 2. 输出内容，必须 'data:' 开头 '\n\n' 结尾（代表结束）
        setInterval(function () {
          res.write('data: ' + Date.now() + '\n\n');
        }, 1000);
    },
    //查询月报信息接口
    'POST:/isoc/rest/api/mr/report/query': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./report/query');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //5.2.1. 漏洞处置列表
    'POST:/isoc/rest/api/erap/vulrecordlist': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./erap/vulrecordlist');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //5.2.2. 漏洞处置详情
    'POST:/isoc/rest/api/erap/vulrecorddetail': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./erap/vulrecorddetail');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //BGP
    'POST:/isoc/rest/api/ddos/block/list': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./block/list');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    //下载红名单模板
    'POST:/isoc/rest/api/ddos/redlist/templet': function(req, res) {
        setTimeout(function() {
            var filePath = 'e:/test.rar'
            var stats = fs.statSync(filePath);
            if (stats.isFile()) {
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=aaa.zip',
                    'Content-Length': stats.size
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.end(404);
            }
        }, 1000);
    },
    //下载链路模板
    'POST:/isoc/rest/api/ddos/line/templet': function(req, res) {
        setTimeout(function() {
            var filePath = 'e:/test.rar'
            var stats = fs.statSync(filePath);
            if (stats.isFile()) {
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=aaa.zip',
                    'Content-Length': stats.size
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.end(404);
            }
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/redlist/search': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./redlist/search');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/redlist/insert': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/redlist/update': function(req, res) {
        setTimeout(function() {
            res.json({
                'retCode': 100,
                'retMsg': '上面我们介绍了使用transform对元素进行旋转、缩放、倾斜、上面我们介绍了使用transform对元素进行旋转、缩放、倾斜、移动的方法，这里讲介绍综合使用这几个方法来对一个元素进行多重变形。上面我们介绍了使用transform对元素进行旋转、缩放、倾斜、移动的方法，这里讲介绍综合使用这几个方法来对一个元素进行多重变形。'
            });
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/redlist/delete': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/redlist/batchdelete': function(req, res) {
        statuFun(res)
    },
    'POST:/isoc/rest/api/ddos/redlist/import': function(req, res) {
        setTimeout(function() {
            res.json({
                'retCode': 100,
                'retMsg': '重复'
            });
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/line/search': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./link/list');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/line/detail': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./link/detail');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    'POST:/isoc/rest/api/ddos/line/insert': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/line/update': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/line/delete': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/line/batchdelete': function(req, res) {
        statuFun(res)
    },
    'POST:/isoc/rest/api/ddos/line/import': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/block/fabrelease': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/protect/close': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/protect/open': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/ddos/protect/search': function(req, res) {
        setTimeout(function() {
            res.json({
                'retCode': 0,
                'retMsg': '成功',
                'data': {
                    'state':2,
                    'startTime': '2017-03-31 12:30:00',
                    'endTime': '2017-03-31 15:30:00'
                }
            });
        }, 1000);
    },
    'POST:/isoc/rest/api/asset/list': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./asset/list');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    'POST:/isoc/rest/api/asset/del': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/asset/upload': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/asset/assetInfo':function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/assetInfo'));
        }, 1000);
    },
    'POST:/isoc/rest/api/asset/assetAddOrUpdate': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/asset/sysAddOrUpdate': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/asset/sysDel': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/system/list': function(req, res) {
        var pageNo = req.body.pageNo;
        var resData = require('./asset/sysList');
        resData.data.pageNo = pageNo;
        setTimeout(function() {
            res.json(resData);
        }, 1000);
    },
    'POST:/isoc/rest/api/asset/sysInfo': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/sysInfo'));
        }, 1000);
    },
    'POST:/isoc/rest/api/asset/dropdown/assetTypeList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/assetTypeList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/systemList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/sysList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/areaList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/areaList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/companyList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/companyList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/deptList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/deptList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/userList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/userList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/select/selectBasicConfigList': function(req, res) {
        setTimeout(function() {
            res.json(require('./asset/dropdown/configList'));
        }, 1000);
    },
    'POST:/isoc/rest/api/system/view': function(req, res) {
        setTimeout(function() {
            res.json(require('./system/view'));
        }, 1000);
    },
    'POST:/isoc/rest/api/system/add': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/system/view': function(req, res) {
        setTimeout(function() {
            res.json(require('./system/view'));
        }, 1000);
    },
    'POST:/isoc/rest/api/auth/user/list': function(req, res) {
        setTimeout(function() {
            res.json(require('./userManage/list'));
        }, 1000);
    },
    'POST:/isoc/rest/api/auth/user/detail': function(req, res) {
        setTimeout(function() {
            res.json(require('./userManage/detail'));
        }, 1000);
    },
    'POST:/isoc/rest/api/auth/user/insert': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/check/list': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/list'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/check/resultlist': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/resultlist'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/check/insert': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/insert'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/group/distribute': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/group/vullist': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/vullist'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/check/update': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/check/import': function(req, res) {
        setTimeout(function() {
            var filePath = 'e:/test.rar'
            var stats = fs.statSync(filePath);
            if (stats.isFile()) {
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=aaa.zip',
                    'Content-Length': stats.size
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.end(404);
            }
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/group/vulnum': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/vulnum'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/result/detail': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/result'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/group/vuldetail': function(req, res) {
        setTimeout(function() {
            res.json(require('./check/vuldetail'));
        }, 1000);
    },
    'POST:/isoc/rest/api/opt/result/update': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/check/update': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/result/upload': function(req, res) {
        statuFun(res);
    },
    'POST:/isoc/rest/api/opt/result/download': function(req, res) {
        setTimeout(function() {
            var filePath = 'e:/test.rar'
            var stats = fs.statSync(filePath);
            if (stats.isFile()) {
                res.set({
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=aaa.zip',
                    'Content-Length': stats.size
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.end(404);
            }
        }, 1000);
    },
}
