const btn = document.getElementById('generate-btn');
const jokeDisplay = document.getElementById('joke-display');

// Function to display a loading message
function showLoading() {
    jokeDisplay.innerHTML = '<p>Loading...</p>'; // Show loading text
}

btn.addEventListener('click', function() {
    // Clear previous jokes
    jokeDisplay.innerHTML = '';
    
    // Show loading message
    showLoading();

    // Fetch a random joke from the API
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const joke = data[0]; // Get the first joke from the array
            // Create new paragraphs for the setup and punchline
            const setup = document.createElement('p');
            const punchline = document.createElement('p');
            setup.textContent = joke.setup; // Set up text
            punchline.textContent = joke.punchline; // Punchline text
            jokeDisplay.innerHTML = ''; // Clear loading message
            jokeDisplay.appendChild(setup); // Append setup
            jokeDisplay.appendChild(punchline); // Append punchline
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            jokeDisplay.innerHTML = '<p>Failed to fetch a joke. Please try again later.</p>';
        });
});
