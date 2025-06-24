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

  const initialVisibleCount =
    Number(sessionStorage.getItem("visibleCount")) || 20;

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  function loadMoreCountries() {
    setVisibleCount((prev) => {
      const newCount = prev + 20;
      sessionStorage.setItem("visibleCount", newCount);
      return newCount;
    });
  }

  const visibleCountries = countries.slice(0, visibleCount);

  // Get from URL or fallback to sessionStorage
  const region =
    searchParams.get("region") ||
    sessionStorage.getItem("region") ||
    "All Regions";
  const searchQuery =
    searchParams.get("search") || sessionStorage.getItem("searchQuery") || "";

  const env = import.meta.env;
  // Load data
  useEffect(() => {
    const sessionData = sessionStorage.getItem("countriesData");

    if (sessionData) {
      const parsedData = JSON.parse(sessionData);
      setCountriesData(parsedData);
      setCountries(parsedData);
    } else {
      fetch(env.VITE_API_BASE_URL)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch countries");
          return res.json();
        })
        .then((data) => {
          setCountriesData(data);
          setCountries(data);
          sessionStorage.setItem("countriesData", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching countries from backend:", err);
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
    sessionStorage.setItem("visibleCount", 20);
    setVisibleCount(20);
  }

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        countries: visibleCountries,
        filterByRegion,
        updateSearchQuery,
        region,
        regionsList,
        searchQuery,
        resetFilter,
        loadMoreCountries,
        hasMore: countries.length > visibleCount,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
