/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function RecepiCard({ recipe }) {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 my-5">
	{/* <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
	
           {
              !recipe?.image ?
              <>
              <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

              </>
              :
              <>
              <img src={recipe?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

              </>
            }
    
    <div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			
            <h2 className="text-3xl font-semibold tracking-wide">{recipe?.title}</h2>
            <h2 className="card-title">{recipe?.price} $</h2>
		
            <p className="dark:text-gray-800">
          {
            recipe?.description?.length > 30
            ? recipe?.description?.slice(0, 30)
            : recipe?.description
            }
        </p>

        <div className="card-actions justify-end">
          <div className="badge badge-outline">{recipe?.category}</div>
        </div>



		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
	</div>
</div>
  )
}
