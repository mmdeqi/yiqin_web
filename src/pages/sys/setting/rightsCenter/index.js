import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import { Icon, Button, Table, Divider, Modal, Form, Input, Checkbox, Tabs, Tree, Tag } from 'antd';
import styles from './index.less';

const { confirm } = Modal;
const { Search } = Input;
const { TabPane } = Tabs;
const { TreeNode, DirectoryTree } = Tree;

const gData = [
    {
        title: '天津天铁炼焦化厂有限公司',
        key: '0',
        children: [
            {
                title: '设材部',
                key: '设材部',
                personList: [
                    {
                        name: '张良',
                        id: '1'
                    }
                ]
            },
            {
                title: '经营部',
                key: '经营部',
            },
            {
                title: '财务部',
                key: '财务部',
                personList: [
                    {
                        name: '张良',
                        id: '1'
                    },
                    {
                        name: '韩信',
                        id: '2'
                    },
                ]
            },
            {
                title: '人力部',
                key: '人力部',
                personList: [
                    {
                        name: '张良',
                        id: '1'
                    },
                    {
                        name: '诸葛亮',
                        id: '2'
                    },
                ]
            },
            {
                title: '动力车间',
                key: '动力车间',
                personList: [
                    {
                        name: '张良',
                        id: '1'
                    },
                    {
                        name: '韩信',
                        id: '2'
                    },
                ]
            },
        ]
    }
]

const dataList = [];
const generateList = data => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        const { key } = node;
        dataList.push({ key, title: key });
        if (node.children) {
            generateList(node.children);
        }
    }
};
generateList(gData);

const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleAddRole: false,
            visibleAddUser: false,
            loadingAdd: false,
            visibleProperty: false,
            visibleRights: false,
            visibleManagement: false,
            visibleEdit: false,
            rightDisplay: false,
            editAndDelDisplay: true,
            addUserBtnDisplay: true,
            stopOrDelDisplay: true,
            positionName: '',
            expandedKeys: ['0'],
            searchValue: '',
            autoExpandParent: true,
        }
    }

    // 添加角色弹窗显示
    showModalAddRole = () => {
        this.setState({
            visibleAddRole: true,
        });
    };

    // 添加角色弹窗关闭
    handleCancelAddRole = () => {
        this.setState({ visibleAddRole: false });
    };

    // 添加角色弹窗提交后关闭
    handleOkAddRole = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visibleAddRole: false });
        }, 2000);
    };

    // 添加角色弹窗表单提交
    handleSubmitAddRole = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        this.setState({ loadingAdd: true });
        setTimeout(() => {
            this.setState({ loadingAdd: false, visibleAddRole: false });
        }, 3000);
    };

    // 添加用户弹窗显示
    showModalAddUser = () => {
        this.setState({
            visibleAddUser: true,
        });
    };

    // 添加用户弹窗关闭
    handleCancelAddUser = () => {
        this.setState({ visibleAddUser: false });
    };

    // 添加用户弹窗提交后关闭
    handleOkAddUser = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visibleAddUser: false });
        }, 2000);
    };

    // 添加用户弹窗表单提交
    handleSubmitAddUser = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        this.setState({ loadingAdd: true });
        setTimeout(() => {
            this.setState({ loadingAdd: false, visibleAddUser: false });
        }, 3000);
    };

    // 属性弹窗显示
    showModalProperty = (text, record, index) => {
        console.log(text, record, index);
        this.setState({
            visibleProperty: true,
            positionName: record.name,
            rightDisplay: true
        });
    };

    // 属性弹窗关闭
    handleCancelProperty = () => {
        this.setState({ visibleProperty: false });
    };

    // 权限弹窗显示
    showModalRights = (text, record, index) => {
        console.log(text, record, index);
        this.setState({
            visibleRights: true,
            positionName: record.name,
            rightDisplay: true
        });
    };

    // 权限弹窗关闭
    handleCancelRights = () => {
        this.setState({ visibleRights: false });
    };

    // 左侧编辑弹窗显示
    showLeftModalEdit = (text, record, index) => {
        this.setState({
            visibleEdit: true,
            rightDisplay: true
        });
    }

    // 左侧编辑弹窗关闭
    handleCancelEdit = () => {
        this.setState({ visibleEdit: false });
    };

    // 左侧编辑弹窗提交后关闭
    handleOkEdit = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visibleEdit: false });
        }, 2000);
    };

    // 左侧编辑弹窗表单提交
    handleSubmitEdit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        this.setState({ loadingAdd: true });
        setTimeout(() => {
            this.setState({ loadingAdd: false, visibleEdit: false });
        }, 3000);
    };

    // 管理部门弹窗显示
    showModalManagement = (text, record, index) => {
        console.log(text, record, index);
        this.setState({
            visibleManagement: true,
        });
    };

    // 管理部门弹窗关闭
    handleCancelManagement = () => {
        this.setState({ visibleManagement: false });
    };

    // 停用弹窗显示
    showModalStop = (text, record, index) => {
        console.log(text, record, index);
        confirm({
            content: '确定停用此人吗？',
            cancelText: '取消',
            okText: '确定',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 右侧删除弹窗显示
    showRightModalDelete = (text, record, index) => {
        confirm({
            content: '确定将*陈玉敏*从系统管理员中删除吗?',
            cancelText: '取消',
            okText: '确定',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 左侧删除弹窗显示
    showLeftModalDelete = (text, record, index) => {
        console.log(text, record, index);
        confirm({
            content: '确定删除角色系统管理员吗?',
            cancelText: '取消',
            okText: '确定',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    onRowSelected = (record) => {
        console.log(record)
        this.setState({
            rightDisplay: true
        })
    }

    onExpand = expandedKeys => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };

    onChange = e => {
        const { value } = e.target;
        const expandedKeys = dataList
            .map(item => {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, gData);
                }
                return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);

        console.log('expandedKeys', expandedKeys)
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    render() {
        const {
            visibleAddRole,
            visibleAddUser,
            loadingAdd,
            visibleProperty,
            visibleRights,
            visibleManagement,
            visibleEdit,
            rightDisplay,
            editAndDelDisplay,
            addUserBtnDisplay,
            stopOrDelDisplay,
            positionName,
            searchValue,
            expandedKeys,
            autoExpandParent
        } = this.state;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
                align: 'center'
                // render: text => <a>{text}</a>,
            },
            {
                title: '操作人',
                dataIndex: 'operator',
                align: 'center'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'center',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showModalProperty(text, record, index) }}>属性</a>
                        <Divider type="vertical" />
                        <a onClick={() => { this.showModalRights(text, record, index) }}>权限</a>
                        {
                            editAndDelDisplay ?
                                <span>
                                    <Divider type="vertical" />
                                    <a onClick={() => { this.showLeftModalEdit(text, record, index) }}>编辑</a>
                                    <Divider type="vertical" />
                                    <a onClick={() => { this.showLeftModalDelete(text, record, index) }}>删除</a>
                                </span>
                                :
                                null
                        }
                    </span>
                ),
            },
        ];

        const columnsRight = [
            {
                title: '工号',
                dataIndex: 'number',
                align: 'center'
                // render: text => <a>{text}</a>,
            },
            {
                title: '姓名',
                dataIndex: 'name',
                align: 'center'
            },
            {
                title: '管理部门',
                dataIndex: 'apartment',
                align: 'center'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'center',
                render: (text, record, index) => (
                    <span>
                        <a onClick={() => { this.showModalManagement(text, record, index) }}>管理部门</a>
                        <Divider type="vertical" />
                        {
                            stopOrDelDisplay ?
                                <a onClick={() => { this.showRightModalDelete(text, record, index) }}>删除</a>
                                :
                                <a onClick={() => { this.showModalStop(text, record, index) }}>停用</a>
                        }

                    </span>
                ),
            },
        ];

        const tableData = [];
        for (let i = 0; i < 20; i++) {
            tableData.push({
                key: i,
                name: `部长${i}`,
                operator: 'admin'
            })
        }

        const tableDataRight = [];
        for (let i = 0; i < 20; i++) {
            tableDataRight.push({
                key: i,
                number: `1101${i}`,
                name: `张平${i}`,
                apartment: `动力车间${i}`
            })
        }

        const loop = data =>
            data.map(item => {
                const index = item.title.indexOf(searchValue);
                const beforeStr = item.title.substr(0, index);
                const afterStr = item.title.substr(index + searchValue.length);
                const title =
                    index > -1 ? (
                        <span>
                            {beforeStr}
                            <span style={{ color: '#f50' }}>{searchValue}</span>
                            {afterStr}
                        </span>
                    ) : (
                            <span>{item.title}</span>
                        );
                if (item.children) {
                    return (
                        <TreeNode
                            key={item.key}
                            title={
                                <span>
                                    <span>{title}</span> &nbsp;
                                    {
                                        item.personList && item.personList.length ?
                                            item.personList.map((it) => {
                                                return (
                                                    <Tag color="#45B6AF">{it.name}</Tag>
                                                )
                                            }) :
                                            null
                                    }
                                </span>
                            }
                        >
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode
                    key={item.key}
                    title={
                        <span>
                            <span>{title}</span> &nbsp;
                            {
                                item.personList && item.personList.length ?
                                    item.personList.map((it) => {
                                        return (
                                            <Tag color="#45B6AF">{it.name}</Tag>
                                        )
                                    })
                                    :
                                    null
                            }
                        </span>
                    }
                />;
            });

        return (
            <Page loading={false} title={''} flex>
                <div className={styles.rightsCenter}>
                    <div className={styles.center_left}>
                        <div className={styles.top_wrap}>
                            <h2><Icon type="team" />&nbsp;<span>员工信息管理</span></h2>
                            <Button style={{ background: '#26a69a' }} onClick={this.showModalAddRole}>
                                <Icon type="plus" />
                                <span>添加角色</span>
                            </Button>
                        </div>
                        <div className={styles.table}>
                            <Table
                                size='small'
                                bordered='true'
                                columns={columns}
                                dataSource={tableData}
                                rowClassName={(record, index) => {
                                    let className = 'dark_row';
                                    if (index % 2 === 1) className = 'light_row';
                                    return className;
                                }}
                                onRow={record => {
                                    return {
                                        onClick: event => { this.onRowSelected(record) }, // 点击行
                                    };
                                }}
                            />
                        </div>
                        <div>
                            <Modal
                                visible={visibleAddRole}
                                title="添加角色"
                                onOk={this.handleOkAddRole}
                                onCancel={this.handleCancelAddRole}
                                footer={[
                                    <Button key="back" onClick={this.handleCancelAddRole}>
                                        取消
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loadingAdd} onClick={this.handleSubmitAddRole}>
                                        提交
                                    </Button>
                                ]}
                            >
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="名称">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '名称不能为空!' }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="角色职责">
                                        {getFieldDecorator('roleDuty', {
                                            rules: [{ required: false }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="继承">
                                        {getFieldDecorator('inherit', {
                                            rules: [{ required: false }],
                                        })(<Checkbox>子系统管理员可用</Checkbox>)}
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                visible={visibleAddUser}
                                title="添加用户"
                                onOk={this.handleOkAddUser}
                                onCancel={this.handleCancelAddUser}
                                footer={[
                                    <Button key="back" onClick={this.handleCancelAddUser}>
                                        取消
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loadingAdd} onClick={this.handleSubmitAddUser}>
                                        提交
                                    </Button>
                                ]}
                            >
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="名称">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '名称不能为空!' }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="角色职责">
                                        {getFieldDecorator('roleDuty', {
                                            rules: [{ required: false }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="继承">
                                        {getFieldDecorator('inherit', {
                                            rules: [{ required: false }],
                                        })(<Checkbox>子系统管理员可用</Checkbox>)}
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                visible={visibleProperty}
                                title={<span><Icon type="user" /><span> {positionName} </span></span>}
                                onCancel={this.handleCancelProperty}
                            >
                                <p>
                                    <span>关联职务</span> &nbsp;
                                    <a>副部长</a>
                                </p>
                                <p>
                                    <span>角色职责</span> &nbsp;
                                    <a>无</a>
                                </p>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                visible={visibleRights}
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span> 权限设置 </span>
                                        <span style={{ color: '#9eacb4', fontSize: '14px' }}>{positionName}</span>
                                    </span>}
                                onCancel={this.handleCancelRights}
                            >
                                <p>
                                    <span>关联职务</span> &nbsp;
                                    <a>副部长</a>
                                </p>
                                <p>
                                    <span>角色职责</span> &nbsp;
                                    <a>无</a>
                                </p>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                visible={visibleEdit}
                                title="编辑角色"
                                onOk={this.handleOkEdit}
                                onCancel={this.handleCancelEdit}
                                footer={[
                                    <Button key="back" onClick={this.handleCancelEdit}>
                                        取消
                                    </Button>,
                                    <Button key="submit" type="primary" loading={loadingAdd} onClick={this.handleSubmitEdit}>
                                        提交
                                    </Button>
                                ]}
                            >
                                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                    <Form.Item label="名称">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '名称不能为空!' }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="角色职责">
                                        {getFieldDecorator('roleDuty', {
                                            rules: [{ required: false }],
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item label="继承">
                                        {getFieldDecorator('inherit', {
                                            rules: [{ required: false }],
                                        })(<Checkbox>子系统管理员可用</Checkbox>)}
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </div>
                    </div>
                    <div className={styles.center_right} style={rightDisplay ? { display: 'block' } : { display: 'none' }}>
                        <div className={styles.top_wrap}>
                            <h2><Icon type="team" />&nbsp;<span>{positionName} </span></h2>
                            <span className={styles.top_title}> &nbsp;&lt; 职务：{positionName} &gt; </span>
                            {
                                addUserBtnDisplay ?
                                    <Button style={{ background: '#26a69a' }} onClick={this.showModalAddUser}>
                                        <Icon type="plus" />
                                        <span>添加用户</span>
                                    </Button>
                                    :
                                    null
                            }

                        </div>
                        <Tabs tabPosition='bottom'>
                            <TabPane tab="操作员列表" key="1">
                                <Search
                                    placeholder="工号.姓名"
                                    onSearch={value => console.log(value)}
                                    style={{ marginBottom: 8, width: 200 }}
                                />
                                <div className={styles.table}>
                                    <Table
                                        size='small'
                                        bordered='true'
                                        columns={columnsRight}
                                        dataSource={tableDataRight}
                                        rowClassName={(record, index) => {
                                            let className = 'dark_row';
                                            if (index % 2 === 1) className = 'light_row';
                                            return className;
                                        }}
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab="部门授权列表" key="2">
                                <div>
                                    <Search style={{ marginBottom: 8, width: 200 }} placeholder="搜索部门" onChange={this.onChange} />
                                    <DirectoryTree
                                        onExpand={this.onExpand}
                                        expandedKeys={expandedKeys}
                                        autoExpandParent={autoExpandParent}
                                    >
                                        {loop(gData)}
                                    </DirectoryTree>
                                </div>
                            </TabPane>
                        </Tabs>
                        <div>
                            <Modal
                                visible={visibleManagement}
                                title="管理部门"
                                onCancel={this.handleCancelManagement}
                            >
                                <p>
                                    <span>关联职务</span> &nbsp;
                                    <a>副部长</a>
                                </p>
                                <p>
                                    <span>角色职责</span> &nbsp;
                                    <a>无</a>
                                </p>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}
export default Form.create()(Index);