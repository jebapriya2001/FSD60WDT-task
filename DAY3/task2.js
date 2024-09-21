fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    return response.json();
  })
  .then(data => {
    
    data.forEach(country => {
      const flagUrl = country.flags.png;
      if (flagUrl) {
        console.log(flagUrl);
      } else {
        console.log(`No flag URL found for ${country.name.common}`);
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });