import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutView from './page/AboutView'
import HomeView from './page/HomeView'
import NotFoundView from './page/NotFoundView'
import { LoginPage } from './page/LoginPage'
import { RegisterPage } from './page/RegisterPage'
import axios from 'axios'
import { useEffect, useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/about',
    element: <AboutView />
  },
  {
    path: '/not-found',
    element: <NotFoundView />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App