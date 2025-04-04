// FILE PURPOSE = render one weather forecast card using sub-components
// (4 steps to build component)

import WeatherIcon from './WeatherIcon.jsx'; // (1. import sub-component for icon)
import WeatherData from './WeatherData.jsx'; // (1. import sub-component for forecast text)
import './WeatherForecast.css'; // (1. import styling for layout and design)


// (2. define the component using props)
const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    // (3. return card layout using WeatherIcon and WeatherData)
    <div className="weather">
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecast; // (4. export to be used by App.jsx)
