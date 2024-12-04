import { useSnapshot } from "valtio";
import state from "../../store/state";
import { useRef, useState } from "react";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const snap = useSnapshot(state);

  const focus = (a) => a && a.focus();

  const search = async (value) => {
    try {
      if (value) setLocations([]);
      {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL
          }locations/v1/cities/autocomplete?apikey=${
            import.meta.env.VITE_API_KEY
          }&q=${value}`
        );
        const data = await res.json();
        setLocations(data || []);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const debounce = (cb, time) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, time);
    };
  };

  const debouncedSearch = debounce(search, 500);
  return (
    <header
      className={`px-3 py-2 flex ${
        isSearching ? "justify-end" : "justify-between"
      } items-center sticky top-0`}
    >
      {!isSearching && (
        <>
          <hgroup>
            <h3 className="text-3xl">{snap.locationData.LocalizedName}</h3>
            <span className="text-xs">
              {snap.locationData.AdministrativeArea.LocalizedName},
              {snap.locationData.AdministrativeArea.CountryID}
            </span>
          </hgroup>
          <img
            src="/Search.svg"
            alt="search"
            className="cursor-pointer"
            onClick={() => setIsSearching(true)}
          />
        </>
      )}
      {isSearching && (
        <>
          <input
            type="search"
            onBlur={() => setIsSearching(false)}
            ref={focus}
            onChange={(e) => {
              debouncedSearch(e.target.value);
              setIsLoading(true);
            }}
            className="rounded-full px-3 py-2 w-[100%] sweep-in text-white bg-transparent border-2 outline-none"
          />
          <div className="absolute top-[100%] left-0 right-0 px-3 bg-white text-black max-h-[40vh] overflow-auto">
            {locations.map((location, i) => (
              <div key={i} className="cursor-pointer hover:bg-gray-50">
                <h5 className="text-xl">{location.LocalizedName}</h5>
                <span className="text-xs">
                  {location.AdministrativeArea.LocalizedName},
                  {location.Country.LocalizedName}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
