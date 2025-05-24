import Country from "./Country";
import { useCountriesContext } from "../hooks/useCountriesContext";

export default function Countries() {
  const { countries } = useCountriesContext();

  return (
    <div className="xs:grid-cols-2 grid w-full grid-cols-1 gap-14 px-6 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((item) => (
        <Country key={item.alpha3Code} country={item} />
      ))}
    </div>
  );
}
