import { Link } from "react-router-dom";
import { useCountriesContext } from "../../hooks/useCountriesContext";

export default function BorderCountryProp(props) {
  const { countriesData } = useCountriesContext();

  const codeToName = new Map(countriesData.map((c) => [c.alpha3Code, c.name]));

  return (
    <div className="text-lm-text-grey-950 dark:text-dm-text-white flex w-full flex-col gap-1 text-[1rem] font-[600]">
      Border Countries:
      <div className="flex w-full flex-wrap gap-2">
        {props.borders.map((code) => {
          const borderCountryName = codeToName.get(code);

          return (
            <Link
              key={code}
              to={`/${borderCountryName?.trim().replace(/\s+/g, "-")}`}
              state={{
                country: countriesData.find((c) => c.alpha3Code === code),
              }}
            >
              <div className="bg-lm-ele-white dark:bg-dm-ele-blue-900 flex h-[1.7rem] min-w-[6rem] cursor-pointer items-center justify-center self-center rounded-[0.3rem] px-6 py-0.5 text-[0.95rem] font-[300] drop-shadow-sm hover:opacity-70 dark:opacity-90">
                {borderCountryName || code}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
