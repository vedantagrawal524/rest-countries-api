import Header from "../header/Header";
import DetailsMain from "./DetailsMain";
import { useLocation, useParams } from "react-router-dom";

export default function CountryDetail() {
  const { state } = useLocation();
  const { countryName } = useParams();
  const country = state?.country;

  return (
    <div className="font-nunito-sans bg-lm-bg-grey-50 dark:bg-dm-bg-blue-950 flex min-h-screen w-full flex-col text-base">
      <Header />
      <DetailsMain country={country} />
    </div>
  );
}
