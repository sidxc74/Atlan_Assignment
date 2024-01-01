import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import {Layout,Home,PreDefined,History}from './components'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="history" element={<History/>} />
      <Route path="Predefined" element={<PreDefined />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <RouterProvider router={router}>
    
  </RouterProvider>
  </Provider>
)
