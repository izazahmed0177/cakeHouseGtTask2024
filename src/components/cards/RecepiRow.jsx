/* eslint-disable react/prop-types */
// import React from 'react'

import axios from "axios";
import toast from "react-hot-toast";
// import { confirmAlert } from "react-confirm-alert";
import { NavLink } from "react-router-dom";
// import Swal from 'sweetalert2';


export default function RecepiRow({recipe}) {



    // const Swal = require('sweetalert2')

    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire({
    //         title: "Deleted!",
    //         text: "Your file has been deleted.",
    //         icon: "success"
    //       });
    //     }
    //   });
    







    const hendleDelete=async()=>{
        //  confirmAlert({
        //  confirm({
        //     title: "Confirm to submit",
        //     message: "Are you sure to do this.",
        //     buttons: [
        //       {
        //         label: "Yes",
        //         onClick: () => {
        //           show()


        //         }
                
        //       },
        //       {
        //         label: "No"
        //         // onClick: () => alert("Click No")
        //       }
        //     ]
        //   });

        // if (confirm({
        //     confirmation: 'Are you sure?'
        //   })) {
        //     console.log('yes');
        //     show();
           
        //   } else {
        //     // console.log('no');
        //     alert("product not delete")
        //   }





        //   const show=async()=>{
        //      const deletRecepi=await axios.delete(`http://localhost:3000/recipes/${recipe.id}`)

        // if (deletRecepi?.status === 200) {
        //     alert("Delete item")
        //   }


        //   }







        //=====================
        const deletRecepi=await axios.delete(`http://localhost:3000/recipes/${recipe.id}`)

        if (deletRecepi?.status === 200) {
            alert("Delete item")
            toast.success('Successfully toasted!')
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
