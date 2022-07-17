import React from 'react';
import { Header } from 'antd/lib/layout/layout';
// import AppHero from '../components/hero';
// import Table from '../components/table';
import MainScreen from '../Components/mainScreen';
import MainBody from '../Components/mainBody';

import Partners from '../Components/Partners';

const Home = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      {/* <Partners /> */}
      <MainBody />
      {/* <Footer /> */}
    </div>
  )
}






export default Home;
