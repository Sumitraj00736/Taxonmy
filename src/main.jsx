import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Contactus from "./pages/Contactus.jsx";
import CompanyRegistration from "./pages/CompanyRegistration.jsx";
import Expandingintoindia from "./pages/Expandingintoindia.jsx";
import VirtualOffice from "./pages/VirtualOffice.jsx";
import Pricising from "./pages/Pricising.jsx";


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
      },
      {
        path:"register-company",
        element: <CompanyRegistration />,
      },
      {
        path:"expanding-into-india",
        element: <Expandingintoindia/>,
      },
      {
        path:"virtual-office",
        element: <VirtualOffice/>,
      },
      {
        path:"pricing",
        element: <Pricising/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);