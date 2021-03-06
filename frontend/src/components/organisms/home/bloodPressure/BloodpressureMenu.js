import React from 'react';
import { Menu } from 'antd';
const BloodpressureMenu = (props) => {
  const { func } = props;
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item
          key="0"
          onClick={() => {
            func(0);
          }}
        >
          혈압등록
        </Menu.Item>
        <Menu.Item
          key="1"
          onClick={() => {
            func(1);
          }}
        >
          혈압기록
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            func(2);
          }}
        >
          그래프
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default BloodpressureMenu;
