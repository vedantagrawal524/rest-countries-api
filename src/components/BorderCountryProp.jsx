import { useCountriesContext } from "../hooks/useCountriesContext";

export default function BorderCountryProp(props) {
  const { countriesData } = useCountriesContext(); // get full country list

  // Create a lookup map for alpha3Code to name
  const codeToName = new Map(countriesData.map((c) => [c.alpha3Code, c.name]));

  return (
    <div className="text-lm-text-grey-950 dark:text-dm-text-white flex w-full flex-col gap-1 text-[1rem] font-[600]">
      Border Countries:{" "}
      <div className="flex w-full flex-wrap gap-2">
        {props.borders.map((code) => (
          <div
            key={code}
            className="bg-lm-ele-white dark:bg-dm-ele-blue-900 flex h-[1.7rem] min-w-[6rem] cursor-pointer items-center justify-center self-center rounded-[0.3rem] px-6 py-0.5 text-[0.95rem] font-[300] drop-shadow-sm dark:opacity-90"
          >
            {codeToName.get(code) || code}
          </div>
        ))}
      </div>
    </div>
  );
}
