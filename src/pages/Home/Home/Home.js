import React from 'react';
import ClientReview from '../ClientReview/ClientReview';
import Places from '../Places/Places';
import TopHome from '../TopHome/TopHome';

const Home = () => {
    return (
        <div>
            <TopHome></TopHome>
            <Places></Places>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;