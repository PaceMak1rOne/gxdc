import React from 'react'
import {Button,Card,notification} from 'antd'
import '../ui.less'
const Notification = () => {
 const openNotification = (type,placement) =>{
     if(placement){
       notification.config({
        placement
       })
     }
          notification[type]({
        message: '赶紧写项目',
        description:
          '好好学习天天向上',
        onClick: () => {},
      });
     }
    return ( 
        <div style={{width:"100%"}}>
       <Card title="通知提醒框" className="card-wrap">
            <Button type="primary" onClick={()=>{openNotification("success")}}>Success</Button>
            <Button type="primary" onClick={()=>{openNotification("error")}}>Error</Button>
            <Button type="primary" onClick={()=>{openNotification("info")}}>Info</Button>
            <Button type="primary" onClick={()=>{openNotification("warning")}}>Warning</Button>
       </Card>
       <Card title="自定义方向通知提醒框" className="card-wrap">
            <Button type="primary" onClick={()=>{openNotification("success","topLeft")}}>Success</Button>
            <Button type="primary" onClick={()=>{openNotification("error","topRight")}}>Error</Button>
            <Button type="primary" onClick={()=>{openNotification("info","bottomLeft")}}>Info</Button>
            <Button type="primary" onClick={()=>{openNotification("warning","bottomRight")}}>Warning</Button>
       </Card>
        </div>
     );
}
 
export default Notification;