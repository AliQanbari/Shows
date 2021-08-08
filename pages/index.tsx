import { GetStaticProps } from 'next';
import { getShows, Show } from 'lib/Show';
import HomeLayout from 'components/HomeLayout';
import ShowCard from 'components/ShowCard';
import React from 'react';
import { Button, Col, Dropdown, Input, Menu, PageHeader, Row } from 'antd';
import { UserOutlined , DownOutlined} from '@ant-design/icons';

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
      <PageHeader
      title="Aligator Shows"
      subTitle="Aligator's Show watch list"
      ghost={false}
      extra={<>
        <Dropdown overlay={menu}>
      <Button>
        Button <DownOutlined />
      </Button>
    </Dropdown>
        <Input.Search />
      </>}
  />
      <Row gutter={8}>
        {data.map(show =>
          <Col {...size} >
            <ShowCard show={show} />
          </Col>
        )}
      </Row>
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  const shows = await getShows();
  return {
    props: { data: shows },
  }
}