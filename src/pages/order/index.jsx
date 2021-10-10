import React,{useState,useEffect} from 'react'
import {Card,Button,Table, DatePicker,Select,Form,Pagination,Modal,message} from 'antd'
import Axios from '../../axios'
const { Option } = Select;
// const { RangePicker } = DatePicker;
const Order = () => {
    let [dataSource,setDataSource] = useState({
        list:[],
        page:1,
        orderConfirmVisible:false,
        orderInfo:[],
        selectedRowKeys:[],
        selectItem:[]
    })
     const params={
         page:1
     }
    //  首先定义columns表格的规范
    const columns=[
        {
            title:"订单编号",
            dataIndex:"order_sn"
        },
        {
            title:"车辆编号",
            dataIndex:"bike_sn"
        },
        {
            title:"用户名",
            dataIndex:"user_name",
            width: 100
        },
        {
            title:"手机号",
            dataIndex:"mobile"
        },
        {
            title:"里程",
            dataIndex:"distance"
        },
        {
            title:"行驶时长",
            dataIndex:"total_time"
        },
        {
            title:"状态",
            dataIndex:"status",
            render(value){
            return  value=="1"?"进行中":"结束行程"
            },
            width:90 
        },
        {
            title:"开始时间",
            dataIndex:"start_time"
        },
        {
            title:"结束时间",
            dataIndex:"end_time"
        },
        {
            title:"订单金额",
            dataIndex:"total_fee"
        },
        {
            title:"实付金额",
            dataIndex:"user_pay"
        },
    ]
    // 进行订单请求
    useEffect(()=>{
    Axios.ajax({
        url:"/order/list",
        data:{
            params:{
                page:params.page
            }
        }
    })
    .then(res=>{
        if(res.code == "0"){
        let data = res.result;
        setDataSource({...dataSource,list:data.list})
        }
    })
    },[])
    //分页
    let useFenye = (() =>{
        useEffect(()=>{
            Axios.ajax({
                url:"/order/list",
                data:{
                    params:{
                        page:params.page
                    }
                }
            })
            .then(res=>{
                if(res.code == "0"){
                let data = res.result;
                setDataSource({...dataSource,list:data.list})
                }
            })
            },[dataSource.page]);
            function onChangePage(pageNumber){
                setDataSource({...dataSource,page:pageNumber})
            }
            return {
                onChangePage,
              }
    })
    let {onChangePage} = useFenye();
    //订单结束确认
  const handleFindish = () =>{
    let id =  dataSource.selectItem.id;
    if(!id){
        Modal.info({
            title:"信息",
            content:"请选择一条订单进行结束"
        })
        return
    }
        Axios.ajax({
            url:"/order/bike_info",
            data:{
                parmas:id
            }
        }).then(res=>{
            if(res.code == "0"){
            setDataSource({...dataSource,orderConfirmVisible:true,orderInfo:res.result})
            }
        })
    }
    //结束订单
    const handleFindishOrder = () =>{
        Axios.ajax({
            url:"/order/finish_order",
            data:{
                parmas:{
                    page:params.page
                }
            }
        }).then(res=>{
            if(res.code == "0"){
                message.success("订单结束成功")
            setDataSource({...dataSource,orderConfirmVisible:false})
            Axios.ajax({
                url:"/order/list",
                data:{
                    params:{
                        page:params.page
                    }
                }
            })
            .then(res=>{
                if(res.code == "0"){
                let data = res.result;
                setDataSource({...dataSource,list:data.list,orderConfirmVisible:false})
                }
            })
            }
        })
    }
    //进行栅格布局
    const formItemLayout ={
        labelCol:{span:5},
        wrapperCol:{span:10}
    }
    //定义表格的单选按钮
    const selectRowKeys = dataSource.selectedRowKeys;
    const rowSelection = {
        type:"radio", 
        selectedRowKeys:selectRowKeys   
    }
    //选择的订单点击行
    const onRowClick = (record,index) =>{
        //    获取index索引
       let selectKey = [index];
       console.log(selectKey)
       
    setDataSource({...dataSource,selectedRowKeys:selectKey,selectItem:record});
       }
    return ( 
        <div style={{width:"100%"}}>
        <Card>
      <FilterForm/>
        </Card>
        <Card style={{marginTop:10}}>
            <Button type="primary" style={{marginRight:15}}>订单详情</Button>
            <Button onClick={()=>handleFindish()}>结束订单</Button>
        </Card>
        <div>
        <Table
        //给表格进行添加单选按钮
            bordered
            columns={columns}
            dataSource={dataSource.list}
            pagination={false}
            rowSelection={rowSelection}
            onRow={(record,index) => {
                return {
                  onClick: () =>onRowClick(record,index) // 点击行
                  
                };
            }}
            />
            <Pagination defaultCurrent={1} showQuickJumper total={85} style={{textAlign:"right"}} onChange={()=>{onChangePage()}}/>
        </div>
        <Modal
        title="结束订单"
        visible={dataSource.orderConfirmVisible}
        onCancel={()=>{
            setDataSource({...dataSource,orderConfirmVisible:false})
        }
        }
        onOk={handleFindishOrder}
        width={600}
                >
                <Form layout="horizontal">
                    <Form.Item label="车辆编号" {...formItemLayout}>
                      {dataSource.orderInfo.bike_sn}
                    </Form.Item>
                    <Form.Item label="剩余电量" {...formItemLayout}>
                      {dataSource.orderInfo.battery + "%"}
                    </Form.Item>
                    <Form.Item label="行程开始时间" {...formItemLayout}>
                      {dataSource.orderInfo.start_time}
                    </Form.Item>
                    <Form.Item label="当前位置" {...formItemLayout}>
                      {dataSource.orderInfo.location}
                    </Form.Item>
                </Form>
                </Modal>
        </div >
     );
}
 
export default Order;
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
        <Form.Item label="订单时间" name="start_time" >
        <DatePicker showTime  placeholder={"开始时间"}  style={{width:200}} />
        </Form.Item>  
        <Form.Item name="end_time" label="~" colon={false}>
        <DatePicker showTime placeholder={"结束时间"} style={{width:200}} />
        </Form.Item>  
        <Form.Item label="订单状态" name="op_mode" >
            <Select
            placeholder="请选择"
            style={{width:100}}
            >
             <Option value="0">全部</Option>
             <Option value="1">进行中</Option>
             <Option value="2">行程结束</Option>
            </Select>
        </Form.Item> 
        <Form.Item>
           <Button type="primary" style={{margin:"0px 20px"}} htmlType='submit'>查询</Button>
           <Button>重置</Button>
        </Form.Item>  
        </Form>
     );
} 