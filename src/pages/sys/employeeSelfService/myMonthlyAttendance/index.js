import React, { Component } from 'react';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'我的考勤月报'} flex>
                <div>
                    我的考勤月报
                </div>
            </Page>
        );
    }
}
export default Index;