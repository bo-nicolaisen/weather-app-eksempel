/* global variables */

let myApp = null;

let dayData = null;
let weekData = null;
let currentViewTime = 0;

// Functions ------------------------------------------------------------------------------

window.addEventListener('load', initApp);

function initApp() {
    console.log('init app');
    myApp = document.getElementById('app');
    buildLoadingScreen();

    fetchData();
}



// controller code --------------------------------------------------------------------------

async function fetchData() {
    // hent data fra open meto
    console.log('fetch data');

    //dummy code
    let myLoadTime = 2000;
    await new Promise(resolve => setTimeout(resolve, myLoadTime));

    const rawData =

    {
        day: [
            {
                hour: 0,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 12,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 2,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 3,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 4,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 5,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 6,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 7,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 8,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 9,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 10,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 11,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 12,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 13,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 14,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 15,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 16,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 17,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 18,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 19,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 20,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 21,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 22,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            },
            {
                hour: 23,
                temperature: 10,

                feelsLike: 8,
                sunHeight: 0.1,
                windSpeed: 12,
                windDirection: 240,
                weatherCode: 3
            }

        ],
        week: [
            {
                day: 1,
                temperature: 1,
                feelsLike: -2,
                windSpeed: 21,
                windDirection: 340,
                weatherCode: 1
            },
            {
                day: 2,
                temperature: 1,
                feelsLike: -2,
                windSpeed: 21,
                windDirection: 340,
                weatherCode: 1
            },
            {
                day: 3,
                temperature: 1,
                feelsLike: -2,
                windSpeed: 21,
                windDirection: 340,
                weatherCode: 1
            },
            {
                day: 4,
                temperature: 1,
                feelsLike: -2,
                windSpeed: 21,
                windDirection: 340,
                weatherCode: 1
            },
            {
                day: 5,
                temperature: 1,
                feelsLike: -2,
                windSpeed: 21,
                windDirection: 340,
                weatherCode: 1
            }
        ]

    };

    //dummy end

    dataConversion(rawData);
}


function dataConversion(rawData) {
    console.log('data conversion ');

    dayData = makeDayData(rawData);
    weekData = makeWeekData(rawData);
    buildDayView();

}

function makeWeekData(rawData) {
    console.log('make week data');

    let myWeekData = rawData.week;
    console.log(myWeekData[0]);
    return myWeekData;
}

function makeDayData(rawData) {
    console.log('make day data');

    let myDayData = rawData.day;
    console.log(myDayData[0]);
    return myDayData;
}




// view code ----------------------------------------------------------------------------------------
function buildLoadingScreen() {

    console.log('buildLoadingScreen: ' + myApp);

    myApp.innerHTML = "<h1>loading</h1>";
}

function buildDayView() {
    //console.log('buildDayView: ' + dayData[0]);


    myApp.innerHTML = "day wiew implementation"

    myDay = dayData[currentViewTime];

    let mydayElement = document.createElement('h2');
    mydayElement.innerText = myDay.hour;

    let myTemperatureElement = document.createElement('h3');
    myTemperatureElement.innerText = myDay.temperature;

    let myFeelsLikeElement = document.createElement('h3');
    myFeelsLikeElement.innerText = myDay.feelsLike;

    let myWindDirectionElement = document.createElement('div');
    myWindDirectionElement.innerText = myDay.windDirection;

    let MyWindStrength = document.createElement('p');
    MyWindStrength.innerText = myDay.windSpeed;

    myWindDirectionElement.appendChild(MyWindStrength);


    let myWeatherTypeElement = document.createElement('h3');
    myWeatherTypeElement.innerText = myDay.weatherCode;


    myApp.appendChild(mydayElement);
    myApp.appendChild(myTemperatureElement);
    myApp.appendChild(myFeelsLikeElement);

    myApp.appendChild(myWeatherTypeElement);
    myApp.appendChild(myWindDirectionElement);



}


function buildWeekView() {
    console.log('buildWeekView: ' + weekData[0]);
    myApp.innerHTML = "<h1>week</h1>"



}

















