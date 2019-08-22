import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import { Table } from 'antd';
import styles from './index.less';

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

const data = [];
for (let i = 0; i < 20; i++) {
    data.push({
        key: 'i',
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

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetKeys: [],
        }
    }

    render() {
        return (
            <Page loading={false} title={'员工信息管理'} flex>
                <Table style={{ width: '100%' }} rowSelection={rowSelection} columns={columns} dataSource={data} />
            </Page>
        );
    }
}
export default Index;