import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import { Collapse, Table, Button, Divider, Icon, Modal } from 'antd';
import LeaveEdit from './components/LeaveEdit';
import LeaveGeneral from './components/LeaveGeneral';
import OvertimeEdit from './components/OvertimeEdit';
import OvertimeGeneral from './components/OvertimeGeneral';
import LateEdit from './components/LateEdit';
import EarlyEdit from './components/EarlyEdit';
import SubsidyEdit from './components/SubsidyEdit';
import FixedEdit from './components/FixedEdit';
import CustomEdit from './components/CustomEdit';
import styles from './index.less';

const { Panel } = Collapse;
const { confirm } = Modal;

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveGeneral: false,
            leaveEditName: '',
            leaveEdit: false,
            leaveAdd: false,
            overtimeGeneral: false,
            overtimeEditName: '',
            overtimeEdit: false,
            overtimeAdd: false,
            lateEditName: '',
            lateEdit: false,
            lateAdd: false,
            earlyEditName: '',
            earlyEdit: false,
            earlyAdd: false,
            subsidyEditName: '',
            subsidyEdit: false,
            subsidyAdd: false,
            fixedEditName: '',
            fixedEdit: false,
            customEditName: '',
            customEdit: false,
            customAdd: false,
            leaveData: [
                {
                    key: 1,
                    name: '事假',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                    ]
                },
                {
                    key: 2,
                    name: '病假',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '年度管理' },
                        { name: '算上班' }
                    ]
                },
                {
                    key: 3,
                    name: '年假',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '年度管理' },
                    ]
                },
            ],
            overtimeData: [
                {
                    key: 1,
                    name: '平常加班',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 2,
                    name: '休息日加班',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 3,
                    name: '节假日加班',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
            ],
            lateData: [
                {
                    key: 1,
                    name: '轻度迟到',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 2,
                    name: '中度迟到',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 3,
                    name: '重度迟到',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
            ],
            earlyData: [
                {
                    key: 1,
                    name: '轻度早退',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 2,
                    name: '中度早退',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 3,
                    name: '重度早退',
                    content: [
                        { name: '统计单位：次' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
            ],
            subsidyData: [
                {
                    key: 1,
                    name: '早餐补贴',
                    content: [
                        { name: '统计单位：次' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 2,
                    name: '中餐补贴',
                    content: [
                        { name: '统计单位：次' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 3,
                    name: '晚餐补贴',
                    content: [
                        { name: '统计单位：次' },
                        { name: '报表简符￥' }
                    ]
                },
            ],
            fixedData: [
                {
                    key: 1,
                    name: '应上班',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 2,
                    name: '实上班',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
                {
                    key: 3,
                    name: '缺勤',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                },
            ],
            customData: [
                {
                    key: 1,
                    name: '出勤率',
                    content: [
                        { name: '统计单位：百分比%' },
                        { name: '报表简符￥' }
                    ]
                }
            ],
            constantData: [
                {
                    key: 1,
                    name: '标准工作日',
                    content: [
                        { name: '统计单位：天' },
                        { name: '0.5取整' },
                        { name: '报表简符￥' }
                    ]
                }
            ],
        }
    }

    // 请假通用规则设置
    showLeaveGeneral = (e) => {
        e.stopPropagation();
        this.setState({
            leaveGeneral: true
        })
    }

    hideLeaveGeneral = () => {
        this.setState({
            leaveGeneral: false
        })
    }

    leaveGeneralSubmit = () => {
        this.hideLeaveGeneral()
    }

    // 添加假別
    showLeaveAdd = (e) => {
        e.stopPropagation();
        this.setState({
            leaveAdd: true
        })
    }

    hideLeaveAdd = () => {
        this.setState({
            leaveAdd: false
        })
    }

    leaveAddSubmit = () => {
        this.hideLeaveAdd()
    }

    // 请假编辑
    showLeaveEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            leaveEdit: true,
            leaveEditName: record.name
        })
    }

    hideLeaveEdit = () => {
        this.setState({
            leaveEdit: false
        })
    }

    leaveEditSubmit = () => {
        this.hideLeaveEdit()
    }

    // 加班通用规则设置
    showOvertimeGeneral = (e) => {
        e.stopPropagation();
        this.setState({
            overtimeGeneral: true
        })
    }

    hideOvertimeGeneral = () => {
        this.setState({
            overtimeGeneral: false
        })
    }

    overtimeGeneralSubmit = () => {
        this.hideOvertimeGeneral()
    }

    // 添加加班类型
    showOvertimeAdd = (e) => {
        e.stopPropagation();
        this.setState({
            overtimeAdd: true
        })
    }

    hideOvertimeAdd = () => {
        this.setState({
            overtimeAdd: false
        })
    }

    overtimeAddSubmit = () => {
        this.hideOvertimeAdd()
    }

    // 加班编辑
    showOvertimeEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            overtimeEdit: true,
            overtimeEditName: record.name
        })
    }

    hideOvertimeEdit = () => {
        this.setState({
            overtimeEdit: false
        })
    }

    overtimeEditSubmit = () => {
        this.hideOvertimeEdit()
    }

    // 添加迟到类型
    showLateAdd = (e) => {
        e.stopPropagation();
        this.setState({
            lateAdd: true
        })
    }

    hideLateAdd = () => {
        this.setState({
            lateAdd: false
        })
    }

    lateAddSubmit = () => {
        this.hideLateAdd()
    }

    // 迟到编辑
    showLateEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            lateEdit: true,
            lateEditName: record.name
        })
    }

    hideLateEdit = () => {
        this.setState({
            lateEdit: false
        })
    }

    lateEditSubmit = () => {
        this.hideLateEdit()
    }

    // 添加早退类型
    showEarlyAdd = (e) => {
        e.stopPropagation();
        this.setState({
            earlyAdd: true
        })
    }

    hideEarlyAdd = () => {
        this.setState({
            earlyAdd: false
        })
    }

    earlyAddSubmit = () => {
        this.hideEarlyAdd()
    }

    // 早退编辑
    showEarlyEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            earlyEdit: true,
            earlyEditName: record.name
        })
    }

    hideEarlyEdit = () => {
        this.setState({
            earlyEdit: false
        })
    }

    earlyEditSubmit = () => {
        this.hideEarlyEdit()
    }

    // 添加出勤补贴类别
    showSubsidyAdd = (e) => {
        e.stopPropagation();
        this.setState({
            subsidyAdd: true
        })
    }

    hideSubsidyAdd = () => {
        this.setState({
            subsidyAdd: false
        })
    }

    subsidyAddSubmit = () => {
        this.hideSubsidyAdd()
    }

    // 出勤补贴编辑
    showSubsidyEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            subsidyEdit: true,
            subsidyEditName: record.name
        })
    }

    hideSubsidyEdit = () => {
        this.setState({
            subsidyEdit: false
        })
    }

    subsidyEditSubmit = () => {
        this.hideSubsidyEdit()
    }

    // 固定统计项编辑
    showFixedEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            fixedEdit: true,
            fixedEditName: record.name
        })
    }

    hideFixedEdit = () => {
        this.setState({
            fixedEdit: false
        })
    }

    fixedEditSubmit = () => {
        this.hideFixedEdit()
    }

    // 添加自定义统计项
    showCustomAdd = (e) => {
        e.stopPropagation();
        this.setState({
            customAdd: true
        })
    }

    hideCustomAdd = () => {
        this.setState({
            customAdd: false
        })
    }

    customAddSubmit = () => {
        this.hideCustomAdd()
    }

    // 自定义统计项编辑
    showCustomEdit = (text, record, index) => {
        console.log(text, record, index)
        this.setState({
            customEdit: true,
            customEditName: record.name
        })
    }

    hideCustomEdit = () => {
        this.setState({
            customEdit: false
        })
    }

    customEditSubmit = () => {
        this.hideCustomEdit()
    }

    // 停用弹窗显示/关闭
    showDisabled = (text, record, index) => {
        confirm({
            content: `确定停用${record.name}吗?`,
            cancelText: '取消',
            okText: '确定',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    render() {
        const {
            leaveGeneral,
            leaveEdit,
            leaveAdd,
            leaveEditName,
            overtimeGeneral,
            overtimeEdit,
            overtimeAdd,
            overtimeEditName,
            lateEdit,
            lateAdd,
            lateEditName,
            earlyEdit,
            earlyAdd,
            earlyEditName,
            subsidyEdit,
            subsidyAdd,
            subsidyEditName,
            fixedEditName,
            fixedEdit,
            customEditName,
            customEdit,
            customAdd,
            leaveData,
            overtimeData,
            lateData,
            earlyData,
            subsidyData,
            fixedData,
            customData,
            constantData
        } = this.state;
        const columnsLeave = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showLeaveEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsOvertime = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showOvertimeEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsLate = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showLateEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsEarly = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showEarlyEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsSubsidy = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showSubsidyEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsFixed = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showFixedEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];
        const columnsCustom = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showCustomEdit(text, record, index) }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];

        const columnsConstant = [
            {
                dataIndex: 'name',
            },
            {
                dataIndex: 'content',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <span key={index}> {item.name} </span>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'right',
                render: (text, record, index) => (
                    <span>
                        <a>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showDisabled(text, record, index) }}>停用</a>
                    </span>
                ),
            },
        ];

        return (
            <Page loading={false} title={'考勤统计项设置'} flex>
                <Collapse bordered={false} style={{ width: '100%' }}>
                    <Panel
                        header={
                            <span>
                                <span>请假类别设置</span>
                                <Button size='small' type="primary" ghost style={{ marginLeft: '10px' }} onClick={this.showLeaveGeneral}>请假通用规则设置</Button>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showLeaveAdd}>
                                    <Icon type="plus" />
                                    <span>添加假別</span>
                                </Button>
                            </span>
                        }
                        key="1"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsLeave}
                            dataSource={leaveData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span> 加班类别设置</span>
                                <Button size='small' type="primary" ghost style={{ marginLeft: '10px' }} onClick={this.showOvertimeGeneral}>加班通用规则设置</Button>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showOvertimeAdd}>
                                    <Icon type="plus" />
                                    <span>添加加班类型</span>
                                </Button>
                            </span>
                        }
                        key="2"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsOvertime}
                            dataSource={overtimeData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>迟到类别设置</span>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showLateAdd}>
                                    <Icon type="plus" />
                                    <span>添加迟到类型</span>
                                </Button>
                            </span>
                        }
                        key="3"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsLate}
                            dataSource={lateData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>早退类别设置</span>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showEarlyAdd}>
                                    <Icon type="plus" />
                                    <span>添加早退类型</span>
                                </Button>
                            </span>
                        }
                        key="4"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsEarly}
                            dataSource={earlyData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>出勤补贴类别设置</span>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showSubsidyAdd}>
                                    <Icon type="plus" />
                                    <span>添加出勤补贴类型</span>
                                </Button>
                            </span>
                        }
                        key="5"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsSubsidy}
                            dataSource={subsidyData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>固定统计项设置</span>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                            </span>
                        }
                        key="6"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsFixed}
                            dataSource={fixedData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>系统常量</span>
                            </span>
                        }
                        key="7"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsConstant}
                            dataSource={constantData}
                            pagination={false}
                        />
                    </Panel>
                    <Panel
                        header={
                            <span>
                                <span>自定义统计项设置</span>
                                <Button style={{ background: '#E87E04', float: 'right', color: '#fff', marginLeft: '10px' }}>
                                    <Icon type="file-excel" />
                                    <span>导出报表</span>
                                </Button>
                                <Button type="primary" style={{ float: 'right' }} onClick={this.showCustomAdd}>
                                    <Icon type="plus" />
                                    <span>添加自定义统计项</span>
                                </Button>
                            </span>
                        }
                        key="8"
                    >
                        <Table
                            showHeader={false}
                            columns={columnsCustom}
                            dataSource={customData}
                            pagination={false}
                        />
                    </Panel>
                </Collapse>
                <Modal
                    visible={leaveGeneral}
                    title='请假通用规则设置'
                    onCancel={this.hideLeaveGeneral}
                    footer={null}
                >
                    <LeaveGeneral handleCancel={this.hideLeaveGeneral} handleSubmit={this.LeaveGeneralSubmit} />
                </Modal>
                <Modal
                    visible={leaveAdd}
                    title='添加假別'
                    onCancel={this.hideLeaveAdd}
                    footer={null}
                >
                    <LeaveEdit handleCancel={this.hideLeaveAdd} handleSubmit={this.leaveAddSubmit} />
                </Modal>
                <Modal
                    visible={leaveEdit}
                    title={<span>编辑{leaveEditName}</span>}
                    onCancel={this.hideLeaveEdit}
                    footer={null}
                >
                    <LeaveEdit handleCancel={this.hideLeaveEdit} handleSubmit={this.leaveEditSubmit} />
                </Modal>
                <Modal
                    visible={overtimeGeneral}
                    title='加班通用规则设置'
                    onCancel={this.hideOvertimeGeneral}
                    footer={null}
                >
                    <OvertimeGeneral handleCancel={this.hideLeaveGeneral} handleSubmit={this.LeaveGeneralSubmit} />
                </Modal>
                <Modal
                    visible={overtimeAdd}
                    title='添加加班类型'
                    onCancel={this.hideOvertimeAdd}
                    footer={null}
                >
                    <OvertimeEdit handleCancel={this.hideOvertimeAdd} handleSubmit={this.overtimeAddSubmit} />
                </Modal>
                <Modal
                    visible={overtimeEdit}
                    title={<span>编辑{overtimeEditName}</span>}
                    onCancel={this.hideOvertimeEdit}
                    footer={null}
                >
                    <OvertimeEdit handleCancel={this.hideOvertimeEdit} handleSubmit={this.overtimeEditSubmit} />
                </Modal>
                <Modal
                    visible={lateAdd}
                    title='添加迟到类型'
                    onCancel={this.hideLateAdd}
                    footer={null}
                >
                    <LateEdit handleCancel={this.hideLateAdd} handleSubmit={this.lateAddSubmit} />
                </Modal>
                <Modal
                    visible={lateEdit}
                    title={<span>编辑{lateEditName}</span>}
                    onCancel={this.hideLateEdit}
                    footer={null}
                >
                    <LateEdit handleCancel={this.hideLateEdit} handleSubmit={this.lateEditSubmit} />
                </Modal>
                <Modal
                    visible={earlyAdd}
                    title='添加早退类型'
                    onCancel={this.hideEarlyAdd}
                    footer={null}
                >
                    <EarlyEdit handleCancel={this.hideEarlyAdd} handleSubmit={this.earlyAddSubmit} />
                </Modal>
                <Modal
                    visible={earlyEdit}
                    title={<span>编辑{earlyEditName}</span>}
                    onCancel={this.hideEarlyEdit}
                    footer={null}
                >
                    <EarlyEdit handleCancel={this.hideEarlyEdit} handleSubmit={this.earlyEditSubmit} />
                </Modal>
                <Modal
                    visible={subsidyAdd}
                    title='添加出勤补贴类别'
                    onCancel={this.hideSubsidyAdd}
                    footer={null}
                >
                    <SubsidyEdit handleCancel={this.hideSubsidyAdd} handleSubmit={this.subsidyAddSubmit} />
                </Modal>
                <Modal
                    visible={subsidyEdit}
                    title={<span>编辑{subsidyEditName}</span>}
                    onCancel={this.hideSubsidyEdit}
                    footer={null}
                >
                    <SubsidyEdit handleCancel={this.hideSubsidyEdit} handleSubmit={this.subsidyEditSubmit} />
                </Modal>
                <Modal
                    visible={fixedEdit}
                    title={<span>编辑{fixedEditName}</span>}
                    onCancel={this.hideFixedEdit}
                    footer={null}
                >
                    <FixedEdit handleCancel={this.hideFixedEdit} handleSubmit={this.fixedEditSubmit} />
                </Modal>
                <Modal
                    visible={customAdd}
                    title='添加自定义统计项'
                    onCancel={this.hideCustomAdd}
                    footer={null}
                >
                    <CustomEdit handleCancel={this.hideCustomAdd} handleSubmit={this.customAddSubmit} />
                </Modal>
                <Modal
                    visible={customEdit}
                    title={<span>编辑{customEditName}</span>}
                    onCancel={this.hideCustomEdit}
                    footer={null}
                >
                    <CustomEdit handleCancel={this.hideCustomEdit} handleSubmit={this.customEditSubmit} />
                </Modal>
            </Page>
        );
    }
}
export default Index;