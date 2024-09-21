//Print the country that uses US dollars as currency.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usdCountries = data.filter(country => 
      country.currencies && Object.keys(country.currencies).includes('USD')
    );
    usdCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'No capital'}, Currency: USD`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));