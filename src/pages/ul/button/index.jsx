import React,{useState} from 'react';
import {Card,Button,Radio  } from 'antd'
import { PlusOutlined,EditOutlined,DeleteOutlined,SearchOutlined,DownloadOutlined,LeftOutlined,RightOutlined} from '@ant-design/icons';
import '../ui.less'
const Buttons = () => {
    let [loading,setLoaing] = useState(true);
    let [size, setSize] = useState("large")
    return ( 
        <div style={{width:"100%"}}>
            <Card title="基础按钮" className="card-wrap">
            <Button type="primary">主题色按钮</Button>     
            <Button>普通按钮</Button>
            <Button type="primary" danger>警告按钮</Button>
            <Button type="dashed" >虚线按钮</Button>
            <Button disabled >禁止按钮</Button>
            </Card>
            <Card title="图形按钮" className="card-wrap">
            <Button  icon={<PlusOutlined />}>创建</Button>     
            <Button icon={<EditOutlined />}>编辑</Button>
            <Button icon={<DeleteOutlined />} >删除</Button>
            <Button icon={<SearchOutlined />} shape="circle" ></Button>
            <Button  icon={<SearchOutlined />} >搜索</Button>
            <Button  icon={<DownloadOutlined />} >下载</Button>
            </Card> 
            <Card title="Loading按钮" className="card-wrap">
            <Button type="primary"  loading={loading}>确定</Button>    
            <Button loading={loading} shape="circle"></Button>
            <Button  loading={loading}>点击加载</Button>
            <Button  shape="circle" loading={loading}></Button>
            <Button type="primary" onClick={()=>setLoaing(true)}>开启</Button>
            <Button type="primary" onClick={()=>setLoaing(false)}>关闭</Button>
            </Card> 
            <Card title="按钮组">
            <Button icon={<LeftOutlined />} type="primary">返回</Button>
            <Button type="primary" icon={<RightOutlined/>}>前进</Button>
            </Card>
            <Card title="按钮尺寸" className="card-wrap">
            <Radio.Group>
            <Radio value="large" onChange={()=>setSize("large")} >大</Radio>
            <Radio value="default" onChange={()=>setSize("default")}>中</Radio>
            <Radio value="small" onChange={()=>setSize("small")}>小</Radio>
            </Radio.Group>
            <Button type="primary" size={size}>主题色按钮</Button>     
            <Button size={size}>普通按钮</Button>
            <Button type="primary" danger size={size}>警告按钮</Button>
            <Button type="dashed" size={size}>虚线按钮</Button>
            </Card>
        </div>
     );
}
 
export default Buttons;