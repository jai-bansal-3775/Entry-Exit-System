import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEntryPage from "./pages/CreateEntryPage";
import {Provider} from 'react-redux';
import store from "./store/store";

const router=createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/create-entry",
    element: <CreateEntryPage/>
  
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
