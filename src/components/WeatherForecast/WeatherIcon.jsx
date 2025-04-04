// FILE PURPOSE = display weather icon only
// (4 steps to build component)


// (1. define WeatherIcon component)
const WeatherIcon = ({ img, imgAlt }) => {
    // (2. return just the image tag)
    return <img src={img} alt={imgAlt} />;
  };
  
  export default WeatherIcon; // (3. export the component)
  
  // (4. now WeatherIcon can be imported into WeatherForecast.jsx)
  