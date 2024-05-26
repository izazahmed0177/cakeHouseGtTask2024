// import React from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import Loading from "../components/shaerItem/Loading";

// eslint-disable-next-line react/prop-types
export default function PrivateRouter({children}) {

    // const [user, loading, error] = useAuthState(auth, options);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        // return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
        return <Navigate to={'/login'}></Navigate>
    }


  return children;
}
