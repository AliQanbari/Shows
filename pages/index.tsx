import { GetStaticProps } from 'next';
import { getShows, Show } from 'lib/Show';
import HomeLayout from 'components/HomeLayout';
import ShowCard from 'components/ShowCard';
import React from 'react';
import { Button, Col, Dropdown, Input, Menu, PageHeader, Row } from 'antd';
import { UserOutlined , DownOutlined} from '@ant-design/icons';
import TopSection from 'components/top';

type HomePageProps = {
  data: Show[],
}

export default function Home({ data }: HomePageProps) {
  const size = {xxl:4, lg:8, sm:12};
  const menu = (
    <Menu onClick={()=>{}}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <HomeLayout title={`${data.length} shows`}>
      <TopSection />
      <div className="container mx-auto">
        <div>
        <Row gutter={8}>
        {data.map((show, i) =>
          <Col key={i} {...size} >
            <ShowCard show={show} />
          </Col>
        )}
      </Row>
        </div>
      </div>
      
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  const shows = await getShows();
  return {
    props: { data: shows },
  }
}