// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import RecepiCard from "../../components/cards/RecepiCard";
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
    },[])
  return (
    <div className="mx-16">
    <h1 className="text-4xl my-20 text-center">Our ALL Recipes </h1>
    <div className="grid grid-cols-3 gap-6">
      {recipes
        ?.map((recipe) => (
          <RecepiCardDashbord key={recipe?.id} recipe={recipe} />
        ))}

     
    </div>
  </div>
  )
}
