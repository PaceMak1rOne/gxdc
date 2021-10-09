import React,{useEffect,useState} from 'react'
import {Card,Table,Modal,Button,message,Pagination} from 'antd'
import Axios from '../../axios';
// import Utils from '../../Utils/utils';
// const { Column, ColumnGroup } = Table;
const BasicTable = () => {
     let [dataSource,stateDataSource] = useState(null);
     let [dataSource2,stateDataSource2] = useState(null);
     let [select,setSelect] = useState({
         selectRowKeys:[],
         selectItem:[]
     });
    //  let []
    const params ={
        page:1
    }
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
        }
    ]
    data.map((value,index)=>{
        value.key=index
    })
    useEffect(()=>{
        stateDataSource(data)
    },[])
    const columns = [
        {
            title:"id",
            dataIndex:"id"
        },
        {
            title:"用户名",
            dataIndex:"userName"
        },
        {
            title:"性别",
            dataIndex:"sex",
            render(sex){
                return sex == "1" ?"男":"女"
            }
        },
        {
            title:"状态",
            dataIndex:"state",
            render(state){
                let config = {
                    "1":"咸鱼一条",
                    "2":"风华浪子",
                    "3":"北大才子",
                    "4":"百度FE",
                    "5":"创业者"
                }
                return config[state]
            }
        },
        {
            title:"爱好",
            dataIndex:"interest",
            render(play){
                let config = {
                    "1":"游泳",
                    "2":"打篮球",
                    "3":"踢足球",
                    "4":"跑步",
                    "5":"爬山",
                    "6":"七星",
                    "7":"桌球",
                    "8":"麦霸"
                }
                return config[play]
            }
        },
        {
            title:"生日",
            dataIndex:"birthday"
        },
        {
            title:"地址",
            dataIndex:"address"
        },
        {
            title:"早起时间",
            dataIndex:"time"
        }
    ]
    //动态获取Mock数据
    useEffect(()=>{
      Axios.ajax({
          url:"/table/list",
          data:{
              params:{
                  page:params.page
              }
          }
      }).then(res=>{
          if(res.code == "0"){
            stateDataSource2(res.result.list);
          }
      })
       },[])
        const onRowClick = (record,index) =>{
        //    获取index索引
       let selectKey = [index];
       Modal.info({
           title:"信息",
           content:`用户名:${record.userName},用户地址:${record.address}`
       })
    //    console.log(selectKey)
        setSelect({...select,selectRowKeys:selectKey,selectItem:record});
       }
       //单选表格
       const selectRowKeys = select.selectRowKeys;
       const rowSelection = {
           type:"radio", 
           selectedRowKeys:selectRowKeys   
       }
       const rowCheckSelection = {
           type:"checkbox",
           selectedRowKeys:selectRowKeys,
           onChange : (selectKey,selectedRows) =>{
            let ids = [];
            selectedRows.map(value=>{
                ids.push(value.id)
            })
            setSelect({...select,selectRowKeys:selectKey});
           }   
       }
       //复选删除方法
    //    let { selectItem } = select;
       const handleDelete = () =>{
        //    先定义哪行 删除是根据ID来定义的所以要用push
        let rows = select.selectRowKeys;
        let ids = [];
        rows.map(value=>{
             ids.push(value.id)
        })
        Modal.info({
            title:"删除提示",
            content:`您确定要删除这些数据吗?${ids.join(",")} `,
            onOk:()=>{
                message.success("删除成功");
                Axios.ajax({
                    url:"/table/list",
                    data:{
                        params:{
                            page:1
                        }
                    }
                }).then(res=>{
                    if(res.code == "0"){
                      stateDataSource2(res.result.list);
                      setSelect({...select,selectRowKeys:[],selectItem:null});
                    }
                })
            }
        })
       }
       //分页
       let useFenye=(()=>{
        let [fenyeTable,setFenyeTable]=useState({
          page:1,
          list:[]
        })
        useEffect(()=>{
            Axios.ajax({
                url:"/table/list",
                data:{
                    params:{
                        page:params.page
                    }
                }
            })
          .then(res=>{
            if(res.code == "0"){
              setFenyeTable({page:res.result.page,list:res.result.list})
              stateDataSource2(res.result.list);
              setSelect({...select,selectRowKeys:[],selectItem:null});
            }
          })
        },[fenyeTable.page])
        function onChangePage(pageNumber) {
          setFenyeTable({...fenyeTable,page:pageNumber})
        //   console.log('Page: ', pageNumber);
        }
        return {
          onChangePage,
          fenyeTable
        }
      })
    
      let {onChangePage,fenyeTable}=useFenye();
    return (
        <div style={{width:"100%"}}>
            <Card title="基础表格">
                <Table
                bordered
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                />
            </Card>
            <Card title="动态渲染表格" style={{marginTop:10}}>
                <Table
                bordered
                columns={columns}
                dataSource={dataSource2}
                pagination={false}
                />
            </Card>
            <Card title="Mock-单选表格" style={{marginTop:10}}>
            <Table
                bordered
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource2}
                pagination={false}
                onRow={(record,index) => {
                    return {
                      onClick: () => {
                        //   alert()
                          onRowClick(record,index)
                      }, // 点击行
                      
                    };
                }}
                />
            </Card>
            <Card title="Mock-复选表格" style={{marginTop:10}}>
                <Button onClick={()=>handleDelete()}>
                    删除
                </Button>
            <Table
                bordered
                rowSelection={rowCheckSelection}
                columns={columns}
                dataSource={dataSource2}
                pagination={false}
                />
            </Card>
            <Card title="Mock-分页表格" style={{marginTop:10}}>
            <Table
                bordered
                columns={columns}
                dataSource={dataSource2}
                pagination={false}
                />
                 <Pagination showQuickJumper defaultCurrent={1} total={100} onChange={onChangePage} />
            </Card>
        </div>
     );
}
 
export default BasicTable;
