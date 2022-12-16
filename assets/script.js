
var inputValue = $('.form-control');
var btn = $('.btn')
var containerEl = document.querySelector('.main-card')


var todayDate = dayjs().format('YYYY-MM-DD')
var tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD')
var thirdDay = dayjs().add(2, 'day').format('YYYY-MM-DD')
var fourthDay = dayjs().add(3, 'day').format('YYYY-MM-DD')
var fifthDay = dayjs().add(4, 'day').format('YYYY-MM-DD')
var sixDay = dayjs().add(5, 'day').format('YYYY-MM-DD')

var myKey = '780441a9c4800cceba01283f606bcc74'
console.log(todayDate)
console.log(tomorrow)
console.log(thirdDay)
console.log(fourthDay)
console.log(fifthDay)
console.log(sixDay)
function getLocation(e) {
    e.preventDefault()
    console.log(inputValue.val())
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + inputValue.val() + '&limit=5&appid=780441a9c4800cceba01283f606bcc74'
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            console.log(data[0])
            var lat = data[0].lat
            var lon = data[0].lon
            getWeather5(lat, lon)
        })
}




function getWeather5(lat, lon) {
    console.log(lat)
    console.log(lon)
    var url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=0c4e7dd6f717e6bcc15f38209147724e&units=imperial&cnt=40'
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var dataList = data.list
            console.log(data.list)



            localStorage.setItem('items', JSON.stringify(dataList))
            var getItems = JSON.parse(localStorage.getItem('items'))
            var arrayDate = []
            // var dataTemp;

            diffDays(getItems)

        })
}

function diffDays(array) {
   
    // var date = array[0].dt_txt.split(' ')[0]
    var objectDates = {}
    array.map(num => {
        var currentDate = num.dt_txt.split(' ')[0]
        if (currentDate === todayDate) {
             objectDates['day1'] = num
        } else if(currentDate === tomorrow){
             objectDates['day2'] = num
        } else if(currentDate === thirdDay) {
            objectDates['day3'] = num
        } else if(currentDate === fourthDay) {
            objectDates['day4'] = num
        } else {
            objectDates['day5'] = num
        }

    })
    displayInfo(objectDates)
    
}


function displayInfo(object) {
    var 
}




btn.on('click', getLocation)