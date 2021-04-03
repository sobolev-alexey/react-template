import React, { useContext } from 'react';
import { Spin, Typography } from 'antd';
import { AppContext } from '../context/globalState';
import { CallToAction, Layout } from '../components';

const { Title } = Typography;

const First = () => {
  const { data, loading } = useContext(AppContext);
  
  return (
    <Layout>
      {
        loading ? <Spin size="large" /> : (
          <div className="content-wrapper">
            <Title level={2}>
              First page
            </Title>
            <div className="cta-wrapper">
              <CallToAction text="Home" />
              <CallToAction link={'/second'} text="Second page" />
            </div>
            <div className="data">
              {JSON.stringify(data, 0, 2)}
            </div>
          </div>
      )}
    </Layout>
  );
};

export default First;
