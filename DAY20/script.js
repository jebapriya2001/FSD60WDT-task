// Function to fetch data from API 1
function fetchApi1() {
    return fetch('https://api.publicapis.org/entries')
        .then(response => response.json())
        .then(data => {
            displayApi1Data(data);
        })
        .catch(error => {
            console.error('Error fetching API 1:', error);
            document.getElementById('api1').innerHTML = 'Error loading API 1 data.';
        });
}

// Function to display data from API 1
function displayApi1Data(data) {
    const api1Element = document.getElementById('api1');
    api1Element.innerHTML = `<h2>API 1 Data:</h2><pre>${JSON.stringify(data.entries[0], null, 2)}</pre>`;
}

// Function to fetch data from API 2
function fetchApi2() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            displayApi2Data(data);
        })
        .catch(error => {
            console.error('Error fetching API 2:', error);
            document.getElementById('api2').innerHTML = 'Error loading API 2 data.';
        });
}

// Function to display data from API 2
function displayApi2Data(data) {
    const api2Element = document.getElementById('api2');
    api2Element.innerHTML = `<h2>Random Joke:</h2><p>${data.setup} - ${data.punchline}</p>`;
}

// Function to fetch data from API 3
function fetchApi3() {
    return fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            displayApi3Data(data);
        })
        .catch(error => {
            console.error('Error fetching API 3:', error);
            document.getElementById('api3').innerHTML = 'Error loading API 3 data.';
        });
}

// Function to display data from API 3
function displayApi3Data(data) {
    const api3Element = document.getElementById('api3');
    api3Element.innerHTML = `<h2>Cat Fact:</h2><p>${data.fact}</p>`;
}

// Fetch data from all APIs on page load
fetchApi1();
fetchApi2();
fetchApi3();
