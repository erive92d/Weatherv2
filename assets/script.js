
var inputValue = $('.form-control');
var btn = $('.btn')
var containerEl = $('.main-card')

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
            var sky;
            console.log(data.list)



            localStorage.setItem('items', JSON.stringify(dataList))
            var getItems = JSON.parse(localStorage.getItem('items'))
            var arrayDate = []
            // var dataTemp;
            var dataDate;;
            for (var i = 0; i < getItems.length; i++) {
                // dataTemp = getItems[i].main.temp
                dataDate = getItems[i].dt_txt.split(' ')[0]
                // sky = getItems[i].weather[0].main
                arrayDate.push(dataDate)



            }
            diffDays(dataList)

        })

}

function diffDays(data) {
    var dataArray = []
    for (var i = 0; i < data.length; i++) {
        var dataDates = data[i].dt_txt.split(' ')[0]
        dataArray.push(dataDates)

    }

    var first = []
    var second = []
    var third = []
    var fourth = []
    var fifth = []
    var sixth = []
    console.log(data[0])
    for (var i = 0; i < dataArray.length; i++) {
        if (todayDate === dataArray[i]) {
            first.push(data[i])
        } else if (tomorrow === dataArray[i]) {
            second.push(data[i])
        } else if (thirdDay === dataArray[i]) {
            third.push(data[i])
        } else if (fourthDay === dataArray[i]) {
            fourth.push(data[i])
        } else if (fifthDay === dataArray[i]) {
            fifth.push(data[i])
        } else {
            sixth.push(data[i])
        }


    }
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(fourth)
    console.log(fifth)
    console.log(sixth)
    var test = {}
    test['day1'] = first
    test['day2'] = second
    test['day3'] = third
    test['day4'] = fourth
    test['day5'] = fifth
    test['day6'] = sixth

    displayInfo(test)


}







function displayInfo(data) {
    console.log(data)
    var dayDiv = document.createElement('div')
    dayDiv.textContent = todayDate
    dayDiv.classList.add('card')
    var dayDiv2 = document.createElement('div')
    dayDiv2.textContent = tomorrow
    dayDiv2.classList.add('card')
    var dayDiv3 = document.createElement('div')
    dayDiv3.textContent = thirdDay
    dayDiv3.classList.add('card')
    var dayDiv4 = document.createElement('div')
    dayDiv4.textContent = fourthDay
    dayDiv4.classList.add('card')
    var dayDiv5 = document.createElement('div')
    dayDiv5.textContent = fifthDay
    dayDiv5.classList.add('card')


    var day = data.day1
    if(day.length === 0) {
        dayDiv.textContent = 'Day Ended'
    }
    
    for (var i = 0; i < day.length; i++) {
        
        var timeTemp = document.createElement('div')
       
        timeTemp.classList.add('time-temp')
        if( day[i].weather[0].main === 'Rain'){
            timeTemp.classList.add('rain')
        } else if(day[i].weather[0].main === 'Clouds'){
            timeTemp.classList.add('clouds')
        } else {
            timeTemp.classList.add('clear')
        }
        
        var day2h3 = document.createElement('p')
        var dayh2 = document.createElement('p')
        dayh2.textContent = day[i].dt_txt.split(' ')[1]
        day2h3.textContent = day[i].main.temp
        timeTemp.append(dayh2,day2h3)
        
        dayDiv.append(timeTemp)

    }
    var day2 = data.day2
    for (var i = 0; i < day2.length; i++) {
        var timeTemp = document.createElement('div')
        timeTemp.classList.add('time-temp')
        if( day2[i].weather[0].main === 'Rain'){
            timeTemp.classList.add('rain')
        } else if(day2[i].weather[0].main === 'Clouds'){
            timeTemp.classList.add('clouds')
        } else {
            timeTemp.classList.add('clear')
        }
       
        var day2h3 = document.createElement('p')
        var dayh2 = document.createElement('p')
        dayh2.textContent = day2[i].dt_txt.split(' ')[1]
        day2h3.textContent = day2[i].main.temp
        timeTemp.append(dayh2,day2h3)
        dayDiv2.append(timeTemp)

    }
    var day3 = data.day3
    for (var i = 0; i < day3.length; i++) {
        var timeTemp = document.createElement('div')
        timeTemp.classList.add('time-temp')
        if( day3[i].weather[0].main === 'Rain'){
            timeTemp.classList.add('rain')
        } else if(day3[i].weather[0].main === 'Clouds'){
            timeTemp.classList.add('clouds')
        } else {
            timeTemp.classList.add('clear')
        }
        var day2h3 = document.createElement('p')
        var dayh2 = document.createElement('p')
        dayh2.textContent = day3[i].dt_txt.split(' ')[1]
        day2h3.textContent = day3[i].main.temp
        timeTemp.append(dayh2,day2h3)
        dayDiv3.append(timeTemp)

    }
    var day4 = data.day4
    for (var i = 0; i < day4.length; i++) {
        var timeTemp = document.createElement('div')
        timeTemp.classList.add('time-temp')
        if( day4[i].weather[0].main === 'Rain'){
            timeTemp.classList.add('rain')
        } else if(day4[i].weather[0].main === 'Clouds'){
            timeTemp.classList.add('clouds')
        } else {
            timeTemp.classList.add('clear')
        }
        var day2h3 = document.createElement('p')
        var dayh2 = document.createElement('p')
        dayh2.textContent = day4[i].dt_txt.split(' ')[1]
        day2h3.textContent = day4[i].main.temp
        timeTemp.append(dayh2,day2h3)
        dayDiv4.append(timeTemp)

    }
    var day5 = data.day5
    for (var i = 0; i < day5.length; i++) {
        var timeTemp = document.createElement('div')
        timeTemp.classList.add('time-temp')
        if( day5[i].weather[0].main === 'Rain'){
            timeTemp.classList.add('rain')
        } else if(day5[i].weather[0].main === 'Clouds'){
            timeTemp.classList.add('clouds')
        } else {
            timeTemp.classList.add('clear')
        }
        var day2h3 = document.createElement('p')
        var dayh2 = document.createElement('p')
        dayh2.textContent = day5[i].dt_txt.split(' ')[1]
        day2h3.textContent = day5[i].main.temp
        timeTemp.append(dayh2,day2h3)
        dayDiv5.append(timeTemp)

    }

    containerEl.append(dayDiv, dayDiv2,dayDiv3,dayDiv4,dayDiv5)



}



btn.on('click', getLocation)