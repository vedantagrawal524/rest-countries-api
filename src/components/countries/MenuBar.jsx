import { useState } from "react";
import { useCountriesContext } from "../../hooks/useCountriesContext";

export default function MenuBar() {
  const {
    filterByRegion,
    region,
    regionsList,
    searchQuery,
    updateSearchQuery,
  } = useCountriesContext();
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu((prev) => !prev);
  };

  return (
    <div className="xs:flex-row xs:justify-between xs:items-center flex w-full flex-col justify-center gap-7">
      <fieldset className="relative flex w-full drop-shadow-sm">
        <input
          autoComplete="true"
          type="text"
          value={searchQuery}
          onChange={(e) => updateSearchQuery(e.target.value)}
          name="searchBar"
          id="searchBar"
          className="bg-lm-ele-white dark:bg-dm-ele-blue-900 dark:text-dm-text-white text-lm-input-grey-400 placeholder:text-lm-input-grey-400/60 outline-lm-input-grey-400 dark:placeholder:text-dm-text-white/60 h-[3rem] w-full max-w-[22rem] rounded-[0.4rem] px-[3rem] py-[1rem] text-[0.95rem] font-[600] placeholder:text-[0.85rem] placeholder:font-[600]"
          placeholder="Search for a country..."
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          className="text-lm-input-grey-400/90 dark:text-dm-text-white absolute left-4 h-auto w-5 self-center"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="50"
            className="opacity-70 dark:opacity-90"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="50"
            d="M338.29 338.29L448 448"
            className="opacity-70 dark:opacity-90"
          />
        </svg>
      </fieldset>

      <div className="bg-lm-ele-white dark:bg-dm-ele-blue-900 outline-lm-input-grey-400 relative flex w-full max-w-[12rem] items-center rounded-[0.4rem] drop-shadow-sm hover:outline-2">
        <button
          type="button"
          onClick={toggleFilterMenu}
          className="text-lm-text-grey-950 dark:text-dm-text-white/90 group flex h-[3rem] w-full cursor-pointer flex-row items-center justify-between rounded-[0.4rem] px-[1.2rem] py-[1rem] text-[0.85rem] font-[500]"
        >
          {region}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            className={`text-lm-text-grey-950 dark:text-dm-text-white/90 h-auto w-4 group-hover:animate-bounce ${showFilterMenu ? "rotate-180" : ""}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="50"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </button>

        <div
          className={`bg-lm-ele-white dark:bg-dm-ele-blue-900 absolute top-[110%] left-0 z-20 h-fit w-full rounded-[0.3rem] px-[1.2rem] py-[1rem] shadow-lg transition-[opacity] duration-300 ease-in-out ${showFilterMenu ? "opacity-100" : "hidden opacity-0"}`}
        >
          <ul className="text-lm-text-grey-950 dark:text-dm-text-white flex w-fit flex-col justify-center gap-1 text-[0.85rem] font-[600]">
            {regionsList.map((regionName) => (
              <li
                key={regionName}
                className={`hover:cursor-pointer ${regionName === region ? "font-[800]" : "opacity-80"}`}
                onClick={() => {
                  filterByRegion(regionName);
                  setShowFilterMenu(false);
                }}
              >
                {regionName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
