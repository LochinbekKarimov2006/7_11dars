import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Create from './components/Create'
import Boockmark from './pages/Boockmark'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          path :"/",
          element:<Home/>
        },
        {
          path:"/+",
          element:<Create/>
        },
        {
          path:"/boockmark",
          element:<Boockmark/>
        }
      ]
    }
  ])
  return (
  <RouterProvider router={router}/>
  )
}

export default App