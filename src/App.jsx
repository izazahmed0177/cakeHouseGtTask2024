

import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import router from './routes/routers'
// import HomeContant from './pages/home/HomeContant'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </>
  )
}

export default App
