import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
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
        return (
            <Page 
                loading={false} 
                title={'首页'} 
                flex
                // description={formatMessage({ id: 'home.desc' })}
                >
                <div>
                    Home
                </div>
            </Page>
        );
    }
}
export default Index;