import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import MiddleHome from '../MiddleHome/MiddleHome';
import Places from '../Places/Places';
import TopHome from '../TopHome/TopHome';

const Home = () => {
    return (
        <div>
            <TopHome></TopHome>
            <Places></Places>
            <MiddleHome></MiddleHome>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;