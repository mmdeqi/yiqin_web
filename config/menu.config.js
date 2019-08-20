export default [
    {
        title: "首页",
        link: "/sys/home",
        key: "home",
        icon: "home"
    },
    {
        title: "我的收藏",
        link: "/sys/collection",
        key: "collection",
        icon: "star"
    },
    {
        title: "系统设置",
        key: "setting",
        icon: "setting",
        children:[
            {
                title: "组织架构管理",
                link: "/sys/setting/organizationManagement",
                key: "organizationManagement",
                icon: "unordered-list",
            },
            {
                title: "员工类别设置",
                link: "/sys/setting/employeeTypeSetting",
                key: "employeeTypeSetting",
                icon: "unordered-list",
            },
            {
                title: "权限管控中心",
                link: "/sys/setting/authorizationCenter",
                key: "authorizationCenter",
                icon: "question-circle",
            },
            {
                title: "考勤统计项设置",
                key: "statisticalItems",
                icon: "question-circle",
                children: [
                    {
                        title: "请假类别设置",
                        link: "/sys/setting/statisticalItems/leaveCategory",
                        key: "leaveCategory",
                        icon: ""
                    },
                    {
                        title: "加班类别设置",
                        link: "/sys/setting/statisticalItems/overtimeCategory",
                        key: "overtimeCategory",
                        icon: ""
                    },
                    {
                        title: "迟到类别设置",
                        link: "/sys/setting/statisticalItems/lateCategory",
                        key: "lateCategory",
                        icon: ""
                    },
                    {
                        title: "早退类别设置",
                        link: "/sys/setting/statisticalItems/earlyRetirementCategory",
                        key: "earlyRetirementCategory",
                        icon: ""
                    },
                ]
            },
        ]
    },
    {
        title: "日常考勤管理",
        key: "dailyAttendanceManagement",
        icon: "team",
        children:[
            {
                title: "员工档案信息",
                key: "employeeInfo",
                icon: "",
                children: [
                    {
                        title: "员工信息管理",
                        link: "/sys/dailyAttendanceManagement/employeeInfo/employeeInfoManagement",
                        key: "employeeInfoManagement",
                        icon: ""
                    },
                ]
            },
        ]
    },
    {
        title: "员工自助",
        key: "employeeSelfService",
        icon: "user",
        children: [
            {
                title: "我的考勤卡",
                link: "/sys/employeeSelfService/myAttendanceCard",
                key: "myAttendanceCard",
                icon: ""
            },
            {
                title: "我的考勤月报",
                link: "/sys/employeeSelfService/myMonthlyAttendance",
                key: "myMonthlyAttendance",
                icon: ""
            },
        ]
    },
    {
        title: "地域分析",
        link: "/sys/regionalAnalysis",
        key: "regionalAnalysis",
        icon: "idcard"
    },
    {
        title: "用户行为",
        key: "yonghuxingwei",
        icon: "contacts",
        children: [
            {
                title: "路径分析",
                link: "/sys/pathAnalysis",
                key: "pathAnalysis",
                icon: "link"
            },
            {
                title: "view1",
                link: "/sys/view/p1",
                key: "p1",
                icon: "line-chart"
            },
            {
                title: "view2",
                link: "/sys/view/p2",
                key: "p2",
                icon: "bar-chart"
            },
        ]
    },
    {
        title: "用户分析",
        link: "/sys/users",
        key: "users",
        icon: "user"
    },
];