import { createContext, useContext, useState, useEffect } from "react";

export const CountriesContext = createContext();

export default function CountriesContextProvider({ children }) {
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

  const [region, setRegion] = useState(() => {
    return sessionStorage.getItem("region") || "All Regions";
  });

  const [searchQuery, setSearchQuery] = useState(() => {
    return sessionStorage.getItem("searchQuery") || "";
  });

  // Load data from sessionStorage or fetch
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

  // Update filters in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("region", region);
  }, [region]);

  useEffect(() => {
    sessionStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  // Apply filter logic
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

  function filterByRegion(regionName) {
    setRegion(regionName);
  }

  function updateSearchQuery(query) {
    setSearchQuery(query);
  }

  function resetFilter() {
    setRegion("All Regions");
    setSearchQuery("");
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
