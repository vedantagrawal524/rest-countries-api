import CountryDetailProp from "../countryDetail/CountryDetailProp";

export default function Country(props) {
  return (
    <div className="bg-lm-ele-white dark:bg-dm-ele-blue-900 group flex h-[22rem] w-full max-w-[20rem] flex-col place-self-center rounded-[0.4rem] shadow-md hover:shadow-2xl">
      <img
        src={props.country.flags.png}
        alt={props.country.name}
        className="h-[45%] w-full rounded-tl-[0.4rem] rounded-tr-[0.4rem] shadow-md"
      />

      <div className="text-lm-text-grey-950 dark:text-dm-text-white flex h-[55%] w-full flex-col gap-3 px-6 pt-5 pb-7">
        <h2 className="w-full text-[1.1rem] leading-5 font-[800] group-hover:text-[1.2rem] group-hover:font-[900]">
          {props.country.name}
        </h2>

        <ul className="flex w-full flex-col gap-1">
          <CountryDetailProp
            property="Poplation"
            value={props.country.population.toLocaleString()}
          />
          <CountryDetailProp property="Region" value={props.country.region} />
          <CountryDetailProp
            property="Capital"
            value={
              props.country.capital?.length
                ? props.country.capital
                : props.country.name
            }
          />
        </ul>
      </div>
    </div>
  );
}
