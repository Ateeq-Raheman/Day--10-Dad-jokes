const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {
    const setHeader = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            // Update the inner text of the #joke element with the joke
            jokes.innerText = data.joke;
        })
        .catch((error) => {
            console.log(error);
        })
}

const addJoke = () => {
    jokeBtn.addEventListener('click', generateJokes)
}

// Ensure the event listener is added
addJoke();
