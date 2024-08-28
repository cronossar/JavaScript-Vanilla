
window.addEventListener('load', ()=> {
    let lon
    let lat
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            latn = posicion.coords.latitude

            const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=b9c5486556b3385e01f572cbdb86e572'
'
        
            console.log(url)
        })
    }


    })