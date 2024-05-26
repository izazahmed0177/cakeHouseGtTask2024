/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-router-dom";

export default function RecepiRow({recipe}) {
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
            <button className="btn btn-sx btn-error">Delete</button>

    </div>
        {/* <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
           
        </span> */}
    </td>
</tr>
  )
}
