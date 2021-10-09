import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Card,Form, Input, Button, Checkbox } from 'antd'
const Logins = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return ( 
        <div style={{width:"100%"}}>
         <Card title="登录行内表单">
         <Form layout="inline">
             <Form.Item>
                   <Input placeholder="请输入用户名" />
             </Form.Item>
             <Form.Item>
                   <Input placeholder="请输入密码" />
             </Form.Item>
             <Form.Item>
                 <Button type="primary">登录</Button>
             </Form.Item>
         </Form>
         </Card>
         <Card title="登录水平表单" style={{marginTop:10}}>
         <Form
          labelCol={{ span: 1 }}
          wrapperCol={{ span: 6 }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住账号</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="javascript:;" style={{marginLeft:110}}>
              忘记密码
            </a>
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight:10}}>
              登录
            </Button>
            或 <a href="javascript:;" style={{marginLeft:10}}>注册</a>
          </Form.Item>
        </Form>
         </Card>
        </div>
     );
}
 
export default Logins;