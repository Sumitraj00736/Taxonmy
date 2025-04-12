import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contactus from "./pages/Contactus.jsx";


const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"contact-us",
        element: <Contactus />,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);