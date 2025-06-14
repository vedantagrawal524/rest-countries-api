import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountriesContextProvider from "./context/CountriesContext";

import CountryDetail from "./components/countryDetail/CountryDetail.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CountriesContextProvider>
        <App />
      </CountriesContextProvider>
    ),
  },
  {
    path: "/:countryName",
    element: (
      <CountriesContextProvider>
        <CountryDetail />
      </CountriesContextProvider>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
