// import React from 'react'

import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

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
        return <p>Loading...</p>;
      }




    const handaleLogout=async()=>{

        const success = await signOut();
        if (success) {
          alert('You are sign out');
        }

    }


  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
      {/* Sidebar content here */}
     
     <div>
     <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
     </div>

     <div>
        <button onClick={handaleLogout} className="btn">Log Out</button>
     </div>



  
      
    </ul>
  </div>
</div>
  )
}
