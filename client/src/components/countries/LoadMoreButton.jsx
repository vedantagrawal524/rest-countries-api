export default function LoadMoreButton(props) {
  return (
    <button
      type="button"
      onClick={props.loadMore}
      className="text-lm-text-grey-950 dark:text-dm-text-white dark:outline-lm-ele-white outline-dm-ele-blue-900 flex w-fit cursor-pointer flex-row items-center justify-center gap-1 self-center px-8 py-1.5 text-[0.85rem] font-[500] tracking-widest uppercase outline-1 drop-shadow-sm hover:opacity-70"
    >
      Load More
    </button>
  );
}
