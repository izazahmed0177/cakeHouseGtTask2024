// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
// import { confirmAlert } from "react-confirm-alert";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Swal from 'sweetalert2'

// import ConfirmBox from "react-dialog-confirm";

export default function EditRecipe() {
  const { id } = useParams();

  const [recipeDetails, setRecipeDetails] = useState();

  const [categories, setCategories] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/dashboard/manage-recipes";
 

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

  const handleEditRecipe =(e) => {
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

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        recrpiEdit();
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });


    const recrpiEdit=async()=>{

      const editRecep = await axios.patch(
        `http://localhost:3000/recipes/${id}`,
        recipeData
      );
      //   toast.success('Successfully toasted!')
      if (editRecep?.status === 200) {
        console.log(editRecep);
        // alert("Are you Edit this item");
        toast.success("Successfully Edit Recipe Item");
        navigate(from);
      } else {
        toast.error("Something wrong");
      }
  

    }

  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4 text-center">Edit Recipe</h1>
      {/* <form onSubmit={handleEditRecipe} className="w-full"> */}
      <form onSubmit={handleEditRecipe} className="w-full">
        {/* <div className="mb-4">
        <label htmlFor="">Recipe ID </label>
        <input type="text" name="id" className="w-full py-3 px-5 border " placeholder="Enter Recipe ID" required />
      </div> */}
        <div className="mb-4">
          <label htmlFor="">Recipe Title </label>
          <input
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
            placeholder="Enter Recipe Title"
            defaultValue={recipeDetails?.title}
          />
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
          <textarea
            name="description"
            className="w-full py-3 px-5 border"
            defaultValue={recipeDetails?.description}
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Edit Recipe"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
      {/* <div> */}
      {/* <button onClick={handleClose}>open confirm box</button>
    <ConfirmBox // all props are required
        label={{
          text: "Are you sure you want to delete this element?",
          confirm: "Yes",
          cancel: "No"
        }}
        isOpen={isOpen} // to close or open dialog (true | false)
        onClose={handleClose} // to close or open dialog
        onConfirm={handleConfirm} // return yes : if button yes clicked
        onCancel={handleCancel} // return no : button no clicked
      />
    </div> */}
    </div>
  );
}
