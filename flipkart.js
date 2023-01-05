let x = document.getElementById('out');
let y = document.getElementById('address');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and Longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url)
        .then((res)=> res.json())
        .then((data) => {
            y.innerText = `Your City is ${data.city.name}`
        })
}
function loadCoupon(){
  document.getElementsByClassName('coupon')[0].style.display='block';
  document.getElementsByTagName('body').style.opacity='0.6'    
}
const couponClose = () =>{
  document.getElementsByClassName('coupon')[0].style.display='none';
  document.getElementsByTagName('body').style.opacity='1'
  
}
function changeMode(){
  let mybody=document.body;
  mybody.classList.toggle('mydark')
}
