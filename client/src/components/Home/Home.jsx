import React from 'react'
import Cards from '../../components/Cards/Cards'
// import Filters from '../../components/Filters/Filters'
import { HomeSection } from './Home.styles'

const Home = () => {
  return (
    <HomeSection>
        {/* <Filters /> */}
        <Cards />
    </HomeSection>
  )
}

export default Home