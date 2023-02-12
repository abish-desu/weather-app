import React, { useState, useEffect } from "react";
const App = () => {
  // store latitude and longitude
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [data, setData] = useState([]);
  
  // fetch data from the API
  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      // setLat(position.coords.latitude);
      // setLon(position.coords.longitude);

      console.log(position)
      fetchData(position.coords);
    });
  },[]);
  const fetchData = async (coords) => {

    await fetch(`${import.meta.env.VITE_REACT_API_URL}/weather/?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&APPID=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    })
    .catch((e) => console.log(`Oh no error ${e}`))
  };
 

  
  return <div>
    App</div>;
};

export default App;

