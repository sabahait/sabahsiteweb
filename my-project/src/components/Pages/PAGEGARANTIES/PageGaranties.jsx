import React from 'react'
import GarFooter from '../../Gar-Footer/Gar-Footer'
import TechniciansSection from '../../TechniciansSection/TechniciansSection';
import ExempleGar from '../../ExempleGar/ExempleGar';
import SolarInstallation from '../../SolarInstallation/SolarInstallation'
import SolarInstallation1 from '../../SolarInstallation1/SolarInstallation1';
import ProjectSection from '../../ProjectSection/ProjectSection';
import Installation from '../../Installation/Installation';
import FAQSection from '../../FAQSection/FAQSection';
import Layout from '../../layout/Layout'
const PageGaranties = () => {
  return (
    <Layout>
    <div>
        <GarFooter/>
        <TechniciansSection/>
        <ExempleGar/>
        <SolarInstallation/>
        <SolarInstallation1/>
        <ProjectSection/>
        <Installation/>
        <FAQSection/>
    </div>
    </Layout>
  )
}

export default PageGaranties
