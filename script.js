const button = document.querySelector("button");

button.addEventListener("click", ()=> {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onerror)

    } else {
        button.innerText = "Your browser is not support";
    }
})

function onSuccess(position){
    // console.log(position)
    let{latitude, longitude} = position.coords;
     fetch('https://api.opencagedata.com/geocode/v1/json?q=$latitude}+${longitude}&key=${apiKey}')
     .then(response => console.log)
}

function onError(error) {
    if(error.code == 1) {
        button.innerText = "You denied the request";
    }
    else if (error.code == 2){
        button.innerText = "Location not available";
    } else {
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled","true");
}