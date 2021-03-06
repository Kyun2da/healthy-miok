import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import './Antmenu.scss';

const Antmenu = ({ func }) => {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item
          key="0"
          onClick={() => {
            func(0);
          }}
        >
          홈
        </Menu.Item>
        <Menu.Item
          key="1"
          onClick={() => {
            func(1);
          }}
        >
          기록보기
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => {
            func(2);
          }}
        >
          그래프보기
        </Menu.Item>
        <Menu.Item
          key="3"
          onClick={() => {
            func(3);
          }}
        >
          달력
        </Menu.Item>
      </Menu>
    </div>
  );
};

Antmenu.propTypes = {
  func: PropTypes.func.isRequired,
};

export default Antmenu;
