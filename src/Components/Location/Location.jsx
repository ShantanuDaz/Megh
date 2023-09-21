import React, { useState } from "react";
import { locURL, locOption } from "../../APIDetails";
import "./Location.css";
const Loacation = ({ location = "", changeLocation = () => {} }) => {
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const getLocation = async (loc) => {
    const url = `${locURL}namePrefix=${loc}`;
    try {
      const res = await fetch(url, locOption);
      const data = await res.json();
      setData(data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setData([]);
      setLoading(false);
    }
  };

  const debounce = (cb, delay = 1000) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      setLoading(true);
      timeout = setTimeout(() => {
        cb(args);
        console.log(args);
      }, delay);
    };
  };
  const handleChange = debounce((val) => getLocation(val));
  return (
    <>
      <div
        onClick={() => setSearch(!search)}
        id="SelectedLocation"
        className="glass"
      >
        <div>
          <p>{location.city}</p>
          <p>
            {location.region}, {location.country}
          </p>
        </div>
        <div>
          <p>latitude : {location.latitude.toFixed(2)}</p>
          <p>longitude : {location.longitude.toFixed(2)}</p>
        </div>
      </div>
      {search && (
        <div
          className="modal"
          onClick={(e) => e.target.className === "modal" && setSearch(!search)}
        >
          <div id="search" className="glass">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleChange(e.target.value)}
            />
            {loading ? (
              <div className="spinnerBox">
                <div className="spinner"></div>
              </div>
            ) : (
              <>
                {data.map((loc, i) => {
                  return (
                    <div
                      className="locations"
                      key={i}
                      onClick={() => {
                        changeLocation(loc);
                        setSearch(!search);
                        setData([]);
                      }}
                    >
                      <p>{loc.city}</p>
                      <span>
                        {loc.region}, {loc.country}
                      </span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Loacation;
