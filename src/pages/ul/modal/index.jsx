import React,{useState} from 'react'
import {Card , Modal , Button} from 'antd'
import '../ui.less'
const Modals = () => {
    const [isModalVisible, setIsModalVisible] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
    });
     const showModal = (type) =>{
 let xs = {...isModalVisible,[type]:true}
     setIsModalVisible(xs)
     }
    const handleOk = (type) => {
        let xs = {...isModalVisible,[type]:false}
        setIsModalVisible(xs)
      };
    
      const handleCancel = (type) => {
        let xs = {...isModalVisible,[type]:false}
        setIsModalVisible(xs)
      };
      const showConfirm = (type) =>{
       Modal[type]({
            title:"确认?",
           content:(
               <p>一定要好好学习</p>
           ),
           onOk(){},
           onCancel(){}
       })
      }
    return ( 
        <div style={{width:"100%"}}>
            <Card title="基础模态框" className="card-wrap">
            <Button onClick={()=>(showModal('modal1'))} type="primary">Open</Button>
            <Button onClick={()=>(showModal('modal2'))} type="primary">自定义页脚</Button>
            <Button onClick={()=>(showModal('modal3'))} type="primary">顶部20px弹框</Button>
            <Button onClick={()=>(showModal('modal4'))} type="primary">水平垂直居中</Button>
            </Card>
            <Card title="信息确认框" className="card-wrap">
            <Button onClick={()=>(showConfirm('info'))} type="primary">info</Button>
            <Button onClick={()=>(showConfirm('success'))} type="primary">success</Button>
            <Button onClick={()=>(showConfirm('error'))} type="primary">error</Button>
            <Button onClick={()=>(showConfirm('confirm'))} type="primary">confirm</Button>
            </Card>
            <Modal 
            title="React" 
            visible={isModalVisible.modal1}
            onOk={()=>handleOk('modal1')}
            onCancel={()=>handleCancel('modal1')}
            >
            <p>好好学习天天向上</p>
            </Modal>
            <Modal 
            title="React" 
            okText="好的下一步"
            cancelText="算了"
            visible={isModalVisible.modal2}
            onOk={()=>handleOk('modal2')}
            onCancel={()=>handleCancel('modal2')}
            >
            <p>好好学习天天向上</p>
            </Modal>
            <Modal 
            style={{top:"20px"}}
            title="React" 
            okText="好的下一步"
            cancelText="算了"
            visible={isModalVisible.modal3}
            onOk={()=>handleOk('modal3')}
            onCancel={()=>handleCancel('modal3')}
            >
            <p>好好学习天天向上</p>
            </Modal>
            <Modal 
            title="React" 
            okText="好的下一步"
            cancelText="算了"
            centered={true}
            visible={isModalVisible.modal4}
            onOk={()=>handleOk('modal4')}
            onCancel={()=>handleCancel('modal4')}
            >
            <p>好好学习天天向上</p>
            </Modal>
        </div>
     );
}
 
export default Modals;