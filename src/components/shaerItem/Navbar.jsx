// import React from 'react';

// import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import toast from "react-hot-toast";
import Swal from 'sweetalert2'


function navbar() {

  // const [user, loading, error] = useAuthState(auth, options);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useAuthState(auth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signOut] = useSignOut(auth);
 

  const handleSignout=async()=>{
    const success=await signOut()
    if (success) {
      // alert("You are sign out!!")

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are sign out!!",
        showConfirmButton: false,
        timer: 1500
      });



      toast.success("You Are Log Out")
      
    }

    return {

    }
  }



    return (
        <div className="navbar relative bg-blue-300 sticky top-0 z-40 " >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                to={"/"}
                >Home</NavLink>
              </li>
              <li>
                <NavLink
                to={"/products"}
                >Our Recipe</NavLink>
              </li>
              <li>
                <NavLink
                to={"/article"}
                >Article</NavLink>
              </li>
              <li>
                <NavLink
                to={"blog"}
                >Blog</NavLink>
              </li>
              <li>
                <NavLink
                to={"contact"}
                >Contact</NavLink>
              </li>





            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

          <li>
                <NavLink
                to={"/"}
                >Home</NavLink>
              </li>
              <li>
                <NavLink
                to={"/products"}
                >Our Recipe</NavLink>
              </li>
              <li>
                <NavLink
                to={"/article"}
                >Article</NavLink>
              </li>
              <li>
                <NavLink
                to={"blog"}
                >Blog</NavLink>
              </li>
              <li>
                <NavLink
                to={"contact"}
                >Contact</NavLink>
              </li>
            



          </ul>
        </div>
        <div className="navbar-end gap-3">
        {
          !user?.email ?
          <>

          
          <NavLink  className={"btn"}
                to={"login"}
                >Login
                
           </NavLink>

            <NavLink  className={"btn"}
                to={"register"}
                >Register
            </NavLink>

          </>
          :

          <>
          
          {/* <NavLink  className={"btn"}
                to={"/profile"}
                >Profile
                
           </NavLink> */}
           <div>
            
            {
              !user?.displayName ?
              <>
              <h2>Avetor</h2>

              </>
              :
              <>
              <h2>{user?.displayName}</h2>

              </>
            }


           </div>

            <NavLink  className={"btn"}
                to={"dashboard"}
                >Dashboard
            </NavLink>

            <button onClick={handleSignout} className="btn">Logout</button>

            <div className="avatar online">
                <div className="w-20 rounded-full">
                     {/* <img src={user?.photoURL} /> */}
                     


                     {
              !user?.photoURL ?
              <>
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

              </>
              :
              <>
              <img src={user?.photoURL} />

              </>
            }




                </div>
              </div>

          </>



        }


          
        </div>
      </div>
    );
}

export default navbar;