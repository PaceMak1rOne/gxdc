import React from 'react'
import {Form,Card,Input,Select,Row,Col,Checkbox,Button,DatePicker, Space} from 'antd';
const { Option } = Select;
const Register = () => {
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
        const [form] = Form.useForm();      
        const onFinish = (values) => {
          console.log('当前注册表单的内容 ', values);
        };
      
        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
              +86
          </Form.Item>
        );
    return ( 
        <div style={{width:"100%"}}>
          <Card title="注册表单">
          <Form
          style={{width:500}}
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="电子邮箱"
        rules={[
          {
            type: 'email',
            message: '输入的邮箱不正确',
          },
          {
            required: true,
            message: '请输入您的电子邮箱',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('两个密码不相同'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="名称"
        tooltip="你希望别人怎么称呼你"
        rules={[
          {
            required: true,
            message: '请输入你的名称',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="birthday"
        label="生日"
        rules={[
          {
            required: true,
            message: '请选择你的生日',
            whitespace: true,
          },
        ]}
      >
      <Space direction="vertical" size={12}>
    <DatePicker showTime placeholder={"请选择您的生日"} />
    </Space>
      </Form.Item>
      <Form.Item
        name="phone"
        label="手机号"
        rules={[
          {
            required: true,
            message: '请输入你的手机号',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="gender"
        label="性别"
        rules={[
          {
            required: true,
            message: '请选择性别',
          },
        ]}
      >
        <Select placeholder="选择性别">
          <Option value="male">女</Option>
          <Option value="female">男</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>
      <Form.Item label="验证码" >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('请点击接受协议')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
        我已阅读 <a href="javascript:;">协议</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
          </Card>
        </div>
     );
}
 
export default Register;