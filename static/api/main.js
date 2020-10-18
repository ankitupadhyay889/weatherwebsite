const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_status = document.getElementById('temp_status');

const temp = document.getElementById('temp');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Plz write the name before search`;
  } else {
    try{
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=917f41195cc8a37392f0faf86c4daabd`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
    }
    catch{
      city_name.innerText = `Plz write the city name properly`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);