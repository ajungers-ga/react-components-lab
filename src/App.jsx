// FILE PURPOSE = this file is the ROOT component that renders the WeatherForecast list

import './App.css';
import WeatherForecast from './components/WeatherForecast/WeatherForecast.jsx';

const App = () => {
  // (1. define the weather data array)
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  // (2. return JSX structure)
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {/* (2.A. use map() to dynamically create WeatherForecast components) */}
        {weatherForecasts.map((forecast, index) => (
          <WeatherForecast key={index} {...forecast} />
        ))}
      </section>
    </>
  );
};
export default App; // (3. export the component)
// (4. now App can be imported into main.jsx and rendered in the DOM)