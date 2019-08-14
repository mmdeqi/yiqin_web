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