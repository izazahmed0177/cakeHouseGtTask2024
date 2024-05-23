// import React from 'react'

import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import Carousel from "../components/home/Carousel";
import Contents from "../components/home/Contents";
import CountDown from "../components/home/CountDown";
import Features from "../components/home/Features";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <Carousel></Carousel>
    <Banner></Banner>
    <CountDown></CountDown>
    <Contents></Contents>
    <Header></Header>
    <Features></Features>
    <Accordion></Accordion>
      
    </>
  )
}
