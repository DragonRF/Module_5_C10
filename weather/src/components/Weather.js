import { useState } from "react";

function Weather() {
  const [degree, setDegree] = useState({});

  let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=cb8d857e9528680474d1a7a90b239fba`;

  const weather = () => {
    if (degree <= 25) {
    }
  };

  return <></>;
}

export default Weather;
