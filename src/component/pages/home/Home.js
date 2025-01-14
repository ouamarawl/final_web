import React from 'react';
import './Home.css';
import wiwi from '../../../assets/wail_tr-removebg-preview.png';

function Home() {
  return (
    <div className='home'>
      <div className='enssegnement'>
        <h1>
          Welcome to our platform for learning back-end
        </h1>
        <img src={wiwi} alt="Description of image" />
      </div>
    </div>
  );
}

export default Home;
