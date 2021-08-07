import { GetStaticPaths, GetStaticProps } from "next";
import { getShow, getShowList, Show } from "lib/Show";

export default function ShowPage(show : Show) {
    return (
        <section>
            {JSON.stringify(show)}
        </section>
    );
};

export const getStaticProps : GetStaticProps<Show, {show : string}> = async (context) => {

    if(!context.params?.show) {
        return {
            notFound: true,
        }
    }

    const slug = context.params?.show as string;
    const show = await getShow(slug);

    return {
      props: {...show},
    }
  }

export const getStaticPaths : GetStaticPaths = (context) => {
  return { 
    paths: getShowList().map(d => `/shows/${d}`),
    fallback: false
   };
}