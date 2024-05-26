// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function EditRecipe() {

    const { id } = useParams();

    const [recipeDetails, setRecipeDetails] = useState();

    const [categories, setCategories] = useState();

    useEffect(() => {
      async function loadCategoreRecipe() {
        const catagoriData = await axios.get("http://localhost:3000/categories");
        if (catagoriData?.status === 200) {
        //   console.log(catagoriData?.data);
          setCategories(catagoriData?.data);
        }

        const recipeData = await axios.get(`http://localhost:3000/recipes/${id}`);
        if (recipeData?.status === 200) {
          setRecipeDetails(recipeData?.data);
        }




      }
  
      loadCategoreRecipe();
    }, [id]);
  
    const handleEditRecipe = async (e) => {
      e.preventDefault();
  
      const form = e.target;

      const title = form.title.value;
      const price = form.price.value;
      const category = form.category.value;
      const description = form.description.value;
      const recipeData = {
        id,
        title,
        price,
        category,
        description,
      };
  
   const editRecep=   await axios.patch(`http://localhost:3000/recipes/${id}`, recipeData);
    //   toast.success('Successfully toasted!')
    if (editRecep?.status === 200) {
        console.log(editRecep);
        alert("Add item")
        toast.success('Successfully toasted!')
      }
    };


  return (
    <div className="w-full px-16">
    <h1 className="text-4xl mb-4 text-center">Edit Recipe</h1>
    <form onSubmit={handleEditRecipe} className="w-full">
      {/* <div className="mb-4">
        <label htmlFor="">Recipe ID </label>
        <input type="text" name="id" className="w-full py-3 px-5 border " placeholder="Enter Recipe ID" required />
      </div> */}
      <div className="mb-4">
        <label htmlFor="">Recipe Title </label>
        <input type="text" name="title" className="w-full py-3 px-5 border" placeholder="Enter Recipe Title" defaultValue={recipeDetails?.title} />
      </div>

      <div className="mb-4">
        <label htmlFor=""> Recipe Price </label>
        <input
          type="number"
          name="price"
          className="w-full py-3 px-5 border"
          placeholder="Enter Recipe Price"
          defaultValue={recipeDetails?.price}
        />
      </div>
      <div className="mb-4">
        <label htmlFor=""> Image URL </label>
        <input
          type="text"
          name="image"
          className="w-full py-3 px-5 border"
          placeholder="Enter Recipe Image Url"
          defaultValue={recipeDetails?.image}
        />
      </div>


      <div className="mb-4">
        <label htmlFor="">Recipe Cateogry </label>
        <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === recipeDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
      </div>

      <div className="mb-4">
        <label htmlFor="">Description </label>
        <textarea name="description" className="w-full py-3 px-5 border" defaultValue={recipeDetails?.description}/>
      </div>

      <div className="mb-4">
        <input
          type="submit"
          value={"Edit Recipe"}
          className="w-full btn py-3 px-5 border btn-neutral"
        />
      </div>
    </form>
  </div>
  )
}
