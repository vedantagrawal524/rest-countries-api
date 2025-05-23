import { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-14 px-6 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((item) => (
        <Country key={item.alpha3Code} country={item} />
      ))}
    </div>
  );
}
