import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Homepage from './components/Homepage.jsx'
import Gate from './components/Gate.jsx'
import Currentaffairs from './components/Currentaffairs.jsx'
import StatePcs from './components/state_ae_je.jsx'
import Practice from './components/Practice.jsx'
import Register_login from './components/Register_login.jsx'
import ContactUs from './components/ContactUs.jsx'
import Login from './components/Login.jsx';

let App = () => {

  let allroutes=createBrowserRouter(
    [
    {
      path:'/', element:<Homepage/>
    },
    {
      path:'Gate',element:<Gate/>
    },
     {
       path:'current_affairs',element:<Currentaffairs/>
     },
    {
      path:'state_ae_je',element:<StatePcs/>
    },
    {
      path:'practice',element:<Practice/>
    },
    {
      path:'Register_Login',element:<Register_login/>
    },
    {
      path:'ContactUs' , element:<ContactUs/>
    },
   {
    path:'Login' , element:<Login/>
   }

      
    ])

return (
    <React.StrictMode>
 <RouterProvider router={allroutes}/>
    </React.StrictMode>   
      );
    }
ReactDOM.createRoot(document.getElementById('root')).render(<App />);