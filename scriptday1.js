const getweatherdata = async (city) => {
    const apiKey = 'FEZF9RNWD2F4Q8YPRNUJYCFBL';
    const city = "pune";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.errorCode) {
        console.error('An error occurred:', data.message);
      } else {
        const weatherData = data.days[1];

        // Display weather information using querySelector
        document.querySelector('.day2').textContent = ` ${weatherData.temp} °C`;
        document.querySelector('.icon2').textContent = `${weatherData.icon}`;
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }

  // Function to handle form submission
  const handlsubmit = (event) => {
    event.preventDefault();
    const city = document.querySelector('.searchbar').value;
    getweatherdata(city);
  };
  // Function to handle key press event
  const handlclick = (event) => {
    if (event.key === 'Enter') {
      const city = document.querySelector('.searchbar').value;
      getweatherdata(city);
    }
  };

  // Attach form submission event listener
  document.querySelector('.search button').addEventListener('click', handlsubmit);
  document.querySelector('.searchbar').addEventListener('keypress', handlclick);
