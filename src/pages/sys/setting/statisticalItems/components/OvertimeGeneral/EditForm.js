import React, { Component } from 'react';
import { Button, Input, Checkbox, Select, Row, Col, Tabs, InputNumber, Switch } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

class EditForm extends Component {

    handleCancel = () => {
        this.props.handleCancel()
    }
    
    handleSubmit = () => {
        this.props.handleSubmit()
    }

    render() {
        return (
            <div>
                <p>
                    <span>选择工时类型：</span>
                    <Select>
                        <Option value="1">标准工时</Option>
                        <Option value="2">综合工时</Option>
                        <Option value="3">倒班工时</Option>
                        <Option value="4">无倒休工时</Option>
                    </Select>
                </p>
                <Row>
                    <p>
                        <Checkbox value='5'></Checkbox>
                        <span> &nbsp;月度考勤统计时存休超过 </span>
                        <input />
                        <span> 小时转回</span>
                        <Select>
                            <Option value="1">平常加班</Option>
                            <Option value="2">休息日加班</Option>
                            <Option value="3">节假日加班</Option>
                        </Select>
                    </p>
                </Row>
                <Tabs type="card">
                    <TabPane tab="平常加班" key="1">
                        <p>
                            <span>允许平常加班：</span>
                            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                        </p>
                        <p>
                            <span>1. 当加班以天为单位，</span>
                            <input />
                            <span> 个小时算一天</span>
                        </p>
                        <p>
                            <span>2. 加班超过</span>
                            <input />
                            <span> 小时，超过部分按照</span>
                            <input />
                            <span> 比例转存休</span>
                        </p>
                        <p>
                            <span>3. 统计加班时长以：</span>
                            <Select>
                                <Option value="1">平常加班</Option>
                                <Option value="2">休息日加班</Option>
                                <Option value="3">节假日加班</Option>
                            </Select>
                            <span>为准</span>
                        </p>
                        <div>
                            <h3>自动计算规则</h3>
                            <p>
                                <span>加班时长超过</span>
                                <input />
                                <span> 分钟起算</span>
                            </p>
                            <p>
                                <span>扣除就餐时段</span>
                                <input />
                            </p>
                            <p>
                                <span>取整值</span>
                                <input />
                                <span> 分钟，取舍方式</span>
                                <Select>
                                    <Option value="1">上靠</Option>
                                    <Option value="2">下靠</Option>
                                </Select>
                                <span>为准</span>
                            </p>
                            <p>
                                <Checkbox value='6'>刷卡数据只取最早最晚</Checkbox>
                            </p>
                        </div>
                    </TabPane>
                    <TabPane tab="休息日加班" key="2">
                        <p>
                            <span>允许平常加班：</span>
                            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                        </p>
                        <p>
                            <span>1. 当加班以天为单位，</span>
                            <input />
                            <span> 个小时算一天</span>
                        </p>
                        <p>
                            <span>2. 加班超过</span>
                            <input />
                            <span> 小时，超过部分按照</span>
                            <input />
                            <span> 比例转存休</span>
                        </p>
                        <p>
                            <span>3. 统计加班时长以：</span>
                            <Select>
                                <Option value="1">平常加班</Option>
                                <Option value="2">休息日加班</Option>
                                <Option value="3">节假日加班</Option>
                            </Select>
                            <span>为准</span>
                        </p>
                        <div>
                            <h3>自动计算规则</h3>
                            <p>
                                <span>加班时长超过</span>
                                <input />
                                <span> 分钟起算</span>
                            </p>
                            <p>
                                <span>扣除就餐时段</span>
                                <input />
                            </p>
                            <p>
                                <span>取整值</span>
                                <input />
                                <span> 分钟，取舍方式</span>
                                <Select>
                                    <Option value="1">上靠</Option>
                                    <Option value="2">下靠</Option>
                                </Select>
                                <span>为准</span>
                            </p>
                            <p>
                                <Checkbox value='6'>刷卡数据只取最早最晚</Checkbox>
                            </p>
                        </div>
                    </TabPane>
                    <TabPane tab="节假日加班" key="3">
                        <p>
                            <span>允许平常加班：</span>
                            <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                        </p>
                        <p>
                            <span>1. 当加班以天为单位，</span>
                            <input />
                            <span> 个小时算一天</span>
                        </p>
                        <p>
                            <span>2. 加班超过</span>
                            <input />
                            <span> 小时，超过部分按照</span>
                            <input />
                            <span> 比例转存休</span>
                        </p>
                        <p>
                            <span>3. 统计加班时长以：</span>
                            <Select>
                                <Option value="1">平常加班</Option>
                                <Option value="2">休息日加班</Option>
                                <Option value="3">节假日加班</Option>
                            </Select>
                            <span>为准</span>
                        </p>
                        <div>
                            <h3>自动计算规则</h3>
                            <p>
                                <span>加班时长超过</span>
                                <input />
                                <span> 分钟起算</span>
                            </p>
                            <p>
                                <span>扣除就餐时段</span>
                                <input />
                            </p>
                            <p>
                                <span>取整值</span>
                                <input />
                                <span> 分钟，取舍方式</span>
                                <Select>
                                    <Option value="1">上靠</Option>
                                    <Option value="2">下靠</Option>
                                </Select>
                                <span>为准</span>
                            </p>
                            <p>
                                <Checkbox value='6'>刷卡数据只取最早最晚</Checkbox>
                            </p>
                        </div>
                    </TabPane>
                </Tabs>
                <div style={{ textAlign: 'right', padding: '10px 0' }}>
                    <Button onClick={this.handleCancel}> 取消 </Button>
                    <Button type="primary" onClick={this.handleSubmit} style={{ marginLeft: '10px' }}>确定</Button>
                </div>
            </div>
        );
    }
}

export default EditForm;

