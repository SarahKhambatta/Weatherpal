const getweatherData = async (city) => {
  const apiKey = 'FEZF9RNWD2F4Q8YPRNUJYCFBL';

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=${apiKey}&days=10`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
//day1
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[0];

       // Display weather information using querySelector
      document.querySelector('.temperatureday1').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.datetime').textContent = `   ${weatherData.datetime}`;
      //document.querySelector('.icon1').textContent = `${weatherData.icon}`;
      // document.querySelector('#tempmax').textContent = `UV Index: ${weatherData.tempmax}`;
      // document.querySelector('#humidity1').textContent = `Humidity: ${weatherData.humidity}`;
      document.querySelector('.windspeed1').textContent = `${weatherData.windspeed} km/h`;
      // document.querySelector('#condition1').textContent = `condition: ${weatherData.condition}`;
      //document.querySelector('.precip1').textContent = `Humidity: ${weatherData.precip}%`;

    }
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[1];

      // Display weather information using querySelector
    document.querySelector('.temperatureday2').textContent = ` ${weatherData.temp} °C`;

      document.querySelector('.windspeed2').textContent = ` ${weatherData.windspeed} km/h`;

  //day3
    }
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[2];

      // Display weather information using querySelector
      document.querySelector('.temperatureday3').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed3').textContent = ` ${weatherData.windspeed}km/h`;
    }
    //day4
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[3];

      // Display weather information using querySelector
      document.querySelector('.temperatureday4').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed4').textContent = ` ${weatherData.windspeed} km/h`;

    }
    //day5
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[4];

      // Display weather information using querySelector
      document.querySelector('.temperatureday5').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed5').textContent = ` ${weatherData.windspeed} km/h`;
    }
    //day6
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[5];

      // Display weather information using querySelector
     document.querySelector('.temperatureday6').textContent = ` ${weatherData.temp} °C`;
     document.querySelector('.windspeed6').textContent = ` ${weatherData.windspeed} km/h`;
    }
    //day7
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[6];

      // Display weather information using querySelector
      document.querySelector('.temperatureday7').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed7').textContent = ` ${weatherData.windspeed} km/h`;
    }
    //day7
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[7];

      // Display weather information using querySelector
      document.querySelector('.temperatureday8').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed8').textContent = ` ${weatherData.windspeed} km/h`;

    }
    //day7
    if (data.errorCode) {
      console.error('An error occurred:', data.message);
    } else{
      const weatherData = data.days[8];

      // Display weather information using querySelector
      document.querySelector('.temperatureday9').textContent = ` ${weatherData.temp} °C`;
      document.querySelector('.windspeed9').textContent = ` ${weatherData.windspeed} km/h`;

    }
  } catch (error) {
    console.error('An error occurred:', error);
  }

}

// Function to handle form submission
const handlesubmit = (event) => {

  const city = document.querySelector('.searchbar').value || 'Pune';
  getweatherData(city);
};
// Function to handle key press event
const handleclick = (event) => {
  if (event.key === 'Enter') {
    const city = document.querySelector('.searchbar').value || 'Pune';
    getweatherData(city);
  }
};

// Attach form submission event listener
document.querySelector('.search button').addEventListener('click', handlesubmit);
document.querySelector('.searchbar').addEventListener('keypress', handleclick);
getweatherData("pune");
