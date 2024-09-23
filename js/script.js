function correctDate(date){
    return date < 10 ? "0" + date : date;
}


function sale () {
    let saleDate = new Date(2024, 8, 25)
    let currentDate = new Date()
    let date = saleDate - currentDate
    let day = Math.floor(date/(24*60*60*1000));
    let hours = Math.floor((date%(24*60*60*1000))/(60*1000*60));
    let minutes = Math.floor((date%(60*60*1000))/(60*1000));
    let seconds = Math.floor((date%(60*1000))/(1000));
    let timeValue = document.getElementsByClassName("date");
    timeValue[0].innerHTML = correctDate (day);
    timeValue[1].innerHTML = correctDate (hours);
    timeValue[2].innerHTML = correctDate (minutes);
    timeValue[3].innerHTML = correctDate (seconds);
    if(date <= 0) {
        timeValue[0].innerHTML = "00";
        timeValue[1].innerHTML = "00";
        timeValue[2].innerHTML = "00";
        timeValue[3].innerHTML = "00";
    }
    
    let timeValue2 = document.getElementsByClassName("date2");
    timeValue2[0].innerHTML = correctDate (day);
    timeValue2[1].innerHTML = correctDate (hours);
    timeValue2[2].innerHTML = correctDate (minutes);
    timeValue2[3].innerHTML = correctDate (seconds);
    if(date <= 0) {
        timeValue2[0].innerHTML = "00";
        timeValue2[1].innerHTML = "00";
        timeValue2[2].innerHTML = "00";
        timeValue2[3].innerHTML = "00";
    }
}
sale();
setInterval(() => {
    sale()
}, 1000)