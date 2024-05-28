// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react"
import RecepiRow from "../../components/cards/RecepiRow";

export default function ManageAllRecipe() {

    const [recipes,setRecipes]=useState()

    useEffect(() => {
        async function allRecipes() {
          const recipesData = await axios.get("http://localhost:3000/recipes");
          if (recipesData?.status === 200) {
            setRecipes(recipesData?.data);
          }
        }
        allRecipes();

      }, [recipes]);





// console.log(recipes);


  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-4xl font-semibold leading-tight text-center">Manage Recipes</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col  />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">ID</th>
					<th className="p-3">Title</th>
					<th className="p-3">Description</th>
					<th className="p-3">Category</th>
					<th className="p-3 text-right">Price</th>
					<th className="p-3 px-5">Action</th>
				</tr>
			</thead>


			<tbody>

            {recipes?.map((recipe) => (
            <RecepiRow key={recipe?.id} recipe={recipe} />
          ))}


			</tbody>
		</table>
	</div>
</div>
  )
}
