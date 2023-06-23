import React from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from  './pages/orders/Orders'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import Login from './pages/login/Login'
import Add from './pages/add/Add'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const App = () => {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gigs/123",
          element: <Gig />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
