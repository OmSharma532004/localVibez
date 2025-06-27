
//create a Home component
import React from 'react';
import Navbar from '../Components/Common/Navbar';   

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4">This is the home page of our application.</p>
        </div>
    );
}
export default Home;
