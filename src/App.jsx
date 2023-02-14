import React, { useState, useEffect } from "react";
import Weather from "./Weather";

import "./App.css";

const App = () => {
  var [date, setDate] = useState(new Date());
  // store latitude and longitude
  const [data, setData] = useState([]);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // fetch data from the API
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchData(position.coords);
    });
  }, []);
  const fetchData = async (coords) => {
    await fetch(
      `${import.meta.env.VITE_REACT_API_URL}/weather/?lat=${
        coords.latitude
      }&lon=${coords.longitude}&units=metric&APPID=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((e) => console.log(`Oh no error ${e}`));
  };

  return (
    <div className="app">
      <div className="time">
        <h2 className="time-h2">{date.toLocaleTimeString()}</h2>
      </div>
      <div className="date">
        <h2 className="date-h2">{date.toLocaleDateString()}</h2>
        </div>
      <div className="weather-card">
        {typeof data.main != "undefined" ? (
          <Weather data={data} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="quote">
        <h1 className="quote-h1">"Life is what happens when you're busy making other plans"</h1>
        <h5 className="quote-h2">-John Lenon</h5>
      </div>

    </div>
  );
};

export default App;
