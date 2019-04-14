import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { GlobalStyles, Wrapper } from './styles';
import Table from './table';

const pages = [{ name: 'Table', component: Table }];

const App = () => {
  const [page, setPage] = useState(0);
  const Component = pages[page].component;
  return (
    <Layout>
      <GlobalStyles />
      <Layout.Header>
        <Wrapper>
          <Menu theme="dark" mode="horizontal" selectedKeys={[String(page)]} style={{ lineHeight: '64px' }}>
            {pages.map(({ name }, index) => (
              <Menu.Item key={index} onClick={() => setPage(index)} children={name} />
            ))}
          </Menu>
        </Wrapper>
      </Layout.Header>
      <Layout.Content>
        <Wrapper>
          <Component />
        </Wrapper>
      </Layout.Content>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
