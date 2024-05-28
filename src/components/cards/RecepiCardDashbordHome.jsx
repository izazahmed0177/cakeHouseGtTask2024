/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-router-dom";

export default function RecepiCardDashbordHome({ recipe }) {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 my-5">
    {/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}

    {!recipe?.image ? (
      <>
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
      </>
    ) : (
      <>
        <img
          src={recipe?.image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
      </>
    )}

    {/* <div className="flex flex-col justify-end p-6 space-y-8"> */}
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-wide">
          {recipe?.title}
        </h2>
        <h2 className="card-title">{recipe?.price} $</h2>

        <p className="dark:text-gray-800">
          {recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description}
        </p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end shadow-2xl ">
      <NavLink
        // to={`allrecipedashbord/detailsrecipedashbord/${recipe.id}`}
        to={`detailsrecipedashbord/${recipe.id}`}
        className=" btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
      >
        Details
      </NavLink>

      </div>
      
    </div>
  </div>
  )
}
