const timeLeft = document.getElementById('time-left')

const birthday = new Date('08/09/2022')
const second = 1000
const minute = second*60
const hour = minute*60
const day = hour*24  //24 and all other nos. are in milliseconds by default
let timerId


function countDown(){
    const today = new Date()
    const timeSpan = birthday - today
    console.log(timeSpan)

    if(timeSpan <= (-day)){
        timeLeft.innerHTML = "Hope you had a great Birthday!"
        clearInterval(timerId)
        return
    }

    else if(timeSpan<=0){
        timeLeft.innerHTML = "A Very Happy 21st Birthday to You! " +"You can legally cheers now:)"
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day)/hour)
    const minutes = Math.floor((timeSpan%hour)/minute)
    const seconds = Math.floor((timeSpan%minute)/second)

    timeLeft.innerHTML = 'Time left for the birthday - ' + days + ' days ' + hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds!! '
}

timerId = setInterval(countDown,second)