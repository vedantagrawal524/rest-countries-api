import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export function useCountriesContext() {
  return useContext(CountriesContext);
}
