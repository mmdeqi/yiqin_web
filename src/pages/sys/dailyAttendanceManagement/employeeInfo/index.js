import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'员工档案信息'} flex>
                <div>
                    员工档案信息
                </div>
            </Page>
        );
    }
}
export default Index;