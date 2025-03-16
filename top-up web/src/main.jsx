import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DiamondMl from './components/Pages/Diamond/DiamondMl';

const router = createBrowserRouter([
{
    path:"App",
    element:<App/>
},

{
    path:"DiamondMl",
    element:<DiamondMl/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
