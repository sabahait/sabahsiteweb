
import React from 'react';
import Hero from '../../Hero/Hero';
import Section from '../../Section/Section';
import Offers from '../../Offers/Offers';
import PricingSection from '../../PricingSection/PricingSection';
import Section1 from '../../Section1/Section1';
import Layout from '../../layout/Layout';
import Photochp from '../../Photochp/Photochp'
const MainPage = () => {
  return (
    <Layout>
      <div>
      <Hero />
      <Section />
      <Offers />
      <PricingSection />
      <Photochp/>
      <Section1 />
      </div>
      </Layout>
     
    
  );
};
export default MainPage;