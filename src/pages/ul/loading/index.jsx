import React from 'react'
 import {Card,Spin,Button,Alert } from 'antd';
 import {LoadingOutlined} from '@ant-design/icons';
 import '../ui.less'
const Loading = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return ( 
        <div style={{width:"100%"}}>
    <Card title="Spin用法">
    <Spin size="small"/>
    <Spin style={{marginLeft:"10px",marginRight:"10px" }}/>
    <Spin size="large"/>
    <Spin indicator={antIcon} style={{marginLeft:10}}/>
    </Card>
    <Card title="内容遮罩" style={{marginTop:10}}>
    <Spin tip="加载中..."> <Alert  message="React" description="好好学习天天向上" type="info" /> </Spin>
      <Spin><Alert message="React" description="好好学习天天向上" type="error"/> </Spin>
      <Spin><Alert message="React"description="好好学习天天向上"type="warning"/></Spin>
      <Spin><Alert message="React"description="好好学习天天向上"type="success"/></Spin>
    </Card>
        </div>
     );
}
export default Loading;