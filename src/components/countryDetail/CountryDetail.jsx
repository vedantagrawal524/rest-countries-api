import Header from "../header/Header";
import DetailsMain from "./DetailsMain";
import { useLocation, useParams } from "react-router-dom";
import { useCountriesContext } from "../../hooks/useCountriesContext";
export default function CountryDetail() {
  const location = useLocation();
  const { countryName } = useParams();
  const { countriesData } = useCountriesContext();

  let country = location.state?.country;

  if (!country) {
    const formattedName = countryName.replace(/-/g, " ");
    country = countriesData.find((c) => c.name === formattedName);
  }

  return (
    <div className="font-nunito-sans bg-lm-bg-grey-50 dark:bg-dm-bg-blue-950 flex min-h-screen w-full flex-col text-base">
      <Header />
      {!country ? (
        <p className="mt-10 text-center text-red-500">Country not found.</p>
      ) : (
        <DetailsMain country={country} />
      )}
    </div>
  );
}
