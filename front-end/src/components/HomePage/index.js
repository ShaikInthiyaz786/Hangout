import React from 'react'
import CarouselItem from "./Carousel"
import OrderFrom from "./OrderFrom"
import AboutHangout from "./AboutHangout"
import Donations from "./Donations"
import TopDonars from "./TopDonars"
import FoodDelivery from './FoodDelivery'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
    <CarouselItem/>
    <OrderFrom/>
    <AboutHangout/>
    <Donations/>
    <CarouselItem/>
    <FoodDelivery/>
    <Footer/>
    </>
  )
}


export default HomePage