import CountryDetailProp from "./CountryDetailProp";
import BorderCountryProp from "./BorderCountryProp";

export default function DetailsMain(props) {
  return (
    <main className="xxs:px-7 xs:px-8 flex w-full flex-col gap-14 px-5 py-5 pb-12 md:px-10 lg:px-12 xl:px-14">
      <button className="text-lm-text-grey-950 dark:text-dm-text-white bg-lm-ele-white dark:bg-dm-ele-blue-900 mt-4 flex w-fit cursor-pointer flex-row items-center justify-center gap-1 rounded-[0.4rem] px-8 py-1.5 text-[0.85rem] font-[500] drop-shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          className="h-auto w-4"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="50"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
        Back
      </button>
      <article className="xs:gap-16 flex w-full flex-col gap-10 px-4 lg:flex-row lg:justify-center xl:gap-30 xl:px-6">
        <img
          src={props.country.flags.svg}
          alt={props.country.name}
          className="h-auto w-full max-w-[30rem] rounded-[0.4rem] shadow-md"
        />
        <div className="flex w-full max-w-[32rem] flex-col gap-4">
          <h2 className="text-lm-text-grey-950 dark:text-dm-text-white w-full text-[2.2rem] font-[800]">
            {props.country.name}
          </h2>

          <div className="xs:flex-row mb-6 flex w-full flex-col justify-between gap-10 lg:flex-col xl:flex-row">
            <div className="flex flex-col gap-1.5">
              <CountryDetailProp
                property="Native Name"
                value={props.country.nativeName}
              />
              <CountryDetailProp
                property="Poplation"
                value={props.country.population.toLocaleString()}
              />
              <CountryDetailProp
                property="Region"
                value={props.country.region}
              />
              <CountryDetailProp
                property="Sub Region"
                value={props.country.subregion}
              />
              <CountryDetailProp
                property="Capital"
                value={props.country.capital}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <CountryDetailProp
                property="Top Level Domain"
                value={props.country.topLevelDomain}
              />{" "}
              <CountryDetailProp
                property="Currencies"
                value={props.country.currencies.map((curr) => curr.name)}
              />
              <CountryDetailProp
                property="Languages"
                value={props.country.languages.map((lang) => lang.name)}
              />
            </div>
          </div>
          <BorderCountryProp borders={props.country.borders} />
        </div>
      </article>
    </main>
  );
}
