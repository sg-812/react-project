import React from 'react'
import ButtonComponent from './components/ButtonComponent'
import Header from './components/Header'
import CarouselSlide from './components/Carousel/CarouselSlide'
import Cards from './components/CardComponent'

const App = () => {
  return (
    <div>
      <Header/>
      <ButtonComponent/>
      <CarouselSlide/>
      <Cards/>
    </div>
  )
}

export default App