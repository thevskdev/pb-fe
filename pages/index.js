import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import dynamic from 'next/dynamic';
import { sanityClient } from 'sanity';

const HomePageView = dynamic(
    () => import('src/views/HomePageView/HomePageView'),
    { ssr: false },
);

function HomePage({ data }) {
    return (
        <div>
            <DocumentHeader
                title="Property Bhaijaan"
                description="The most trusted platform to buy or to get advise on property by property bhaijaan"
            />
             <HomePageView data={data} />
        </div>
    );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query)
  if (properties.length) {
    return {
      props: {
       data : {
         properties
       } 
      },
    }
  }
}

export default HomePage;
