import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div>
            <h2>There are tshirts : {tshirts[0]}</h2>
        </div>
    );
};

export default Home;