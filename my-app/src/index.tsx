import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Schedule } from "./pages/Schedule";
import { PlanningManagement } from "./pages/PlanningManagement";
import { DateSelector } from "./components/planningManagement/BasicDatePicker";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/sign up",
    element: <SignUp />,
  },
  {
    path: "/planning",
    element: <Schedule />,
  },
  {
    path: "/planningManagement",
    element: <PlanningManagement />,
  },
  {
    path: "/test",
    element: <DateSelector />,
  },
]);

root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
