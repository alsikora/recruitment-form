import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App.tsx'
import RecruitmentForm from './pages/RecruitmentForm.tsx';
import Summary from './pages/Summary.tsx';
import NotFound from './pages/NotFound.tsx';
import { config } from './configForm.ts';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound/>,
    element: <App/>,
    children: [
      {
        index: true,
        element: <RecruitmentForm config={config}/>
      },
      {
        path: "summary",
        element: <Summary/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
)
