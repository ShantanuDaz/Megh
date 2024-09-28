import { useSnapshot } from "valtio";
import state from "../../store/state";
import { useState } from "react";

const Header = () => {
  const [isSearching, setIsSearching] = useState(false);
  const snap = useSnapshot(state);
  return (
    <header
      className={`px-3 py-2 flex ${
        isSearching ? "justify-end" : "justify-between"
      } items-center sticky top-0 relative`}
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
            className="rounded-full px-3 py-2 w-[100%] sweep-in text-black"
          />
          <span
            className="absolute text-black right-[6%] text-2xl"
            onClick={() => setIsSearching(false)}
          >
            &#10006;
          </span>
          <span className="absolute text-black right-[2%] text-2xl">
            &#128269;
          </span>
        </>
      )}
    </header>
  );
};

export default Header;
