document.addEventListener("DOMContentLoaded", function () {
    const countriesContainer = document.getElementById('countries-container');

    // Fetch data from Restcountries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            countries.forEach(country => {
                const countryCard = createCountryCard(country);
                countriesContainer.appendChild(countryCard);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    function createCountryCard(country) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-sm-12 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header text-center';
        cardHeader.textContent = country.name.common;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';

        const flagImg = document.createElement('img');
        flagImg.src = country.flags.svg;
        flagImg.className = 'card-img-top';
        flagImg.alt = `${country.name.common} Flag`;

        const capitalP = document.createElement('p');
        capitalP.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;

        const regionP = document.createElement('p');
        regionP.textContent = `Region: ${country.region}`;

        const latlngP = document.createElement('p');
        latlngP.textContent = `LatLng: ${country.latlng.join(', ')}`;

        const countryCodeP = document.createElement('p');
        countryCodeP.textContent = `Country Code: ${country.cca3}`;

        const weatherButton = document.createElement('button');
        weatherButton.className = 'btn btn-primary';
        weatherButton.textContent = 'Click for Weather';
        weatherButton.onclick = () => fetchWeather(country.latlng, cardBody);

        cardBody.appendChild(flagImg);
        cardBody.appendChild(capitalP);
        cardBody.appendChild(regionP);
        cardBody.appendChild(latlngP);
        cardBody.appendChild(countryCodeP);
        cardBody.appendChild(weatherButton);

        cardDiv.appendChild(cardHeader);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);

        return colDiv;
    }

    function fetchWeather(latlng, cardBody) {
        const [lat, lng] = latlng;
        const apiKey = 'bfb8d405f4e9d10aa98308fbde0e1d70';  
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

        fetch(weatherUrl)
            .then(response => response.json())
            .then(weatherData => {
                const weatherP = document.createElement('p');
                weatherP.textContent = `Weather: ${weatherData.weather[0].description}, Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C`;
                cardBody.appendChild(weatherP);
            })
            .catch(error => console.error('Error fetching weather:', error));
    }
});
