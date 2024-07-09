import React from 'react'
import FormContact from '../../FormContact/FormContact';
import Installation from '../../Installation/Installation';
import Layout from '../../layout/Layout'
const PageContact = () => {
  return (
    <Layout>
    <div>
      <FormContact />
      <Installation/>
    </div>
    </Layout>
  )
}

export default PageContact
