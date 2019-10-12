import React, { Component } from 'react';
import { Icon, Button, Table, Modal, Divider } from 'antd';
import AddForm from './AddForm';
import EditForm from './EditForm';

const { confirm } = Modal;

class OvertimeGeneral extends Component {
    state = {
        visibleAdd: false,
        visibleEdit: false,
    };

    // 添加假別弹窗显示
    showModalAdd = () => {
        this.setState({
            visibleAdd: true,
        });
    };

    // 添加假別弹窗关闭
    hideModalAdd = () => {
        this.setState({ visibleAdd: false });
    };

    // 添加假別弹窗表单提交
    handleSubmitAdd = values => {
        console.log('values', values);
        this.setState({ visibleAdd: false });
    };

    // 编辑弹窗显示
    showModalEdit = (text, record, index) => {
        this.setState({
            visibleEdit: true,
        });
    };

    // 编辑弹窗关闭
    hideModalEdit = () => {
        this.setState({ visibleEdit: false });
    };

    // 编辑弹窗表单提交
    handleSubmitEdit = e => {
        this.hideModalEdit()
    };

    // 删除弹窗显示/关闭
    showModalDelete = (text, record, index) => {
        confirm({
            content: `确定删除${record.name}吗?`,
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
        const { visibleAdd, visibleEdit } = this.state;
        const columns = [
            {
                title: '工时类型',
                dataIndex: 'name',
                align: 'center',
                // render: text => <a>{text}</a>,
            },
            {
                title: '规则内容',
                dataIndex: 'content',
                align: 'center',
                render: (text, record, index) => (
                    <span>
                        {
                            record.content.map((item, index) => {
                                return (
                                    <p key={index}> {item.type} </p>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'center',
                render: (text, record, index) => (
                    <span>
                        <a
                            onClick={() => {
                                this.showModalEdit(text, record, index);
                            }}
                        >编辑</a>
                        <Divider type="vertical" />
                        <a
                            onClick={() => {
                                this.showModalDelete(text, record, index);
                            }}
                        >删除</a>
                    </span>
                ),
            },
        ];

        const tableData = [
            {
                key: 1,
                name: '标准工时',
                content: [
                    {
                        key: 1,
                        type: '平常加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 2,
                        type: '休息日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 3,
                        type: '节假日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                ]
            },
            {
                key: 1,
                name: '综合工时',
                content: [
                    {
                        key: 1,
                        type: '平常加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 2,
                        type: '休息日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 3,
                        type: '节假日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                ]
            },
            {
                key: 1,
                name: '倒班工时',
                content: [
                    {
                        key: 1,
                        type: '平常加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 2,
                        type: '休息日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                    {
                        key: 3,
                        type: '节假日加班',
                        rule: '以加班单为主，8小时算一天'
                    },
                ]
            },
        ];

        return (
            <div>
                <div style={{marginBottom: '10px'}}>
                    <Button
                        type='primary'
                        onClick={this.showModalAdd}
                    >
                        <Icon type="plus" />
                        <span>新增加班规则</span>
                    </Button>
                </div>
                <div>
                    <Table
                        size="small"
                        columns={columns}
                        dataSource={tableData}
                    />
                </div>
                <Modal
                    visible={visibleAdd}
                    title="添加加班类型"
                    onCancel={this.hideModalAdd}
                    footer={null}
                >
                    <AddForm handleCancel={this.hideModalAdd} handleSubmit={this.handleSubmitAdd} />
                </Modal>
                <Modal
                    visible={visibleEdit}
                    title="编辑加班类型"
                    onCancel={this.hideModalEdit}
                    footer={null}
                >
                    <EditForm handleCancel={this.hideModalEdit} handleSubmit={this.handleSubmitEdit} />
                </Modal>
            </div>
        );
    }
}

export default OvertimeGeneral;

