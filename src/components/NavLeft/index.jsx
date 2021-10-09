import React, { useState } from 'react'
import { Menu } from 'antd';
import "./index.less"
import menuList from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
//菜单渲染
function renderMenu(data) {
    // console.log(this)
    return data.map(item => {                                                                                                                                                                                                                                                                                                                                                                                                                                    
        if (item.children) {
            return (
                <SubMenu title={item.title} key={item.key}>
                    {renderMenu(item.children)}
                </SubMenu>
            )
        }
        return <Menu.Item  title={item.title} key={item.key}>
           <NavLink to={item.key}> {item.title}</NavLink>
             </Menu.Item>
    })
}
const NavLeft = () => {
    // console.log("NavLeft this",this)
    const [menuTreeNode] = useState( renderMenu(menuList));
    return (
        <div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark" mode="vertical">
                  { menuTreeNode }
            </Menu>
        </div>
    );

}

export default NavLeft;