


let long;
let lat;
     if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition((position)=>{
        long= position.coords.longitude;
        lat= position.coords.latitude;
        console.log(long);
        console.log(lat);
         aapi= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b34af01c8dbd09022bb8e7349ed62a82`;
        var myEl = document.getElementById('myBtn');

myEl.addEventListener('click', function() {
     fetch (aapi)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const name = data;
            const temp = data.main;
            const description = data.weather[0];
            const feels =data.main.feels_like;
            const hum = data.main.humidity;
            $('#loc').empty();
            $('#loc').append(name.name);
            $('#numb').empty();
            $('#numb').append(Math.floor(temp.temp-276));
            $('#climate').empty();
            $('#climate').append(description.description);
            let haha=document.getElementById('numb-2');
            haha.innerHTML=Math.floor(feels-276);
            let hehe = document.querySelector('.numb-3');
            hehe.innerHTML=hum;

            document.querySelector('.main').style.display="block";
            


}, false);         
            

            
        })

    })


}

inputField = document.getElementById('input');
inputField.addEventListener("keyup", e => {
    if (e.key == "Enter" && inputField.value !=""){
       // console.log("hello")
       requestApi(inputField.value);
    }
})

const requestApi = city =>{
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b34af01c8dbd09022bb8e7349ed62a82`;
    fetch(api)
    .then((response) => {
        return response.json();
    })

    .then(result => {
        console.log(result)
    
})
}
