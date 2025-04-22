import React from 'react';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';

const Home = () => {
  document.title = "TrailerX | Homepage";

  return (
    <div className="w-full h-screen flex overflow-x-hidden">
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        {/* Add the rest of your content here */}
      </div>
    </div>
  );
};

export default Home;
