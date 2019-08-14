import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Checkbox, Select } from 'antd';
import { Page } from '@components';
import { methods } from '@utils';
import styles from './index.less';

@connect(
    ({ home, loading }) => ({
        ...home,
        loading: loading.global,
    })
)
class Index extends Component {
    render() {
        const { loading } = this.props;
        return (
            <Page loading={false} title={'组织架构管理'} flex>
                <div>
                    组织架构管理
                </div>
            </Page>
        );
    }
}
export default Index;