import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";

export default function Header() {
  const { resetFilter } = useContext(CountriesContext);

  const handleResetAndNavigate = () => {
    resetFilter();
    // Navigation is handled by Link, so no need to do it here explicitly.
  };

  return (
    <header className="bg-lm-ele-white dark:bg-dm-ele-blue-900 xxs:px-7 xs:px-8 flex w-full flex-row items-center justify-between px-5 py-6 drop-shadow-sm md:px-10 lg:px-12 xl:px-14">
      <Link to="/" onClick={handleResetAndNavigate}>
        <h1 className="text-lm-text-grey-950 dark:text-dm-text-white xxs:text-[1.1rem] xs:text-[1.2rem] text-[1rem] leading-6 font-[800] hover:opacity-80">
          Where in the world?
        </h1>
      </Link>
      <ThemeButton />
    </header>
  );
}
