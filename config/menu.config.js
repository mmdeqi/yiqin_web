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
                link: "/sys/setting/rightsCenter",
                key: "rightsCenter",
                icon: "question-circle",
            },
            {
                title: "考勤统计项设置",
                link: "/sys/setting/statisticalItems",
                key: "statisticalItems",
                icon: "question-circle",
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
];