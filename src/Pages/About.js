import React from 'react';
import { Header } from 'antd/lib/layout/layout';

import Footer from '../Components/AppFooter';

import BreadCrumb from '../Components/BreadCrumb';
import AboutMain from '../Components/AboutMain';


const About = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <AboutMain />
      <Footer />
    </div>
  )
}






export default About;
