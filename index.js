const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1ff4d9d110msh79706211c21928fp136704jsn44f4e964c487',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather=(city)=>{
  cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then(response => response.json())
  .then((response) => {
    console.log(response);

    // Assuming you have HTML elements with IDs like cloud_pct, temp, feels_like, humidity, etc.
    // document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('temp').innerHTML = response.temp;
    document.getElementById('temp2').innerHTML = response.temp;
    document.getElementById('feels_like').innerHTML = response.feels_like;
    document.getElementById('humidity').innerHTML = response.humidity;
    document.getElementById('humidity2').innerHTML = response.humidity;
    document.getElementById('min_temp').innerHTML = response.min_temp;
    document.getElementById('max_temp').innerHTML = response.max_temp;
    document.getElementById('wind_speed').innerHTML = response.wind_speed;
    document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('sunrise').innerHTML = response.sunrise;
    document.getElementById('sunset').innerHTML = response.sunset;
  })
  .catch(error => console.error(error));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather(Delhi )