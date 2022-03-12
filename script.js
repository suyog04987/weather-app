

window.addEventListener("load", () => {


let long;
let lat;
     if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition((position)=>{
        long= position.coords.longitude;
        lat= position.coords.latitude;
        console.log(long);
        console.log(lat);
        const api= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b34af01c8dbd09022bb8e7349ed62a82`;
        fetch (api)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const name = data;
            const temp = data.main;
            const {description} = data.weather[0];
            const{feels_like, humidity } = data.main;
            $('#loc').empty();
            $('#loc').append(name.name);
            $('#numb').empty();
            $('#numb').append(Math.floor(temp.temp-276));
            



            

            


            
            

           
           
            

            
        })

    })


}

})
            

            

            