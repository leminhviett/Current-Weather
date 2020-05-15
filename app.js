let appid = '9cc9c98d510192da3b4ec6c2f548e2e0'

window.addEventListener('load', ()=> {
  let long, lat;
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long + " " + lat);
      //api
      const api = `http://api.weatherstack.com/current?access_key=${appid}&query=${lat},${long}`;
      
      console.log(api);
      fetch(api)
        .then(response => {return response.json()})
        .then(data => {
          console.log(data);


          let temp = data.current.temperature;
          let location = data.location.name + ", <br>" + data.location.country;
          let description = data.current.weather_descriptions[0];
          let icon_name = String(description).replace(" ", "_").toUpperCase();
          icon_name += data.current.is_day == "yes" ? "_DAY" : "_NIGHT";

          document.querySelector('.degree').innerHTML = temp;
          document.querySelector('.location-timezone').innerHTML = location;
          document.querySelector('.description').innerHTML = description;

          var skycons = new Skycons({"color": "white"});
          skycons.add("icon1", Skycons[icon_name]);
          skycons.play(); 
        })
    })
  }else{
    document.querySelector('.location-timezone').innerHTML = "Cannot get your current location";   
  }
})