import React from 'react'
import Reviews from '../../Slider/Reviews'
import Layout from '../../layout/Layout'
import Installation from '../../Installation/Installation';
import ClientsSection from '../../ClientSection/ClientSelction';
const Vuepage = () => {
  return (
    <Layout>
    <div>
      <ClientsSection/>
      <Reviews/>
      <Installation/>
    </div>
    
    </Layout>
  )
}

export default Vuepage
