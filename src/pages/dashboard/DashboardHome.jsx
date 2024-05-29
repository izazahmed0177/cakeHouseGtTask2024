// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/cards/CategoryCard";
// import RecepiCardDashbord from "../../components/cards/RecepiCardDashbord";
import RecepiCardDashbordHome from "../../components/cards/RecepiCardDashbordHome";
import UserDetels from "../../components/user/UserDetels";

export default function DashboardHome() {
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



},[recipes])



  return (
    <div>
   <div>
   <UserDetels></UserDetels>
   </div>
   

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>


      <div className="mx-16">
    <h1 className="text-4xl my-20 text-center">Our ALL Recipes </h1>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {recipes ?.reverse()
            ?.slice(0, 6)
            ?.map((recipe) => (
          <RecepiCardDashbordHome key={recipe?.id} recipe={recipe} />
        ))}

     
    </div>
  </div>



    </div>
  )
}
