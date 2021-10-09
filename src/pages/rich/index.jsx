import React, { useRef } from 'react';
import {Card,Button,Modal} from 'antd'
import ReactWEditor from 'wangeditor-for-react';
export default function App() {
  let editorRef = useRef(null)
return (
    <div>
     <Card title="富文本编辑器">
     <Button onClick={()=>{editorRef.current.editor.txt.clear()}}>清空编辑器</Button>
     <Button onClick={()=>{Modal.info({
         title:"您提交的文本已为您转换成HTML文本",
         content: editorRef.current.editor.txt.html()
     })}}>获取HTML文本</Button>
          <Button onClick={()=>{Modal.info({
         title:"您提交的文本已为您转换成HTML文本",
         content: editorRef.current.editor.txt.text()
     })}}>获取TEXT文本</Button>
        <ReactWEditor
          ref={editorRef}
        />
     </Card>
    </div>
);
}
