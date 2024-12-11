import { useSnapshot } from "valtio";
import state from "../../store/state";
import { useRef, useState } from "react";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnLocation, setIsOnLocation] = useState(false);
  const snap = useSnapshot(state);

  const focus = (a) => a && a.focus();

  const search = async (value) => {
    try {
      if (!value) {
        setLocations([]);
        return;
      }
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }geo/1.0/direct?q=${value}&limit=10&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();
      setLocations(data || []);
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
            <h3 className="text-3xl">{snap.locationData.name}</h3>
            <span className="text-xs">
              {snap.locationData.state},{snap.locationData.country}
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
            onBlur={() => !isOnLocation && setIsSearching(false)}
            ref={focus}
            onChange={(e) => {
              debouncedSearch(e.target.value);
              setIsLoading(true);
            }}
            className="rounded-full px-3 py-2 w-full sweep-in text-white bg-transparent border-2 outline-none"
          />
          <div className="absolute top-[100%] left-0 right-0 px-3 bg-white text-black max-h-[40vh] overflow-auto">
            {isLoading ? (
              <p>Searching...</p>
            ) : (
              <>
                {locations.map((location, i) => (
                  <div
                    key={i}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => {
                      state.locationData = location;
                      setIsSearching(false);
                    }}
                    onMouseEnter={() => setIsOnLocation(true)}
                    onMouseLeave={() => setIsOnLocation(false)}
                  >
                    <h5 className="text-xl">{location.name}</h5>
                    <span className="text-xs">
                      {location.state},{location.country}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
