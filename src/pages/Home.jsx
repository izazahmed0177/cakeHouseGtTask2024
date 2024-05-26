// import React from 'react'

import { useEffect, useState } from "react";
import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import Carousel from "../components/home/Carousel";
import Contents from "../components/home/Contents";
import CountDown from "../components/home/CountDown";
import Features from "../components/home/Features";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import axios from "axios";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";

export default function Home() {
  const [recipes,setRecipes]=useState()
  const [categoris, setCategories] = useState();

  useEffect(()=>{

    async function getRecipesCategories() {
     
         // == get recipes=====

        const recipesData = await axios.get('http://localhost:3000/recipes');
        // console.log(recipesData);
        // setRecipes(recipesData?.data);
        if (recipesData?.status === 200) {
          setRecipes(recipesData?.data);
        }
     
      // == get categoris=====

        const categorisData = await axios.get('http://localhost:3000/categories');
        if (categorisData?.status === 200) {
          setCategories(categorisData?.data);
        }
     
    }
    getRecipesCategories();



  },[])


  return (
    <>
    <Hero></Hero>

    <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
        <div className="grid grid-cols-4 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>





    <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}

          {/* {recipes?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))} */}
        </div>
      </div>








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
