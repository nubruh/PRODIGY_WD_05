function getWeather() {
    const apiKey = "a6995596ea199b1e196afcb3fc781f38";
    const location = document.getElementById('locationInput').value.trim();

    if (location === "") {
        alert("Please enter a location.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const weather = data.weather[0].main;
            const locationName = data.name + ', ' + data.sys.country;

            document.getElementById('temperature').textContent = temperature + '°C';
            document.getElementById('weather').textContent = weather;
            document.getElementById('location').textContent = locationName;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.querySelector('.weather-info h2').textContent = "Failed to fetch weather data";
        });
}
