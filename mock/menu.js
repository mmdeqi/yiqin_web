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
                key: "rightsCenter"
            },
            {
                title: "考勤统计项设置",
                key: "statisticalItems",
                children: [
                    {
                        title: "请假类别设置",
                        key: "leaveCategory"
                    },
                    {
                        title: "加班类别设置",
                        key: "overtimeCategory"
                    },
                    {
                        title: "迟到类别设置",
                        key: "lateCategory"
                    },
                    {
                        title: "早退类别设置",
                        key: "earlyRetirementCategory"
                    },
                ]
            }
        ]
    },
    {
        title: "日常考勤管理",
        key: "dailyAttendanceManagement",
        children: [
            {
                title: "员工档案信息",
                key: "employeeInfo",
                children: [
                    {
                        title: "员工信息管理",
                        key: "employeeInfoManagement"
                    },
                ]
            }
        ]
    },
    {
        title: "员工自助",
        key: "employeeSelfService",
        children: [
            {
                title: "我的考勤卡",
                key: "myAttendanceCard"
            },
            {
                title: "我的考勤月报",
                key: "myMonthlyAttendance"
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