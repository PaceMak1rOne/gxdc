import React from 'react'
import {Card,message,Button} from 'antd'
import '../ui.less'
const Message = () => {
    const showMessage = (type) =>{
          message[type]("好好学习努力加油成功就业",5)
    }
    return ( 
        <div style={{width:"100%"}}>
            <Card title="全局提示框" className="card-wrap">
            <Button type="primary" onClick={()=>{showMessage("success")}}>Success</Button>
            <Button type="primary" onClick={()=>{showMessage("info")}}>Info</Button>
            <Button type="primary" onClick={()=>{showMessage("error")}}>Error</Button>
            <Button type="primary" onClick={()=>{showMessage("warning")}}>Warning</Button>
            </Card>
        </div>
     );
}
export default Message;