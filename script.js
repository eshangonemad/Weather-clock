var link={}
var sru= document.getElementById('sru');
// Concatenate a zero to the left of every single-digit time frame
function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame;
}

function realTime() {
    let date = new Date();
    let sec = date.getSeconds();
    let mon = date.getMinutes();
    let hr = date.getHours();
    // 12-hour time
    // If the hour equals 0 or 12, the remainder equals 0, so output 12 instead. (0 || 12 = 12)
    document.getElementById('time').textContent = `${concatZero((hr % 12) || 12)} : ${concatZero(mon)} ${hr >= 12 ? 'PM' : 'AM'}`;
}

setInterval(realTime, 1000);
function fetchDataAndProcess() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast', true);

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var myObject = JSON.parse(request.responseText);
            console.log(myObject);

            var link = myObject['items'][0]['forecasts'][29]['forecast'];
            console.log(link);
            var type = link.toLowerCase();
            console.log(type);

            updateVideo(type);
        }
    };

    request.send(null);
}

function updateVideo(type) {
    console.log('Updating video with type:', type);

    // Create a new source 
    var source= document.getElementById('sec');

    if (type == 'cloudy') {
        console.log('.cloudy');
        source.src = 'wea/CLOUDY.mp4';
    } else if (type == 'partly cloudy (day)') {
        console.log('.partly cloudy (day)');
        source.src = 'wea/PCLOUDY.mp4';
    } else if (type == 'thundery showers') {
        console.log('.thundery showers');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'windy') {
        console.log('.windy');
        source.src = 'wea/WINDY.mp4';
    } else if (type == 'showers') {
        console.log('.showers');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'partly cloudy (night)') {
        console.log('.partly cloudy (night)');
        source.src = 'wea/PCLOUDY.mp4';
    } else if (type == 'heavy thundery showers with gusty winds') {
        console.log('.heavy thundery showers with gusty winds');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'heavy showers') {
        console.log('.heavy showers');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'passing showers') {
        console.log('.passing showers');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'heavy thundery showers') {
        console.log('.heavy thundery showers');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'moderate showers') {
        console.log('.moderate showers');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'hazy') {
        console.log('.hazy');
        source.src = 'wea/HAZY.mp4';
    } else if (type == 'overcast') {
        console.log('.overcast');
        source.src = 'wea/OVERCAST.mp4';
    } else if (type == 'heavy thundery showers with heavy winds') {
        console.log('.heavy thundery showers with heavy winds');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'light showers') {
        console.log('.light showers');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'showers in vicinity') {
        console.log('.showers in vicinity');
        source.src = 'wea/RAIN.mp4';
    } else if (type == 'heavy thunderstorms') {
        console.log('.heavy thunderstorms');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'moderate thunderstorms') {
        console.log('.moderate thunderstorms');
        source.src = 'wea/TSHOWER.mp4';
    } else if (type == 'thundery showers with gusty winds') {
        console.log('.thundery showers with gusty winds');
        source.src = 'wea/TSHOWER.mp4';
    }else if (type == 'light rain' || type == 'moderate rain') {
        console.log('.rain');
        source.src = 'wea/RAIN.mp4';
    }else if (type == 'fair (day)') {
        console.log('.fair (day)');
        source.src = 'wea/FAIR.mp4';
    }else if (type == 'fair (night)') {
        console.log('.fair (night)');
        source.src = 'wea/FAIR.mp4';
    } else {
        console.log('.default');
        source.src = 'wea/FAIR.mp4';
    }
}

fetchDataAndProcess();
setInterval(fetchDataAndProcess, 600000);

function date(){
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()];
    console.log(days[d.getDay()]);
}
date()
setInterval(date, 18000000);
