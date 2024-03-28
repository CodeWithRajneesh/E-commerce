import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
// import Form from './components/Form';
import Layout from './Layout';
import { Auth0Provider } from '@auth0/auth0-react';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} >
    {/* <Route path="User" element={<Form />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root'))

  .render(
    <Auth0Provider
    domain="dev-gqki6eduqwuhu0a2.us.auth0.com"
    clientId="BUMhF3QlsqUxXgBhqcmfGq1tBUfuieWl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>,
    
  )
