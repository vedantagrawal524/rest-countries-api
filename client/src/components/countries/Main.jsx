import MenuBar from "./MenuBar";
import Countries from "./Countries";
import LoadMoreButton from "./LoadMoreButton";
import { useCountriesContext } from "../../hooks/useCountriesContext";

export default function Main() {
  const { loadMoreCountries, hasMore } = useCountriesContext();
  return (
    <main className="xxs:px-7 xs:px-8 flex w-full flex-col justify-center gap-14 px-5 py-5 pb-12 md:px-10 lg:px-12 xl:px-14">
      <MenuBar />
      <Countries />
      {hasMore && <LoadMoreButton loadMore={loadMoreCountries} />}
    </main>
  );
}
