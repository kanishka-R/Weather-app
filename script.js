const apiKey="699e4bbf7299f16074a1b0ec5c738c0f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
const response = await fetch(apiUrl +city+"&units=metric"+`&appid=${apiKey}`);
if(response.status == 404){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"
}else{
    document.querySelector(".error").style.display="none"
var data=await response.json();
console.log(data);
document.querySelector(".city").innerText=data.name;
document.querySelector(".temp").innerText=data.main.temp + "°c";
document.querySelector("#humidity").innerText=data.main.humidity +"%";
document.querySelector("#wind-speed").innerText=data.wind.speed +"km/h";

if(data.weather[0].main == 'Clouds'){
weatherIcon.src='images/clouds.png';
}
else if(data.weather[0].main == 'Rain'){
weatherIcon.src='images/rain.png';
}
else if(data.weather[0].main == 'Mist'){
weatherIcon.src='images/mist.png';
}
else if(data.weather[0].main == 'Clear'){
weatherIcon.src='images/clear.png';
}
else if(data.weather[0].main == 'Drizzle'){
weatherIcon.src='images/drizzle.png';
}
document.querySelector(".weather").style.display='block';
}}
searchbtn.addEventListener('click',()=>{
checkWeather(searchbox.value)
})
