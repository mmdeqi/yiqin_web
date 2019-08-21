import React, { Component } from 'react';
import { connect } from 'dva';
import { Page } from '@components';
import styles from './index.less';

class Index extends Component {
    render() {
        return (
            <Page loading={false} title={'我的收藏'} flex>
                <div>
                    我的收藏
                </div>
            </Page>
        );
    }
}
export default Index;