import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
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