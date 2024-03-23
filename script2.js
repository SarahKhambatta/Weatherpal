// Function to fetch weather data
const getWeatherData = async (city) => {
  const apiKey = '64896bfe37e447c6aea65458233005';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      console.error('An error occurred:', data.error.message);
    } else {
      const weatherData = data.current;

      // Display weather information using querySelector
      //document.querySelector('#day1').textContent = `Local time : ${weatherData.localtime}`;
      // document.querySelector('#temperature').textContent = `Temperature: ${weatherData.temp_c}°C`;
      //document.querySelector('#condition').textContent = `Condition: ${weatherData.condition.text}`;
      document.querySelector('.wind_dir').textContent = `${weatherData.wind_dir}`;
      // document.querySelector('.precip_mm').textContent = `${weatherData.precip_mm}`;
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const city = document.querySelector('.searchbar').value;
  getWeatherData(city);

};

// Function to handle key press event
const handleClick = (event) => {
  if (event.key === 'Enter') {
    const city = document.querySelector('.searchbar').value;
    getWeatherData(city);
  }
};


// Attach form submission event listener
document.querySelector('.search button').addEventListener('click', handleSubmit);
document.querySelector('.searchbar').addEventListener('keypress', handleClick);
getWeatherData("pune")
