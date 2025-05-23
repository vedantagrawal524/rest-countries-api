export default function Country(props) {
  return (
    <div className="bg-lm-ele-white dark:bg-dm-ele-blue-900 flex h-[22rem] w-full max-w-[20rem] flex-col place-self-center rounded-[0.4rem] shadow-md">
      <img
        src={props.country.flags.png}
        alt={props.country.name}
        className="h-[45%] w-full rounded-tl-[0.4rem] rounded-tr-[0.4rem] shadow-md"
      />

      <div className="text-lm-text-grey-950 dark:text-dm-text-white flex h-[55%] w-full flex-col gap-3 px-6 pt-5 pb-7">
        <h2 className="w-full text-[1.1rem] leading-5 font-[800]">
          {props.country.name}
        </h2>

        <ul className="flex w-full flex-col gap-1 text-[1rem] font-[600]">
          <li className="w-full leading-5">
            Poplation:{" "}
            <span className="text-[0.95rem] font-[300] dark:opacity-90">
              {props.country.population}
            </span>
          </li>

          <li className="w-full leading-5">
            Region:{" "}
            <span className="text-[0.95rem] font-[300] dark:opacity-90">
              {props.country.region}
            </span>
          </li>

          <li className="w-full leading-5">
            Capital:{" "}
            <span className="text-[0.95rem] font-[300] dark:opacity-90">
              {props.country.capital}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
