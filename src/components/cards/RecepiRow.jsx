/* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios";
import toast from "react-hot-toast";
// import { confirmAlert } from "react-confirm-alert";
import { NavLink } from "react-router-dom";
// import Swal from 'sweetalert2';


export default function RecepiRow({recipe}) {

    







    const hendleDelete=async()=>{
      
        //   }

        //=====================
        const deletRecepi=await axios.delete(`http://localhost:3000/recipes/${recipe.id}`)

        if (deletRecepi?.status === 200) {
            alert("Are you Delete this item")
        toast.success('Successfully Delete Recipe Item')
          }else{
            toast.error("Something wrong")
          }
        

    }




  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
    <td className="p-3">
        <p>{recipe?.id}</p>
    </td>
    <td className="p-3">
        <p>{recipe?.title}</p>
    </td>
    <td className="p-3">
      
        <p className="dark:text-gray-600">{recipe?.description}</p>
    </td>
    <td className="p-3">
        
        <p className="dark:text-gray-600">{recipe?.category}</p>
    </td>
    <td className="p-3 text-right">
        <p>{recipe?.price}</p>
    </td>

    <td className="p-3 text-right">

    <div className="flex gap-2">
    <NavLink to={`/dashboard/edit-recipe/${recipe?.id}` } className="btn btn-sx btn-neutral">Edit</NavLink>
            <button onClick={hendleDelete} className="btn btn-sx btn-error">Delete</button>

    </div>
        {/* <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
           
        </span> */}
    </td>
</tr>
  )
}
