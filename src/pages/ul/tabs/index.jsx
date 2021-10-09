import React,{useState} from 'react'
import {Card , Tabs , message} from 'antd'
import '../ui.less'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
const Tasbs = () => {
   let newTabIndex = 0;
    const initialPanes = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
          title: 'Tab 3',
          content: 'Content of Tab 3',
          key: '3',
        },
      ];
    let [activeKey,setActiveKey] = useState(initialPanes[0].key);
    let [ panes , setPanes] = useState(initialPanes);
    function callback(key) {
        message.info('你点击了Tab ' + key)
    }
    function onChange (activeKey) {
        setActiveKey( activeKey );
      };
    
     function onEdit(targetKey, action){
        if(action=='remove'){
            remove(targetKey)
        }else{
            add(targetKey)
        }
      };
     function add(){
        const activeKey = `newTab${newTabIndex++}`;
        const newPanes = [...panes];
        newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        setActiveKey(activeKey);
        setPanes(newPanes)
      };
     function remove (targetKey){
        let newActiveKey = activeKey;
        let lastIndex;
        panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const newPanes = panes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
          if (lastIndex >= 0) {
            newActiveKey = newPanes[lastIndex].key;
          } else {
            newActiveKey = newPanes[0].key;
          }
        }
        setActiveKey(newActiveKey);
        setPanes(newPanes)
    }
    const { TabPane } = Tabs;
    return ( 
        <div style={{width:"100%"}}>
    <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Tab 1" key="1">
               好好学习
              </TabPane>
              <TabPane tab="Tab 2"  key="2">
               天天向上
              </TabPane>
              <TabPane tab="Tab 3" disabled  key="3">
                  高薪就业
              </TabPane>
          </Tabs>
            </Card>
    <Card title="Tab带图的页签" className="card-wrap">
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab={ <span>  <AppleOutlined />  Tab 1 </span> } key="1" >好好学习</TabPane>
    <TabPane tab={ <span> <AndroidOutlined />  Tab 2 </span> } key="2" >天天向上</TabPane>
    </Tabs>
            </Card>
            <Card title="动态Tab页签" className="card-wrap">
            <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
            </Card>
        </div>
     );
}
 
export default Tasbs;