import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'日常考勤管理'} flex>
                <div>
                    日常考勤管理
                </div>
            </Page>
        );
    }
}
export default Index;