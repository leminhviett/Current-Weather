let appid = '4d85c6fb2339958d445969176954eb77'

window.addEventListener('load', ()=> {
  let long, lat;
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //openweather api
      const api = `https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=439d4b804bc8187953eb36d2a8c26a02`;
      fetch(api)
        .then(response => {return response.json()})
        .then(data => {
          
        })
    })
  }else{
    // h1.textContet = ""
  }
})