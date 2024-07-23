import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Staring from './components/Staring.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      {/* Default route */}
      <Route path='/' element={<Staring />} />
      <Route path='/game' element={<App />} />
      {/* <Route path='/Signup' element={<SignUp />} />
      <Route path='/Login' element={<LogIn />} /> */}



    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)