const submitbtn = document.getElementById("submitBtn");
const City_name = document.getElementById("city_name");
const Cityname = document.getElementById("cityname");
const Cel_data = document.getElementById("Cel_data");
// const Temp_val = document.getElementById("Cel_data");
const Temp_status = document.getElementById("temp_status");

const middle_layer = document.querySelector(".middle_layer");
const getinfo = async (event) => {
  event.preventDefault();
  let cityval = Cityname.value;
  if (cityval == "") {
    City_name.innerHTML = `Plz write the name before search`;
    middle_layer.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=ccb3d2f7048c9ceac5e6f19e50d0d7ae`;
      const respnse = await fetch(url);
      const data = await respnse.json();
      const arrData = [data];

      City_name.innerHTML = `${arrData[0].name} ${arrData[0].sys.country}`;
      Cel_data.innerHTML = arrData[0].main.temp;
      // Temp_status.innerHTML = arrData[0].weather[0].main;

      const tempstatus = (arrData[0].main.temp - 273.15).toFixed(2);
      Cel_data.innerHTML = tempstatus;
      if (tempstatus == "Clear") {
        Temp_status.innerHTML =
          '<i class="fa-solid fa-sun" style="color: #FFC72C"></i>';
      } else if (tempstatus == "Clouds") {
        Temp_status.innerHTML =
          '<i class="fa-solid fa-clouds" style="color: #7a7a7a"></i>';
      } else if (tempstatus == "Rainy") {
        Temp_status.innerHTML =
          '<i class="fa-solid fa-cloud-rain" style="color: #525252"></i>';
      } else if (tempstatus == "Smoke") {
        Temp_status.innerHTML =
          '<i class="fa-solid fa-smoke" style="color: #fff"></i>';
      } else {
        Temp_status.innerHTML =
          '<i class="fa-solid fa-sun" style="color: #FFC72C"></i>';
      }
      middle_layer.classList.remove("data_hide");
    } catch {
      City_name.innerHTML = `Plz write the city name properly`;
      middle_layer.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", getinfo);
