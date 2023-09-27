import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';

import ErrorPage from './components/ErrorPage/ErrorPage';

import DonationDetails from './components/DonationDetails/DonationDetails';
import AppliedDonations from './components/AppliedDonation/AppliedDonations';
import MainStatistics from './components/Statistics/MainStatistics';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/donation', 
        element:<AppliedDonations></AppliedDonations>,
        loader: () => fetch('/donation.json') // warning: only load the data you need. do not load all the data
      },
      {
        path: '/statistics', 
        element:<MainStatistics></MainStatistics>,
        loader: () => fetch('/donation.json') // warning: only load the data you need. do not load all the data
      },
      
     
      
      {
        path: '/donation/:id',
        element:<DonationDetails></DonationDetails>, 
        loader: () => fetch('/donation.json') // do not load all data. load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
