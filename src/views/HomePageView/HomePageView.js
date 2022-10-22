import HomePageContainer from '@containers/HomePage/HomePageContainer';
import React from 'react';

const HomePageView = ({data}) => {
    console.log("data",data)
    return (
       <HomePageContainer />
    );
}

export default HomePageView;
