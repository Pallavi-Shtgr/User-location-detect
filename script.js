// const button = document.querySelector("button");

// button.addEventListener("click", ()=> {
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(onSuccess, onerror)

//     } else {
//         button.innerText = " Your browser is not support";
//     }
// })

// function onSuccess(position){
//     console.log(position)
// }

// function onError(error) {
//     if(error.code == 1) {
//         button.innerText = "You denied the request";
//     }
//     else if (error.code == 2){
//         button.innerText = "Location not available";
//     } else {
//         button.innerText = "Something went wrong";
//     }
// }