import React,{useState,useEffect} from 'react'
import {Card,Form,Select,Button,Table,Pagination,Modal, Radio,message} from 'antd'
// import Utils from '../../Utils/utils'
import Axios from '../../axios';
const { Option } = Select;

const City = () => {
    let [dataSource,setDataSource] = useState({
        list:[],
        page:1,
        initialShow:false,
        reset:false
    })
    const params ={
        page:1
    }
    //定义表格规范
   const columns =[
       {
           title:"城市ID",
           dataIndex:"id"
       },
       {
           title:"城市名称",
           dataIndex:"name"
       },
       {
           title:"用车模式",
           dataIndex:"mode",
        //    render(value){
        //     return value="1"?"指定停车点":"禁停区"
        //    }
       },
       {
           title:"运营模式",
           dataIndex:"op_mode"
       },
       {
            title:"授权加盟商",
            dataIndex:"franchisee_name"
       },
       {
           title:"城市管理员",
           dataIndex:"city_admins",
           render(arr){
             return arr.map(value=>{
                 return value.user_name;
             }).join(",");
           }
       },
       {
           title:"城市开通时间",
           dataIndex:"open_time"
       },
       {
           title:"操作时间",
           dataIndex:"update_time"
       },
       {
           title:"操作人",
           dataIndex:"sys_user_name"
       }
   ]
   useEffect(()=>{
       Axios.ajax({
           url:"/open_city",
           data:{
               params:{
                   page:params.page
               }
           }
       })
       .then(res=>{
           //要注意因为请求回来的数据里面要是有单独的数组要进行修改规范
           if(res.code == 0){
                     setDataSource({...dataSource,list:res.result.item_list.map((item,index)=>{
                item.key = index;
                return item
            })})
           }
       })
   },[dataSource.reset])
   let useFenye=(()=>{
    useEffect(()=>{
        Axios.ajax({
            url:"/open_city",
            data:{
                params:{
                    page:params.page
                }
            }
        })
        .then(res=>{
            //要注意因为请求回来的数据里面要是有单独的数组要进行修改规范
            if(res.code == 0){
                      setDataSource({...dataSource,list:res.result.item_list.map((item,index)=>{
                 item.key = index;
                 return item
             })})
            }
        })
    },[dataSource.page])
   function onChangePage(pageNumber) {
    setDataSource({...dataSource,page:pageNumber})
  //   console.log('Page: ', pageNumber);
  }
  return {
    onChangePage,
  }
})
let {onChangePage} = useFenye();
//开通城市
const hadnleOpenCity = () =>{
    setDataSource({...dataSource,initialShow:true})
}
//城市开通提交

const handleSubmit = () =>{
    // console.log(formtj.getFieldsValue())
  Axios.ajax({
      url:"/open/city",
      data:{
          params:formtj.getFieldsValue()
      }
  }).then(res=>{
    if(res.code == 0){
        // debugger
        setDataSource({...dataSource,reset:!dataSource.reset,initialShow:false});
message.success("开通成功")
}
  })
}
const [formtj] =   Form.useForm()
    return ( 
        <div style={{width:"100%"}}>
            <Card>
                <FilterForm/>
            </Card>
            <Card>
                <Button type="primary" onClick={()=>hadnleOpenCity()}>开通城市</Button>
            </Card>
            <Table
            bordered
            columns={columns}
            dataSource={dataSource.list}
            pagination={false}
            />
             <Pagination defaultCurrent={1} showQuickJumper total={60} style={{textAlign:"right"}} onChange={onChangePage}/>
        <Modal
        title="开通城市"
        visible={dataSource.initialShow}
        onCancel={()=>{
            setDataSource({...dataSource,initialShow:false})
        }}
        onOk={handleSubmit}
        
        >
            <OpenCityForm formtj={formtj}/>
        </Modal>
        </div>
     );
    }
export default City;
//查询
const FilterForm = () => {
    // 此方法可以帮助你获取表单数据，初始化表单数据，校验表单数据，
    // const { getFieldDecorator } = 
    return ( 
        //行内查询
        <Form layout="inline">
        <Form.Item label="城市" name="city" >
            <Select
            placeholder="请选择"
            style={{width:130}}
            >
             <Option value="0">全部</Option>
             <Option value="1">北京市</Option>
             <Option value="2">天津市</Option>
             <Option value="3">深圳市</Option>
            </Select>
        </Form.Item>  
        <Form.Item label="用车模式" name="mode" >
            <Select
            placeholder="请选择"
            style={{width:160}}
            >
             <Option value="0">全部</Option>
             <Option value="1">指定停车点</Option>
             <Option value="2">禁停区</Option>
            </Select>
        </Form.Item>  
        <Form.Item label="运营模式" name="op_mode" >
            <Select
            placeholder="请选择"
            style={{width:100}}
            >
             <Option value="0">全部</Option>
             <Option value="1">自营</Option>
             <Option value="2">加盟</Option>
            </Select>
        </Form.Item> 
        <Form.Item label="加盟商授权状态" name="auth_status" >
            <Select
            style={{width:100}}
            placeholder="请选择"
            >
             <Option value="0">全部</Option>
             <Option value="1">已授权</Option>
             <Option value="2">未授权</Option>
            </Select>
        </Form.Item>  
        <Form.Item>
           <Button type="primary" style={{margin:"0px 20px"}} htmlType='submit'>查询</Button>
           <Button>重置</Button>
        </Form.Item>  
        </Form>
     );
} 
// Modal 框里的表单选项
const OpenCityForm = ({formtj}) =>{
    return(
        <Form layout="horizontal" form={formtj}  name='kaitongcity'>
             <Form.Item label="选择城市" name="city">
            <Select
            style={{width:150}}
            placeholder="请选择"
            >
             <Option value="0">全部</Option>
             <Option value="1">北京市</Option>
             <Option value="2">天津市</Option>
             <Option value="3">深圳市</Option>
            </Select>
        </Form.Item> 
        <Form.Item label="运营模式" name="op_mode" >
        <Radio.Group>
          <Radio value="1">自营</Radio>
          <Radio value="2">加盟</Radio>
        </Radio.Group>
        </Form.Item> 
        <Form.Item label="用车模式" name="mode" >
        <Radio.Group>
          <Radio value="1">指定停车点模式</Radio>
          <Radio value="2">禁停区模式</Radio>
        </Radio.Group>
        </Form.Item> 
        </Form>
    )
} 