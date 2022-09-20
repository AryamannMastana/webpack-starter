import axios from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com/', config)
        .then((res) => {
            document.querySelector('#joke').innerHTML = res.data.joke
        })
        .catch(err => console.log(err.message))
}

export default generateJoke;