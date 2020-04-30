import React, { useState } from 'react';
import './Mainpage.scss';
import { Layout } from 'antd';
import Antmenu from '../organisms/Antmenu.js';
import SelectMenu from './SelectMenu';
import Footers from '../organisms/Footer/Footers';
const { Header, Footer, Content } = Layout;
const Mainpage = () => {
  const [menuIdx, setMenuIdx] = useState(0);
  return (
    <Layout>
      <Header>
        <Antmenu func={setMenuIdx} />
      </Header>
      <Layout>
        <Content>
          <SelectMenu menuIdx={menuIdx} />
        </Content>
      </Layout>
      <Footer>
        <Footers />
      </Footer>
    </Layout>
  );
};

export default Mainpage;
