import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'权限管控中心'} flex>
                <div>
                权限管控中心
                </div>
            </Page>
        );
    }
}
export default Index;