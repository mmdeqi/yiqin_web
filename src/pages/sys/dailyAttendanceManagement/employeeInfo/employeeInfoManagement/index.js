import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import { Table, Button, Icon, Input, Modal, Form, Select, Checkbox, DatePicker, Tabs, Tree, Upload, message } from 'antd';
import styles from './index.less';

const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
const { TreeNode, DirectoryTree } = Tree;

const columns = [
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
        title: '部门',
        dataIndex: 'apartment',
        align: 'center'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        align: 'center'
    },
    {
        title: '职务',
        dataIndex: 'post',
        align: 'center'
    },
    {
        title: '岗位',
        dataIndex: 'position',
        align: 'center'
    },
    {
        title: '工时类型',
        dataIndex: 'hourType',
        align: 'center'
    },
    {
        title: '入职日期',
        dataIndex: 'entryDate',
        align: 'center'
    },
];

const tableData = [];
for (let i = 0; i < 50; i++) {
    tableData.push({
        key: i,
        number: '11001',
        name: `小星星${i}`,
        apartment: '财务部',
        sex: '男',
        post: '总经理',
        position: '总经理',
        hourType: '标准工时',
        entryDate: '',
    });
}

const gData = [
    {
        title: '天津天铁炼焦化厂有限公司',
        key: '0-0',
        children: [
            {
                title: '经营部',
                key: '经营部',
            },
            {
                title: '设材部',
                key: '设材部',
            },
            {
                title: '财务部',
                key: '财务部',
            },
            {
                title: '人力部',
                key: '人力部',
            },
            {
                title: '技术部',
                key: '技术部',
                children: [
                    { title: '开发部', key: '开发部' },
                    { title: '设计部', key: '设计部' },
                ],
            },
        ],
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

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
            targetKeys: [],
            loading: false,
            visible: false,
            expandedKeys: [],
            searchValue: '',
            autoExpandParent: true,
            loadingImg: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    onSelect = (keys, event) => {
        console.log('Trigger Select', keys, event);
    };

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
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loadingImg: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loadingImg: false,
                }),
            );
        }
    };

    renderTreeNodes = data =>
        data.map(item => {
            const searchValue = this.state.searchValue;
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
                    <TreeNode key={item.key} title={title}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={title} {...item} />;
        });

    render() {
        const { visible, loading, searchValue, expandedKeys, autoExpandParent, imageUrl, loadingImg } = this.state;
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

        const uploadButton = (
            <div>
                <Icon type={this.state.loadingImg ? 'loadingImg' : 'plus'} />
                <div className="ant-upload-text">选择图片</div>
            </div>
        );

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
                        <TreeNode key={item.key} title={title}>
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={item.key} title={title} />;
            });

        return (
            <Page loading={false} title={''} flex>
                <div className={styles.employeeInfoManagement}>
                    <div className={styles.button_group}>
                        <h2><Icon type="team" />&nbsp;<span>员工信息管理</span></h2>
                        <Button style={{ background: '#E87E04' }}>
                            <Icon type="file-excel" />
                            <span>导出报表</span>
                        </Button>
                        <Button style={{ background: '#3598dc' }}>
                            <Icon type="reload" />
                            <span>重置密码</span>
                        </Button>
                        <Button style={{ background: '#E08283' }}>
                            <Icon type="cloud-download" />
                            <span>一键下发</span>
                        </Button>
                        <Button style={{ background: '#8775a7' }}>
                            <Icon type="delete" />
                            <span>删除员工</span>
                        </Button>
                        <Button style={{ background: '#26a69a' }} onClick={this.showModal}>
                            <Icon type="plus" />
                            <span>添加员工</span>
                        </Button>
                    </div>
                    <div className={styles.search_wrap}>
                        <Search
                            placeholder="工号.姓名"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className={styles.table}>
                        <Table size='small' rowSelection={rowSelection} columns={columns} dataSource={tableData} />
                    </div>
                    <div>
                        <Modal
                            visible={visible}
                            title="添加员工"
                            onCancel={this.handleCancel}
                            onOk={this.handleOk}
                            footer={[
                                <Button key="back" onClick={this.handleCancel}>
                                    取消
                                </Button>,
                                <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
                                    提交
                                </Button>,
                            ]}
                        >
                            <div className="card-container">
                                <Tabs type="card">
                                    <TabPane tab="Tab Title 1" key="1">
                                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                            <Form.Item label="工号">
                                                {getFieldDecorator('number', {
                                                    rules: [{ required: true, message: '工号不能为空!' }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="姓名">
                                                {getFieldDecorator('name', {
                                                    rules: [{ required: true, message: '姓名不能为空!' }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="性别">
                                                {getFieldDecorator('sex', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder=""
                                                    >
                                                        <Option value="male">女</Option>
                                                        <Option value="female">男</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="身份证">
                                                {getFieldDecorator('identifyCard', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="邮箱">
                                                {getFieldDecorator('email', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="域用户名">
                                                {getFieldDecorator('areaUsername', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="手机">
                                                {getFieldDecorator('phone', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="职务">
                                                {getFieldDecorator('post', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder=""
                                                    >
                                                        <Option value="1">无</Option>
                                                        <Option value="2">部长</Option>
                                                    </Select>,
                                                )}
                                            </Form.Item>
                                            <Form.Item label="主管">
                                                {getFieldDecorator('charge', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder="请选择人员"
                                                    >
                                                        <Option value="1">无</Option>
                                                        <Option value="2">部长</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="岗位">
                                                {getFieldDecorator('position', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder=""
                                                    >
                                                        <Option value="1">无</Option>
                                                        <Option value="2">部长</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="部门">
                                                {getFieldDecorator('apartment', {
                                                    rules: [{ required: true, message: '部门不能为空!' }],
                                                })(<div>
                                                    <Search style={{ width: '50%' }} placeholder="搜索部门" onChange={this.onChange} />
                                                    <DirectoryTree
                                                        onExpand={this.onExpand}
                                                        expandedKeys={expandedKeys}
                                                        autoExpandParent={autoExpandParent}
                                                    >
                                                        {loop(gData)}
                                                    </DirectoryTree>
                                                </div>)}
                                            </Form.Item>
                                            <Form.Item label="头像">
                                                {getFieldDecorator('avater', {
                                                    rules: [{ required: false }],
                                                })(<Upload
                                                    name="avatar"
                                                    listType="picture-card"
                                                    className="avatar-uploader"
                                                    showUploadList={false}
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    beforeUpload={beforeUpload}
                                                    onChange={this.handleChange}
                                                >
                                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                                </Upload>)}
                                            </Form.Item>
                                        </Form>
                                    </TabPane>
                                    <TabPane tab="Tab Title 2" key="2">
                                        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                            <Form.Item label="注册号">
                                                {getFieldDecorator('registerNo', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="卡号">
                                                {getFieldDecorator('cardNo', {
                                                    rules: [{ required: false }],
                                                })(<Input />)}
                                            </Form.Item>
                                            <Form.Item label="工时类型">
                                                {getFieldDecorator('hourType', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder=""
                                                    >
                                                        <Option value="1">无</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                            <Form.Item label="参加工作日期">
                                                {getFieldDecorator('datePicker', {
                                                    rules: [{ required: false }],
                                                })(<DatePicker style={{ width: '100%' }} />)}
                                            </Form.Item>
                                            <Form.Item label="入职日期">
                                                {getFieldDecorator('entryDate', {
                                                    rules: [{ required: false }],
                                                })(<DatePicker style={{ width: '100%' }} />)}
                                            </Form.Item>
                                            <Form.Item label="转正日期">
                                                {getFieldDecorator('regularDate', {
                                                    rules: [{ required: false }],
                                                })(<DatePicker style={{ width: '100%' }} />)}
                                            </Form.Item>
                                            <Form.Item label="离职日期">
                                                {getFieldDecorator('leaveDate', {
                                                    rules: [{ required: false }],
                                                })(<DatePicker style={{ width: '100%' }} />)}
                                            </Form.Item>
                                            <Form.Item label="考勤管理">
                                                {getFieldDecorator('attendanceManagement', {
                                                    rules: [{ required: false }],
                                                })(<Checkbox>考勤管理</Checkbox>)}
                                            </Form.Item>
                                            <Form.Item label="允许签到方式">
                                                {getFieldDecorator('checkInMode', {
                                                    rules: [{ required: false }],
                                                })(
                                                    <Select
                                                        placeholder=""
                                                    >
                                                        <Option value="1">无</Option>
                                                    </Select>
                                                )}
                                            </Form.Item>
                                        </Form>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Modal>
                    </div>
                </div>
            </Page>
        );
    }
}

export default Form.create()(Index);