const Utils={
     formDate(time){
        //  debugger
       if(!time)return "";
       let date = new Date(time) ;
       let Y=date.getFullYear();
       let M=date.getMonth()+1>10?(date.getMonth()+1):"0"+(date.getMonth()+1)
       let D=date.getDate()>10?date.getDate():"0"+date.getDate();
       let h=date.getHours()>10?date.getHours():"0"+date.getHours();
       let m=date.getMinutes()>10?date.getMinutes():"0"+date.getMinutes();
       let s=date.getSeconds()>10?date.getSeconds():"0"+date.getSeconds();
       return Y+"-"+M+"-"+D+" "+h+":"+m+":"+s;
     },
     // 接收两个数据一个是data当前的数据
     // callback 当点击下一页时进行回调函数
     // pagination(data,callback){
     //      // 创建一个对象要和官网的一样里面写各种API的
     //      console.log(data)
     //      let page = {
     //           // 使用APIonChange事件
     //           onChange:(current)=>{
     //                // 传入的是当前第几页
     //                // 一旦改变就跳转到这个页数
     //                callback(current) 
     //           },
     //           // 当前页码要根据数据的格式接收
     //           current:data.result.page,
     //           //总共多少页
     //           pageSize:data.result.page_size,
     //           // 总条数
     //           total:data.result.total_count,
     //           // 展示分页
     //           showTotal:()=>{
     //                return `共${data.result.total_count}条` 
     //           },
     //           // 是否进行快速跳转
     //           // showQuickJumper:true
     //      }
     //      return page;
     // }
} 
export default Utils