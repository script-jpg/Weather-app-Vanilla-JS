window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let image = document.querySelector('.icon');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            var skycons = new Skycons({ "color": "white" });
            
            

            const url = 'https://api.aerisapi.com/observations/'+lat+','+long+'?&format=json&filter=allstations&limit=1&client_id=ZwhAdDamx0kRV4cYygGzX&client_secret=TNK5gDBsqEqECUp2tcuZa9xsbU41QC51Ni3X1Z1o';
            console.log(url);
            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    if (!json.success) {
                        console.log('Oh no!')
                    } else {
                        console.log(json)
                        //console.log(json.response.ob.weather)
                        const {tempC,weather,icon} = json.response.ob;
                        const {tz} = json.response.profile;
                        temperatureDescription.innerHTML = weather;
                        temperatureDegree.innerHTML=tempC;
                        locationTimezone.innerHTML = tz;
                        document.getElementById("icon").src="https://cdn.aerisapi.com/wxicons/v2/"+icon;
                        //skycons.add("icon", Skycons.CLEAR_DAY);


                        //skycons.play();
                        
                        
                    }
                });
            
            
            

            





        });




    }
    else
        console.log("geolocation is not supported");

    

    /*function setIcons(icon,iconID) {
        const skycons = new Skycons({color: "white"});
        skycons.play();
        return skycons.set(iconID,sun)


        
    }
    */



});


