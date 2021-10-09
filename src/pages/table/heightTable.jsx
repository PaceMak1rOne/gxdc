import React, { useEffect, useState } from 'react'
import { Card, Table,Badge,Modal,message } from 'antd'
import Axios from '../../axios';

const HeightTable = () => {
    let [dataSource, stateDataSource] = useState(null);
    let [dataSource2, stateDataSource2] = useState(null);
    let [dataSource3, stateDataSource3] = useState(null);
    const columns = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "用户名",
            dataIndex: "userName"
        },
        {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex == "1" ? "男" : "女"
            }
        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    "1": "咸鱼一条",
                    "2": "风华浪子",
                    "3": "北大才子",
                    "4": "百度FE",
                    "5": "创业者"
                }
                return config[state]
            }
        },
        {
            title: "爱好",
            dataIndex: "interest",
            render(play) {
                let config = {
                    "1": "游泳",
                    "2": "打篮球",
                    "3": "踢足球",
                    "4": "跑步",
                    "5": "爬山",
                    "6": "七星",
                    "7": "桌球",
                    "8": "麦霸"
                }
                return config[play]
            }
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time"
        }
    ]
    const columns2 = [
        {
            title: "id",
            dataIndex: "id",
            fixed:"left",
            width: 200
        },
        {
            title: "用户名",
            dataIndex: "userName",
            fixed:"left",
            width: 200
        },
        {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex == "1" ? "男" : "女"
            }
        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    "1": "咸鱼一条",
                    "2": "风华浪子",
                    "3": "北大才子",
                    "4": "百度FE",
                    "5": "创业者"
                }
                return config[state]
            }
        },
        {
            title: "爱好",
            dataIndex: "interest",
            render(play) {
                let config = {
                    "1": "游泳",
                    "2": "打篮球",
                    "3": "踢足球",
                    "4": "跑步",
                    "5": "爬山",
                    "6": "七星",
                    "7": "桌球",
                    "8": "麦霸"
                }
                return config[play]
            }
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time",
            fixed:"right",
            width: 150
        }
    ]
    const columns3 = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "用户名",
            dataIndex: "userName"
        },
        {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex == "1" ? "男" : "女"
            }
        },
        {
         title:"年龄",
         dataIndex:"age",
        //  指定这一列通过排序两倆对比进行换位
         sorter: (a, b) => a.age - b.age
        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    "1": "咸鱼一条",
                    "2": "风华浪子",
                    "3": "北大才子",
                    "4": "百度FE",
                    "5": "创业者"
                }
                return config[state]
            }
        },
        {
            title: "爱好",
            dataIndex: "interest",
            render(play) {
                let config = {
                    "1": "游泳",
                    "2": "打篮球",
                    "3": "踢足球",
                    "4": "跑步",
                    "5": "爬山",
                    "6": "七星",
                    "7": "桌球",
                    "8": "麦霸"
                }
                return config[play]
            }
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time"
        }
    ]
    const columns4 = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "用户名",
            dataIndex: "userName"
        },
        {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex == "1" ? "男" : "女"
            }
        },
        {
         title:"年龄",
         dataIndex:"age",
        //  指定这一列通过排序两倆对比进行换位
         sorter: (a, b) => a.age - b.age
        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    "1": "咸鱼一条",
                    "2": "风华浪子",
                    "3": "北大才子",
                    "4": "百度FE",
                    "5": "创业者"
                }
                return config[state]
            }
        },
        {
            title: "按钮功能",
            dataIndex: "interest",
            render(play) {
                let config = {
                    "1":  <Badge status="success" text="成功"/>,
                    "2":<Badge status="success" text="成功"/>,
                    "3": <Badge status="error" text="失败"/>,
                    "4": <Badge status="default" text="正常"/>,
                    "5": <Badge status="processing" text="进行中" />,
                    "6": <Badge status="warning" text="警告" />
                }
                return config[play]
            }
        },
        {
            title: "生日",
            dataIndex: "birthday"
        },
        {
            title: "地址",
            dataIndex: "address"
        },
        {
            title: "早起时间",
            dataIndex: "time"
        },
        {
            title: "操作",
            // 传的值text是当前文本 item是当前这行
           render(text,item){
               return <a onClick={(item)=>{handleDelete(item)}}>删除</a>
           }
        }
    ]
    const data = [ 
        {
            id:'1',
            userName:"Jack",
            sex:'1',
            state:'1',
            interest:'1',
            birthday:'2000-01-01',
            address:'北京市海淀区',
            time:"09:00",
        },
        {
           id:'2',
           userName:"Tom",
           sex:'1',
           state:'1',
           interest:'1',
           birthday:'2000-01-01',
           address:'北京市海淀区',
           time:"09:00", 
       },
       {
           id:'3',
           userName:"Susan",
           sex:'1',
           state:'1',
           interest:'1',
           birthday:'2000-01-01',
           address:'北京市海淀区',
           time:"09:00"
       },
       {
        id:'4',
        userName:"Jack",
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2000-01-01',
        address:'北京市海淀区',
        time:"09:00",
    },
    {
       id:'5',
       userName:"Tom",
       sex:'1',
       state:'1',
       interest:'1',
       birthday:'2000-01-01',
       address:'北京市海淀区',
       time:"09:00", 
   },
   {
       id:'6',
       userName:"Susan",
       sex:'1',
       state:'1',
       interest:'1',
       birthday:'2000-01-01',
       address:'北京市海淀区',
       time:"09:00"
   },
    {
    id:'7',
    userName:"Jack",
    sex:'1',
    state:'1',
    interest:'1',
    birthday:'2000-01-01',
    address:'北京市海淀区',
    time:"09:00",
},
{
   id:'8',
   userName:"Tom",
   sex:'1',
   state:'1',
   interest:'1',
   birthday:'2000-01-01',
   address:'北京市海淀区',
   time:"09:00", 
},
{
   id:'9',
   userName:"Susan",
   sex:'1',
   state:'1',
   interest:'1',
   birthday:'2000-01-01',
   address:'北京市海淀区',
   time:"09:00"
},
{
    id:'10',
    userName:"Jack",
    sex:'1',
    state:'1',
    interest:'1',
    birthday:'2000-01-01',
    address:'北京市海淀区',
    time:"09:00",
}
   ]
   const params ={
    page:1
}
   useEffect(()=>{
    stateDataSource(data);
    stateDataSource2(data);
},[])
useEffect(() => {
    Axios.ajax({
        url:"/table/height/list",
        data:{
            params:{
                page:params.page
            }
        }
    }).then(res=>{
        if(res.code == "0"){
          stateDataSource3(res.result.list);
        }
    })
     },[])
    //  删除操作
   const handleDelete = (item) =>{
        // let id = item.id
        Modal.info({
            title:"确认?",
            content:"确认要删除此条数据吗",
            onOk:()=>{
                message.success("删除成功");
                Axios.ajax({
                    url:"/table/height/list",
                    data:{
                        params:{
                            page:params.page
                        }
                    }
                }).then(res=>{
                    if(res.code == "0"){
                      stateDataSource3(res.result.list);
                    }
                })
            }
        })
        
    }
    return (
        <div style={{ width: "100%" }}>
            <Card title="头部固定表格">
                <Table
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    scroll={{ y: 240 }}
                />
            </Card>
            <Card title="左侧固定表格" style={{ marginTop: 10 }}>
                <Table
                    bordered
                    columns={columns2}
                    dataSource={dataSource2}
                    pagination={false}
                    scroll={{ x: 1600}}
                />
            </Card>
            <Card title="排序表格" style={{ marginTop: 10 }}>
                <Table
                    bordered
                    columns={columns3}
                    dataSource={dataSource3}
                    pagination={false}
                    // scroll={{ x: 1600}} 
                />
            </Card>
            <Card title="操作按钮表格" style={{ marginTop: 10 }}>
                <Table
                    bordered
                    columns={columns4}
                    dataSource={dataSource3}
                    pagination={false}
                    // scroll={{ x: 1600}} 
                />
            </Card>
        </div>
    );
}

export default HeightTable;