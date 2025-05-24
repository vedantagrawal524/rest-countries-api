import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountriesContextProvider from "./context/CountriesContext";

import CountryDetail from "./components/countryDetail/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/:countryName",
    element: <CountryDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider>
  </StrictMode>,
);
