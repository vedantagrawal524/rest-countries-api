import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="bg-lm-ele-white dark:bg-dm-ele-blue-900 xxs:px-7 xs:px-8 flex w-full flex-row items-center justify-between px-5 py-6 drop-shadow-sm md:px-10 lg:px-12 xl:px-14">
      <h1 className="text-lm-text-grey-950 dark:text-dm-text-white xxs:text-[1.1rem] xs:text-[1.2rem] text-[1rem] leading-6 font-[800]">
        Where in the world?
      </h1>

      <button
        type="button"
        onClick={toggleTheme}
        className="text-lm-text-grey-950 dark:text-dm-text-white xxs:text-[0.8rem] xs:text-[0.9rem] xxs:gap-1.5 group flex cursor-pointer flex-row items-center justify-center gap-1 text-[0.75rem] leading-4 font-[700]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
          className="text-lm-text-grey-950 dark:text-dm-text-white h-auto w-4 group-hover:animate-pulse"
        >
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            className="dark:fill-dm-text-white"
          />
        </svg>
        Dark Mode
      </button>
    </header>
  );
}
