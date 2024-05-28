// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
// import RecepiCard from "../../components/cards/RecepiCard";
import RecepiCardDashbord from "../../components/cards/RecepiCardDashbord";

export default function AllRecipeDashboard() {
    const [recipes,setRecipes]=useState()

    useEffect(()=>{
  
      async function getAllRecipes() {
        const recipesData = await axios.get('http://localhost:3000/recipes');
        if (recipesData?.status === 200) {
          setRecipes(recipesData?.data);
        }
        
      }
  
      getAllRecipes();
    },[recipes])
  return (
    <div className="md:mx-16 mx-4">
    <h1 className="text-4xl my-20 md:text-center text-end">Our ALL Recipes </h1>
    {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:content-center content-end md:items-center items-end shadow-2xl"> */}
    {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:content-center content-end md:items-center items-end shadow-2xl"> */}
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {recipes
        ?.map((recipe) => (
          <RecepiCardDashbord key={recipe?.id} recipe={recipe} />
        ))}

     
    </div>
  </div>
  )
}
