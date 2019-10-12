import React, { Component } from 'react';
import { Button, Form, Input, InputNumber, Switch, Checkbox, Select, Row, Col, Tabs } from 'antd';
import styles from './style.less';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const { TabPane } = Tabs;

class SubsidyEdit extends Component {
  state = {
    unit: 0,
    displayOne: false,
    displayTwo: false,
    displayThree: false,
    checkedFull: false,
    checkedAllow: false,
    checkedRest: false,
    switchStatus: false,
    checkedListOne: [],
    checkedListTwo: [],
    checkedListThree: [],
  };

  // 全勤的选中状态
  onChangeFull = (e) => {
    this.setState({
      displayOne: e.target.checked,
      checkedFull: e.target.checked
    })
    if (!e.target.checked) {
      this.setState({
        checkedAllow: false
      })
    }
  }

  // 允许迟到早退选中状态
  onChangeAllow = (e) => {
    this.setState({
      checkedAllow: e.target.checked
    })
  }

  // 休息日补贴规则的选中状态
  onChangeRest = (e) => {
    this.setState({
      displayTwo: e.target.checked,
      checkedRest: e.target.checked
    })
    if (!e.target.checked) {
      this.setState({
        checkedListTwo: [],
        checkedListThree: [],
        displayThree: false,
        switchStatus: false
      })
    }
  }

  // 必须有加班单的开关状态
  onChangeSwitch = (checked) => {
    this.setState({
      switchStatus: checked,
      displayThree: checked
    })
    if (!checked) {
      this.setState({
        checkedListThree: []
      })
    }
  }

  // 第一组复选框的选中状态
  onChangeGroupOne = (checkedValues) => {
    this.setState({
      checkedListOne: checkedValues
    })
  }

  // 第二组复选框的选中状态
  onChangeGroupTwo = (checkedValues) => {
    this.setState({
      checkedListTwo: checkedValues
    })
  }

  // 第三组复选框的选中状态
  onChangeGroupThree = (checkedValues) => {
    this.setState({
      checkedListThree: checkedValues
    })
  }

  handleCancel = () => {
    this.props.handleCancel();
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      checkedFull,
      checkedAllow,
      checkedRest,
      checkedListOne,
      checkedListTwo,
      checkedListThree
    } = this.state;
    this.props.handleSubmit()
  };

  render() {
    const {
      unit,
      displayOne,
      displayTwo,
      displayThree,
      checkedFull,
      checkedAllow,
      checked,
      switchStatus,
      checkedListOne,
      checkedListTwo,
      checkedListThree
    } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const speialItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 0 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };

    return (
      <Form {...formItemLayout}>
        <Tabs>
          <TabPane tab="基本设置" key="1">
            <Form.Item label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '名称不能为空!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="统计单位">
              {getFieldDecorator('unit', {
                rules: [{ required: false }],
              })(
                <Select onChange={this.handleUnitChange}>
                  <Option value="0">次</Option>
                  <Option value="1">小时</Option>
                  <Option value="2">天</Option>
                </Select>,
              )}
            </Form.Item>
            {
              unit != 0
                ?
                <div>
                  <Form.Item label="取整">
                    {getFieldDecorator('adjustment', {
                      rules: [{ required: false, message: '' }],
                    })(<InputNumber />)}
                  </Form.Item>
                  <Form.Item label="取舍方式">
                    {getFieldDecorator('method', {
                      initialValue: '1',
                      rules: [{ required: false }],
                    })(
                      <Select>
                        <Option value="1">四舍五入</Option>
                        <Option value="2">下靠</Option>
                        <Option value="3">上靠</Option>
                      </Select>,
                    )}
                  </Form.Item>
                </div>
                :
                null
            }

            <Form.Item label="报表简符">
              {getFieldDecorator('reportCharm', {
                rules: [{ required: false }],
              })(<Input />)}
            </Form.Item>
          </TabPane>
          <TabPane tab="高级设置" key="2" style={{ paddingLeft: '40px' }}>
            <h3>补贴规则</h3>
            <div className={styles.checkbox_wrap}>
              <Row>
                <Col span={4}>
                  <p>
                    <Checkbox
                      checked={checkedFull}
                      onChange={this.onChangeFull}
                    >
                      全勤
								</Checkbox>
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <Checkbox
                      checked={checkedAllow}
                      onChange={this.onChangeAllow}
                      style={displayOne ? { display: 'inline-block' } : { display: 'none' }}>允许迟到早退</Checkbox>
                  </p>
                </Col>
              </Row>
              <Checkbox.Group
                value={checkedListOne}
                onChange={this.onChangeGroupOne}
              >
                <Row>
                  <p>
                    <Checkbox value='3'></Checkbox>
                    <span className={styles.checkbox_item}>上班时长&gt; </span>
                    <input className={styles.special_input} />
                    <span> 小时</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    <Checkbox value='4'></Checkbox>
                    <span className={styles.checkbox_item}>在岗时长&gt; </span>
                    <input className={styles.special_input} />
                    <span> 小时</span>
                  </p>
                </Row>
                <Row>
                  <p>
                    <Checkbox value='5'></Checkbox>
                    <span className={styles.checkbox_item}>缺勤时长&lt; </span>
                    <input className={styles.special_input} />
                    <span> 小时</span>
                  </p>
                </Row>
                <Row>
                  <Checkbox value='6'></Checkbox>
                  <span className={styles.checkbox_item}>出勤时段包含 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
                <Row>
                  <Checkbox value='7'></Checkbox>
                  <span className={styles.checkbox_item}>早打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
                <Row>
                  <Checkbox value='8'></Checkbox>
                  <span className={styles.checkbox_item}>晚打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
                <Row>
                  <Checkbox value='9'></Checkbox>
                  <span className={styles.checkbox_item}>任意一笔打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
              </Checkbox.Group>
            </div>
            <h3>
              <Row>
                <Checkbox
                  onChange={this.onChangeRest}
                >
                  休息日补贴规则
						</Checkbox>
              </Row>
            </h3>
            <div className={styles.checkbox_wrap} style={displayTwo ? { display: 'block' } : { display: 'none' }}>
              <Row>
                <p>
                  <Switch
                    checkedChildren="开"
                    unCheckedChildren="关"
                    checked={switchStatus}
                    onChange={this.onChangeSwitch}
                  />
                  <span> &nbsp;必须有加班单</span>
                </p>
              </Row>
              <div style={displayThree ? { display: 'block' } : { display: 'none' }}>
                <Checkbox.Group
                  value={checkedListThree}
                  onChange={this.onChangeGroupThree}
                >
                  <Row>
                    <p>
                      <Checkbox value='14'></Checkbox>
                      <span className={styles.checkbox_item}>加班时长&gt; </span>
                      <input className={styles.special_input} />
                      <span> 小时</span>
                    </p>
                  </Row>
                  <Row>
                    <Checkbox value='15'></Checkbox>
                    <span className={styles.checkbox_item}>加班时段包含 </span>
                    <input className={styles.special_input} />
                    <span> 时段</span>
                    <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                  </Row>
                  <Row>
                    <Checkbox value='16'></Checkbox>
                    <span className={styles.checkbox_item}>加班开始时间落在 </span>
                    <input className={styles.special_input} />
                    <span> 时段</span>
                    <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                  </Row>
                  <Row>
                    <Checkbox value='17'></Checkbox>
                    <span className={styles.checkbox_item}>加班结束时间落在 </span>
                    <input className={styles.special_input} />
                    <span> 时段</span>
                    <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                  </Row>
                </Checkbox.Group>
              </div>
              <Checkbox.Group
                value={checkedListTwo}
                onChange={this.onChangeGroupTwo}
              >
                <Row>
                  <Checkbox value='11'></Checkbox>
                  <span className={styles.checkbox_item}>早打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
                <Row>
                  <Checkbox value='12'></Checkbox>
                  <span className={styles.checkbox_item}>晚打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
                <Row>
                  <Checkbox value='13'></Checkbox>
                  <span className={styles.checkbox_item}>任意一笔打卡落在 </span>
                  <input className={styles.special_input} />
                  <span> 时段</span>
                  <p className={styles.hint}>(只填写一段时间段,必须是英文字符,如:8:00-12:00)</p>
                </Row>
              </Checkbox.Group>
            </div>
          </TabPane>
        </Tabs>
        <div style={{ textAlign: 'right', padding: '10px 0' }}>
          <Button onClick={this.handleCancel}> 取消 </Button>
          <Button type="primary" onClick={this.handleSubmit} style={{ marginLeft: '10px' }}>确定</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(SubsidyEdit);

