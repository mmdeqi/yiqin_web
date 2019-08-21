import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

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
                <div>
                    员工信息管理
                </div>
            </Page>
        );
    }
}
export default Index;