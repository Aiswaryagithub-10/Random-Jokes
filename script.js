const btn = document.getElementById('generate-btn');
const jokeDisplay = document.getElementById('joke-display');

function showLoading() {
    jokeDisplay.innerHTML = '<p>Loading...</p>'; 
}

btn.addEventListener('click', function() {
    jokeDisplay.innerHTML = '';
    
    showLoading();

    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const joke = data[0]; 
            const setup = document.createElement('p');
            const punchline = document.createElement('p');
            setup.textContent = joke.setup;
            punchline.textContent = joke.punchline; 
            jokeDisplay.innerHTML = ''; 
            jokeDisplay.appendChild(setup); 
            jokeDisplay.appendChild(punchline); 
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            jokeDisplay.innerHTML = '<p>Failed to fetch a joke. Please try again later.</p>';
        });
});
