// let url = https://api.openweathermap.org/data/2.5/weather?units=metric&q={city name}&appid={API key}
let apiKey = "07fcc8cebcb2b7011ed31ce4d9f37d1b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let temp = document.querySelector('.num');
let humidity = document.querySelector('.hRate');
let wSpeed = document.querySelector('.wRate');
let place = document.querySelector('.place');
let image = document.querySelector('.weatherCdn');
let btn = document.querySelector('button');

async function checkWeather(URL) {
    try {
        let res = await fetch(URL  + `&appid=${apiKey}`);
        let data = await res.json();

        temp.innerText = data.main.temp;
        humidity.innerText = data.main.humidity;
        wSpeed.innerText = data.wind.speed;
        place.innerText = data.name;
        
        let wthr = data.weather[0].description;
        
        let loc;
        if(wthr=='clear sky') loc = 'img/clear.png';
        else if(wthr=='few clouds' || wthr=='mist') loc = 'img/mist.png';
        else if(wthr=='scattered clouds' || wthr=='broken clouds') loc = 'img/clouds.png'
        else if(wthr=='snow') loc = 'img/snow.png';
        else if(wthr=='shower rain') loc = 'img/drizzle.png';
        else loc = 'img/rain.png'

        image.setAttribute('src',loc);

    } catch {
        temp.innerText = 0;
        humidity.innerText = 0;
        wSpeed.innerText = 0;
        place.innerText = 'Earth';

        image.setAttribute('src','img/clear.png');
    }
}

btn.addEventListener('click',()=>{
    let txt = document.getElementById('searchBar').value;
    document.getElementById('searchBar').value = "";
    let text = apiUrl + `&q=${txt}`;
    checkWeather(text);
})
