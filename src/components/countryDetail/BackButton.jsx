import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="text-lm-text-grey-950 dark:text-dm-text-white bg-lm-ele-white dark:bg-dm-ele-blue-900 mt-4 flex w-fit cursor-pointer flex-row items-center justify-center gap-1 rounded-[0.4rem] px-8 py-1.5 text-[0.85rem] font-[500] drop-shadow-sm hover:opacity-70"
    >
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
  );
}
