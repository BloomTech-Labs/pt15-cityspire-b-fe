import React from 'react';
import { Menu } from 'antd';
import {
  HeartOutlined,
  HomeOutlined,
  PoweroffOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

function RenderMenu(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'right',
      }}
    >
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        theme="dark"
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
}

export default RenderMenu;
