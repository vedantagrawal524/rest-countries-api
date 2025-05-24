import Header from "./components/Header";
import Main from "./components/Main";
import CountriesContextProvider from "./context/CountriesContext";

import DetailsMain from "./components/DetailsMain";

export default function App() {
  return (
    <CountriesContextProvider>
      <div className="font-nunito-sans bg-lm-bg-grey-50 dark:bg-dm-bg-blue-950 flex min-h-screen w-full flex-col text-base">
        <Header />
        <Main />
        <DetailsMain
          country={{
            name: "India",
            topLevelDomain: [".in"],
            alpha2Code: "IN",
            alpha3Code: "IND",
            callingCodes: ["91"],
            capital: "New Delhi",
            altSpellings: [
              "IN",
              "Bhārat",
              "Republic of India",
              "Bharat Ganrajya",
            ],
            subregion: "Southern Asia",
            region: "Asia",
            population: 1380004385,
            latlng: [20, 77],
            demonym: "Indian",
            area: 3287590,
            gini: 35.7,
            timezones: ["UTC+05:30"],
            borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
            nativeName: "भारत",
            numericCode: "356",
            flags: {
              svg: "https://flagcdn.com/in.svg",
              png: "https://flagcdn.com/w320/in.png",
            },
            currencies: [
              {
                code: "INR",
                name: "Indian rupee",
                symbol: "₹",
              },
            ],
            languages: [
              {
                iso639_1: "hi",
                iso639_2: "hin",
                name: "Hindi",
                nativeName: "हिन्दी",
              },
              {
                iso639_1: "en",
                iso639_2: "eng",
                name: "English",
                nativeName: "English",
              },
            ],
            translations: {
              br: "India",
              pt: "Índia",
              nl: "India",
              hr: "Indija",
              fa: "هند",
              de: "Indien",
              es: "India",
              fr: "Inde",
              ja: "インド",
              it: "India",
              hu: "India",
            },
            flag: "https://flagcdn.com/in.svg",
            regionalBlocs: [
              {
                acronym: "SAARC",
                name: "South Asian Association for Regional Cooperation",
              },
            ],
            cioc: "IND",
            independent: true,
          }}
        />
      </div>
    </CountriesContextProvider>
  );
}
