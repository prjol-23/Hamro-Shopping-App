import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'

import Latest from './components/Latest.jsx'
import Login from './components/Login.jsx'
import Register from './components/Registration.jsx'
import About from './components/About.jsx'
const router =  createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },

  {
    path:"/latest",
    element: <Latest/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/login",
    element: <Login/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/about",
    element: <About/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/register",
    element: <Register/>,
    errorElement:<ErrorPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
