import Country from "./Country";
import { useCountriesContext } from "../../hooks/useCountriesContext";
import { Link } from "react-router-dom";

export default function Countries() {
  const { countries } = useCountriesContext();

  return (
    <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-14 px-6 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((item) => (
        <Link
          key={item.alpha3Code}
          to={`/${item.name.trim().replace(/\s+/g, "-")}`}
          state={{ country: item }}
        >
          <Country country={item} />
        </Link>
      ))}
    </div>
  );
}
