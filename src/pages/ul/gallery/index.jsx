import React,{useState} from 'react'
import {Card,Row,Col, Modal } from 'antd';
import '../ui.less'
 const Gallery = () => {
    let [currentImg,setCurrentImg] = useState("");
    let [visible,setVisible] = useState(false);
   const openGallery = (item) =>{
        setCurrentImg("./gallery/"+item);
        setVisible(true)
     }
    const { Meta } = Card;
     const imgs = [
         ["1.png","2.png","3.png","4.png","5.png"],
         ["6.png","7.png","8.png","9.png","10.png"],
         ["11.png","12.png","13.png","14.png","15.png"],
         ["16.png","17.png","18.png","19.png","20.png"],
         ["21.png","22.png","23.png","24.png","25.png"]
     ]
     const imgList = imgs.map(list=>list.map(item=>
        <Card style={{marginTop:"10px"}}
        cover={<img  alt="example" src={"./gallery/"+item}/>}
        onClick = {()=>openGallery(item)}
        >
            <Meta title="React Admin" description="I Love Imooc" />
        </Card>
        ))
     return ( 
         <div className="card-wrap">
         <Row gutter={10}>
             <Col md={5}>
                 {
                     imgList[0]
                 }
             </Col>
             <Col md={5}>
                 {
                     imgList[1]
                 }
             </Col>
             <Col md={5}>
                 {
                     imgList[2]
                 }
             </Col>  
             <Col md={5}>
                 {
                     imgList[3]
                 }
             </Col>
            <Col md={4}>
                 {
                     imgList[4]
                 }
             </Col>
         </Row>
         <Modal
         title="图片画廊"
         width={"300px"}   
         height={"500px"} 
         visible={visible}
         onCancel={()=>{
             setVisible(false)
         }}
         footer={null}
         >
           {<img src={currentImg} width={"100%"}/>}
         </Modal>
         </div>
      );
 }
   
 export default Gallery;