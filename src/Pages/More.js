import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import Table from '../Components/Table'
import BreadCrumb from '../Components/TokeCrumb';
import Footer from '../Components/AppFooter';
const More= () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Table />
      <Footer />
    </div>
  )
}

export default More;
