const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'fd9ba0d8f7ea885daf693586f3e84886';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    console.log(result);
}
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);
