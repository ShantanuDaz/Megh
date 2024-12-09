import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import state from "./store/state";

const App = () => {
  useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            // console.log("Latitude:", latitude);
            // console.log("Longitude:", longitude);
            // console.log("Position:", position);
            try {
              const res = await fetch(
                `${
                  import.meta.env.VITE_API_URL
                }locations/v1/cities/geoposition/search?apikey=${
                  import.meta.env.VITE_API_KEY
                }&q=${latitude},${longitude}`
              );
              const data = await res.json();
              state.locationData = data;
            } catch (err) {
              console.log(err);
            }
          },
          (error) => {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
