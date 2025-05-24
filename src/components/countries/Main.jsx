import MenuBar from "./MenuBar";
import Countries from "./Countries";

export default function Main() {
  return (
    <main className="xxs:px-7 xs:px-8 flex w-full flex-col justify-center gap-14 px-5 py-5 md:px-10 lg:px-12 xl:px-14">
      <MenuBar />
      <Countries />
    </main>
  );
}
