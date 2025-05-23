import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="font-nunito-sans bg-lm-bg-grey-50 dark:bg-dm-bg-blue-950 flex min-h-screen w-full flex-col text-base">
      <Header />
      <Main />
    </div>
  );
}
