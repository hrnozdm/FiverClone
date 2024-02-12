import React from 'react'
import Featured from '../../components/featured/Featured'
import Trusted from '../../components/trusted/Trusted'
import Slider  from '../../components/slider/SimpleSlider'
import Features from '../../components/features/Features'
import ProjectSlider from '../../components/projectSlider/projectSlider'

const Home = () => {
  return (
    <div>
       <Featured/>
       <Trusted/>
       <Slider/>
       <Features/>
       <ProjectSlider/>
      
    </div>
  )
}

export default Home
