function pogoda() {
    const apiKey = '0e3d38ad12be37cada7e57ba9a32980e';
    const city = document.getElementById("inp").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("hq").innerHTML = "Температура: " + data.main.temp + " °C";
        document.getElementById("hq1").innerHTML = "Погода: " + data.weather[0].main;

        // Очищення попереднього зображення
        const weatherImageDiv = document.getElementById("weatherImage");
        weatherImageDiv.innerHTML = ''; // Очистити старе зображення

        const pog = data.weather[0].main;
        let imgSrc;

        switch (pog) {
            case "Clear":
                imgSrc = 'https://openweathermap.org/img/wn/01d@2x.png';
                break;
            case "Clouds":
                imgSrc = 'https://openweathermap.org/img/wn/02d@2x.png';
                break;
            case "Rain":
                imgSrc = 'https://openweathermap.org/img/wn/09d@2x.png';
                break;
            case "Thunderstorm":
                imgSrc = 'https://openweathermap.org/img/wn/11d@2x.png';
                break;
            case "Snow":
                imgSrc = 'https://openweathermap.org/img/wn/13d@2x.png';
                break;
            case "Mist":
                imgSrc = 'https://openweathermap.org/img/wn/50d@2x.png';
                break;
            default:
                imgSrc = '';
                break;
        }

        if (imgSrc) {
            const img = document.createElement('img');
            img.src = imgSrc;
            weatherImageDiv.appendChild(img);
        }
    })
    .catch(error => {
        console.error('Є проблема з fetch:', error);
    });
}