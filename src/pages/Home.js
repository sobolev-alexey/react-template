import React, { useContext } from 'react';
import { Spin, Typography } from 'antd';
import { AppContext } from '../context/globalState';
import { CallToAction, Layout } from '../components';

const { Title } = Typography;

const Home = () => {
  const { loading } = useContext(AppContext);
  
  return (
    <Layout>
      {
        loading ? <Spin size="large" /> : (
          <div className="content-wrapper">
            <Title level={2}>
              Home page
            </Title>
            <div className="cta-wrapper">
              <CallToAction link={'/first'} text="First page" />
              <CallToAction link={'/second'} text="Second page" />
            </div>
          </div>
      )}
    </Layout>
  );
};

export default Home;
