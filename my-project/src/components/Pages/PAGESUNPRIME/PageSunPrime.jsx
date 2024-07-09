import React from 'react'
import Varvar from '../../Varvar/Varvar'
import Prepared from '../../Prepared/Prepared'
import Sonopal from '../../Sonopal/Sonopal';
import Engagement from '../../Engagement/Engagement';
import StepCard from '../../StepCard/StepCard'
import Layout from '../../layout/Layout'
const PageSunPrime = () => {
  return (
    <Layout>
    <div>
      <Varvar/>
      <Prepared/>
      <Sonopal/>
      <Engagement/>
      <StepCard/>
    </div>
    </Layout>
  )
}

export default PageSunPrime
