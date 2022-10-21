import DocumentHeader from '@components/DocumentHeader/DocumentHeader';
import dynamic from 'next/dynamic';

const HomePageView = dynamic(
    () => import('src/views/HomePageView/HomePageView'),
    { ssr: false },
);

function HomePage() {
    return (
        <div>
            <DocumentHeader
                title="Property Bhaijaan"
                description="The most trusted platform to buy or to get advise on property by property bhaijaan"
            />
             <HomePageView />
        </div>
    );
}

export default HomePage;
