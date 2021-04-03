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
              Second page
            </Title>
            <div className="cta-wrapper">
              <CallToAction text="Home" />
              <CallToAction link={'/first'} text="First page" />
            </div>
            <div className="data">
              <img alt={data?.name?.first} src={data?.picture?.large} />
            </div>
          </div>
      )}
    </Layout>
  );
};

export default First;
