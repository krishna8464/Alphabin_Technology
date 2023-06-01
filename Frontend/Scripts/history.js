
let token = sessionStorage.getItem("Access_Token")
const apikey = "eec5dbfa71143678425241b7d1176985";

async function getData(){
    try {
        let res = await fetch("https://alphabin-technology-backend.onrender.com/gethistory",{
            method : "GET",
            headers : {
                "Authorization" : `${token}`
            }
        });
        let out = await res.json();
        let arr = out[0].history;
        for(let i = 0;i<arr.length;i++){
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${arr[i].lat}&lon=${arr[i].lon}&appid=${apikey}`;
            let res = await fetch(url);
            let data = await res.json();
            displayForecast(arr[i])
        }
        
        
    } catch (error) {
        console.log(error);
    }
}

getData();


  // https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed
  
  function displayForecast(finalData) {
    let cont = document.getElementById("cont")
   
    cont.innerHTML = null;
    var someDate = new Date();
    finalData.daily.forEach(function (element) {
      let forecast = document.createElement("div");
      forecast.id="forecast"
      someDate.setDate(someDate.getDate() + 1);
  
      let div = document.createElement("div");
      div.style.backgroundColor = "rgb(78, 78, 152)";
  
      let date = document.createElement("p");
      date.textContent = someDate.toLocaleDateString("en-us", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
  
      let tem = document.createElement("h3");
      var val = element.temp.day;
  
      val = Number(val) - 273.15;
      val = Math.floor(val);
      tem.textContent = val + "°C";
  
      let divIn = document.createElement("div");
      divIn.setAttribute("class", "windfore");
  
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://media2.giphy.com/media/7jc58VMVMrvjy66ikL/giphy.gif?cid=ecf05e473hyslxc3ic7ram8t3smj6id4kqpthv5t2bgktgn5&rid=giphy.gif&ct=s"
      );
  
      let wind = document.createElement("h3");
      let windval = element.wind_speed;
      windval = windval + " m/s";
      wind.textContent = windval;
      divIn.append(img, wind);
  
      div.append(date, tem, divIn);
  
      forecast.append(div);
      cont.append(forecast);
    });
  }