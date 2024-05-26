// import React from 'react'

import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../components/shaerItem/Loading";
import { NavLink, Outlet } from "react-router-dom";
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
    }
  };

  // const handaleLogout=async()=>{

  // const success = await signOut();
  // if (success) {
  //   alert('You are sign out');
  // }

  // let text;
  // if (confirm("Press a button!") == true) {
  //  await signOut();
  //  alert('You are not sign out');
  // } else {
  //   alert('You are not sign out');
  // }

  // // text=await signOut();

  //   }

  // const handaleLogout=async()=> {
  //   confirmAlert({
  //     title: 'Confirm to submit',
  //     message: 'Are you sure to do this.',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: await() => {
  //           signOut();
  //         }
  //       },
  //       {
  //         label: 'No',
  //         onClick: () => alert('Click No')
  //       }
  //     ]
  //   });
  // };

  return (
    //     <div className="drawer">
    //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content">
    //     {/* Page content here */}
    //     <Outlet></Outlet>
    //     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
    //   </div>

    //   <div className="drawer-side">
    //     {/* <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label> */}
    //     <label htmlFor="my-drawer" aria-label=" sidebar" className="drawer-overlay"></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
    //       {/* Sidebar content here */}

    //       <div>
    //             <li>
    //               <NavLink to={"/dashboard/manage-recipes"}>Mangae All Recipes</NavLink>
    //             </li>
    //             <li>
    //               <NavLink to={"/dashboard/add-recipe"}>Add Recipe</NavLink>
    //             </li>
    //           </div>

    //      <div className="flex gap-4">
    //         <NavLink to={"/"} className="btn btn-outline btn-primary">Home</NavLink>
    //         <button onClick={handaleLogout} className="btn btn-outline btn-error">Log Out</button>
    //      </div>

    //     </ul>
    //   </div>
    // </div>

    <div className="grid grid-cols-12">
    
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between"> */}
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <li className="border border-blue-600 p-4 text w-full">
              {/* <Link to={""}>Dashboard</Link> */}
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to={"/dashboard/manage-recipes"}
                className="bg-blue-600"
              >
                Mangae All Recipes
              </NavLink>
            </li>

            <li className="border border-black p-4 text w-full">
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to={"dashboard/all-products"}
                className="bg-blue-600"
              >
                All Recipe
              </NavLink>
            </li>

            <li className="border border-black p-4 text w-full">
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "white",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to={"/dashboard/add-recipe"}
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


      <div className="col-span-10 p-20">
        <Outlet />
      </div>




    </div>
  );
}
