const Mock = require('mockjs');
const menuData = [
    {
        title: "首页",
        key: "home",
    },
    {
        title: "我的收藏",
        key: "collection",
    },
    {
        title: "系统设置",
        key: "setting",
        children: [
            {
                title: "组织架构管理",
                key: "organizationManagement"
            },
            {
                title: "员工类别设置",
                key: "employeeTypeSetting"
            },
            {
                title: "权限管控中心",
                key: "authorizationCenter"
            }
        ]
    },
    {
        title: "地域分析",
        key: "regionalAnalysis",
    },
    {
        title: "users",
        key: "users",
    },
    {
        title: "用户行为",
        key: "yonghuxingwei",
        children: [
            {
                title: "路径分析",
                key: "pathAnalysis",
            },
            {
                title: "view1",
                key: "p1",
            },
            {
                title: "view2",
                key: "p2",
            },
        ]
    },
];
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};