// FILE PURPOSE = display day, conditions, and time of forecast
// (4 steps to build component)


// (1. define WeatherData component)
const WeatherData = ({ day, conditions, time }) => {
    // (2. return forecast text block JSX)
    return (
      <>
        <h2>{day}</h2>
        <p>
          <span>conditions: </span>
          {conditions}
        </p>
        <p>
          <span>time: </span>
          {time}
        </p>
      </>
    );
  };
  
  export default WeatherData; // (3. export the component)
  
  // (4. now WeatherData can be imported into WeatherForecast.jsx)
  