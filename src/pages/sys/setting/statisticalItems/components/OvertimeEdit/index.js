import React, { Component } from 'react';
import { Form, Input, Select, Button, InputNumber, Tabs } from 'antd';

const { Option } = Select;
const { TabPane } = Tabs;

class OvertimeEdit extends Component {
  state = {
    unit: 0
  };

  handleUnitChange = (value) => {
    console.log('unit value', value)
    this.setState({
      unit: value
    })
  }

  onCheckboxChange = (checkedValues) => {
    console.log("checkedValues", checkedValues)
  }

  handleCancel = () => {
    this.props.handleCancel();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSubmit(values);
      }
    });
  };

  render() {
    const { unit } = this.state;
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
        </Tabs>
        <div style={{ textAlign: 'right', padding: '10px 0' }}>
          <Button onClick={this.handleCancel}> 取消 </Button>
          <Button type="primary" onClick={this.handleSubmit} style={{ marginLeft: '10px' }}>确定</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(OvertimeEdit);

