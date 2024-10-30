//Print the following details name, capital, flag, using forEach method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    smallPopulationCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'No capital'}, Flag: ${country.flags.png}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));