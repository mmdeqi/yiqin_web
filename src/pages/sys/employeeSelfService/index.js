import React, { Component } from 'react';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'员工自助'} flex>
                <div>
                    员工自助
                </div>
            </Page>
        );
    }
}
export default Index;