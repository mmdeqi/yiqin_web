import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'考勤统计项设置'} flex>
                <div>
                考勤统计项设置
                </div>
            </Page>
        );
    }
}
export default Index;