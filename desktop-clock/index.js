const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const ampm = document.getElementById("ampm");


function updateTime() {
    let date = new Date();
    let hr =   date.getHours();
    let min =  date.getMinutes();
    let sec =  date.getSeconds();
    let pmam = "AM";
    if (hr > 12){
        hr -= 12;
        pmam = "PM";
    }
    h.innerText = hr < 10 ? "0" + hr : hr;
    m.innerText = min < 10 ? "0" + min : min;
    s.innerText = sec < 10 ? "0" + sec : sec;
    ampm.innerText = pmam;
    setTimeout(()=>{
        updateTime()
    }, 1000);
}

updateTime();