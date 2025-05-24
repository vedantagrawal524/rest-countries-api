import { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const CountriesContext = createContext();

export default function CountriesContextProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState([]);

  const [regionsList] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Antarctic",
    "Oceania",
    "All Regions",
  ]);

  // Get from URL or fallback to sessionStorage
  const region =
    searchParams.get("region") ||
    sessionStorage.getItem("region") ||
    "All Regions";
  const searchQuery =
    searchParams.get("search") || sessionStorage.getItem("searchQuery") || "";

  // Load data
  useEffect(() => {
    const sessionData = sessionStorage.getItem("countriesData");

    if (sessionData) {
      const parsedData = JSON.parse(sessionData);
      setCountriesData(parsedData);
      setCountries(parsedData);
    } else {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
          setCountries(data);
          sessionStorage.setItem("countriesData", JSON.stringify(data));
        });
    }
  }, []);

  // Filtering
  useEffect(() => {
    let filtered = countriesData;

    if (region !== "All Regions") {
      filtered = filtered.filter((c) => c.region === region);
    }

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase()),
      );
    }

    setCountries(filtered);
  }, [region, searchQuery, countriesData]);

  // Update region
  function filterByRegion(regionName) {
    const newParams = new URLSearchParams(searchParams);
    if (regionName === "All Regions") {
      newParams.delete("region");
      sessionStorage.removeItem("region");
    } else {
      newParams.set("region", regionName);
      sessionStorage.setItem("region", regionName);
    }
    setSearchParams(newParams);
  }

  // Update search query
  function updateSearchQuery(query) {
    const newParams = new URLSearchParams(searchParams);
    const trimmed = query.trim();

    if (trimmed === "") {
      newParams.delete("search");
      sessionStorage.removeItem("searchQuery");
    } else {
      newParams.set("search", trimmed);
      sessionStorage.setItem("searchQuery", trimmed);
    }
    setSearchParams(newParams);
  }

  function resetFilter() {
    setSearchParams({});
    sessionStorage.removeItem("region");
    sessionStorage.removeItem("searchQuery");
  }

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        countries,
        filterByRegion,
        updateSearchQuery,
        region,
        regionsList,
        searchQuery,
        resetFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
