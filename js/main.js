const hours = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const amPm = document.getElementById('ampm');


function clock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let apm = 'A.M';

    if (hour > 12) {
        hour = hour - 12;
        apm = 'P.M';
    }

    hour = hour < 10 ? '0' + hour: hour;
    minute = minute < 10 ? '0' + minute: minute;
    second = second < 10 ? '0' + second: second;


    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
    amPm.innerText = apm;
    setTimeout(() => {
        clock();
    }, 1000);

}
clock();