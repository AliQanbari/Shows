import { GetStaticProps } from 'next';
import { getShows, Show } from 'lib/Show';
import HomeLayout from 'components/HomeLayout';
import ShowCard from 'components/ShowCard';
import React, { useState } from 'react';
import TopSection from 'components/top';
import { useRouter } from 'next/dist/client/router';

type HomePageProps = {
  data: Show[],
}

export default function Home({ data }: HomePageProps) {
  const router = useRouter();
  const { type } = router.query;
  const [filter, setFilter] = useState('');
  var shows = data.filter((s) => s.name.toLowerCase().indexOf(filter) !== -1);
  if(type !== undefined){
    console.log('type', type);
    shows = shows.filter(s => s.type === type);
  }
  return (
    <HomeLayout title={`${data.length} shows`}>
      <TopSection onSearch={(w) => {
        console.log('filter', w);
          setFilter(w.toLowerCase());
      }} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {shows.map((show, i) =>
            <div className="flex-initial" key={i} >
              <ShowCard show={show} />
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
  const shows = await getShows();
  shows.sort((s1, s2) => s2.score - s1.score);
  return {
    props: { data: shows },
  }
}