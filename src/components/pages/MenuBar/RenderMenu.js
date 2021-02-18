import React, { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HeartOutlined,
  HomeOutlined,
  PoweroffOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

function RenderMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  // const history = useHistory();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'right',
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ backgroundColor: '#491A55', borderColor: 'white' }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        theme="dark"
        inlineCollapsed={collapsed}
        // collapsedWidth='50'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#491A55',
          color: '#EBECF0',
        }}
      >
        <Menu.Item
          key="1"
          icon={
            <HomeOutlined
              style={{
                fontSize: 20,
                padding: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
          onClick={() => {}}
          style={{ padding: 5 }}
        >
          {' '}
          Home{' '}
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={
            <EnvironmentOutlined
              style={{
                fontSize: 20,
                padding: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
          onClick={() => {}}
          style={{ padding: 5 }}
        >
          {' '}
          City Info{' '}
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={
            <HeartOutlined
              style={{
                fontSize: 20,
                padding: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
          onClick={() => {}}
          style={{ padding: 5 }}
        >
          {' '}
          Favorites{' '}
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={
            <PoweroffOutlined
              style={{
                fontSize: 20,
                padding: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
          onClick={() => {
            props.authService.logout();
          }}
          style={{ padding: 5 }}
        >
          {' '}
          Logout{' '}
        </Menu.Item>
      </Menu>
    </div>
  );

  // return (
  //   <div className="menuBar">
  //     <ul className="navList">
  //       <li className="navLink">
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li className="navLink">
  //         <Link to="/login">Login</Link>
  //       </li>
  //       <li className="navLink">
  //         <Button
  //           handleClick={() => props.authService.logout()}
  //           buttonText="Logout"
  //         />
  //       </li>
  //     </ul>
  //   </div>
  // );
}

export default RenderMenu;
