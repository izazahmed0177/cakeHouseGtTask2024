// import React from 'react'

import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/shaerItem/Loading";
import { NavLink, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
// import { confirmAlert } from "react-confirm-alert";

export default function DashbaordLayouts() {
  const [signOut, loading, error] = useSignOut(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const handaleLogout = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
      toast.error("You are sign out")
    }
  };

  

  return (
  

    <div className="grid grid-cols-12    ">
    
      <div className="md:col-span-2 col-span-4 bg-gray-300 min-h-screen p-12">
      {/* <div className="col-span-2 bg-gray-300  min-h-screen p-12 sticky top-0 z-40  "> */}
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between"> */}
        {/* <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content flex flex-col justify-between"> */}
        <ul className="menu p-4 w-60 min-h-full  bg-base-200 text-base-content flex flex-col justify-between">
          <div>

          <li className="border border-black p-4 text w-full">
              <NavLink
                // style={({ isActive, isPending, isTransitioning }) => {
                //   return {
                //     fontWeight: isActive ? "bold" : "",
                //     color: isPending ? "red" : "white",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                //   };
                // }}
                to={`/dashboard`}
                className="bg-blue-600"
              >
                Dashboard Home
              </NavLink>
            </li>

            <li className="border border-blue-600 p-4 text w-full">
              {/* <Link to={""}>Dashboard</Link> */}
              <NavLink
                // style={({ isActive, isPending, isTransitioning }) => {
                //   return {
                //     fontWeight: isActive ? "bold" : "",
                //     color: isPending ? "red" : "white",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                //   };
                // }}
                to={`/dashboard/manage-recipes`}
                className="bg-blue-600"
              >
                Mangae All Recipes
              </NavLink>
            </li>

            <li className="border border-black p-4 text w-full">
              <NavLink
                // style={({ isActive, isPending, isTransitioning }) => {
                //   return {
                //     fontWeight: isActive ? "bold" : "",
                //     color: isPending ? "red" : "white",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                //   };
                // }}
                to={`/dashboard/allrecipedashbord`}
                className="bg-blue-600"
              >
                All Recipe
              </NavLink>
            </li>

            <li className="border border-black p-4 text w-full">
              <NavLink
                // style={({ isActive, isPending, isTransitioning }) => {
                //   return {
                //     fontWeight: isActive ? "bold" : "",
                //     color: isPending ? "red" : "white",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                //   };
                // }}
                to={`/dashboard/add-recipe`}
                className="bg-blue-600"
              >
                Add Recipe
              </NavLink>
            </li>


          </div>

                  {/* <li className="border border-black p-4 text w-full">
               <NavLink to={"/"}>Home</NavLink>
                   </li> */}

          <div className="flex gap-4">
            <NavLink to={"/"} className="btn btn-outline btn-primary">
              Home
            </NavLink>
            <button
              onClick={handaleLogout}
              className="btn btn-outline btn-error"
            >
              Log Out
            </button>
          </div>
        </ul>
      </div>



      <div className="md:col-span-10 col-span-8 p-20  md:content-center content-end md:items-center items-end  ">
        <Outlet />
      </div>




    </div>
  );
}
