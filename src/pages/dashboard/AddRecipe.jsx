// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function AddRecipe() {

    const [categories, setCategories] = useState();

    useEffect(() => {
      async function loadCategore() {
        const catagoriData = await axios.get("http://localhost:3000/categories");
        if (catagoriData?.status === 200) {
        //   console.log(catagoriData?.data);
          setCategories(catagoriData?.data);
        }
      }
  
      loadCategore();
    }, []);
  
    const handleCreateRecipe = async (e) => {
      e.preventDefault();
  
      const form = e.target;
  
      const id = form.id.value;
      const title = form.title.value;
      const price = form.price.value;
      const category = form.category.value;
      const description = form.description.value;
      const image=form.image.value;
      const recipeData = {
        id,
        title,
        price,
        category,
        description,
        image,
      };
  
      await axios.post("http://localhost:3000/recipes", recipeData);

      form.reset();
    };



  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4 text-center">Add Recipe</h1>
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Recipe ID </label>
          <input type="text" name="id" className="w-full py-3 px-5 border " placeholder="Enter Recipe ID" required />
        </div>
        <div className="mb-4">
          <label htmlFor="">Recipe Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" placeholder="Enter Recipe Title" required />
        </div>

        <div className="mb-4">
          <label htmlFor=""> Recipe Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
            placeholder="Enter Recipe Price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor=""> Image URL </label>
          <input
            type="text"
            name="image"
            className="w-full py-3 px-5 border"
            placeholder="Enter Recipe Image Url"
            required
          />
        </div>


        <div className="mb-4">
          <label htmlFor="">Recipe Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border" required>
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" required/>
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  )
}
