fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    return response.json();
  })
  .then(data => {
    
    data.forEach(country => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Name: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log('-----------------------');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });