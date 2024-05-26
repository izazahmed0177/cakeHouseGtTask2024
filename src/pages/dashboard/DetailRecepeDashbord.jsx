// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailRecepeDashbord() {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState();
    useEffect(()=>{

        async function loadRacipe() {

            const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
            if (recipeData?.status === 200) {
              setRecipeDetails(recipeData?.data);
              console.log(recipeData);
            }
            
        }
        loadRacipe()
    },[])
    console.log(recipeDetails);
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">

    {
              !recipeDetails?.image ?
              <>
              <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

              </>
              :
              <>
              <img src={recipeDetails?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

              </>
            }
    





		{/* <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 bg-gray-500" /> */}
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{recipeDetails?.title}</a>
				<p className="text-xs text-gray-600">
					<a rel="noopener noreferrer" href="#" className="text-1xl hover:underline">Price: {recipeDetails?.price} $$</a>
				</p>
                <p> Category: {recipeDetails?.category}</p>
			</div>
			<div className="text-gray-800">
				<p>{recipeDetails?.description}</p>
			</div>
		</div>
	</div>
</div>
  )
}
