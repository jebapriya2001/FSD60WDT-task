//all the countries with a population of less than 2 lakhs
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    const countryNames = smallPopulationCountries.map(country => country.name.common);
    console.log(countryNames);
  })
  .catch(error => console.error('Error fetching data:', error));