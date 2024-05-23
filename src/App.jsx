

import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import router from './routes/routers'
// import HomeContant from './pages/home/HomeContant'


function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
