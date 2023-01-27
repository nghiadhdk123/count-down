var timeNow = new Date();
var countDate = new Date('feb 10, 2024 00:00:00').getTime();
let music = new Audio;
music.src = "/public/y2mate.com - Dan Gibson  A Breath of Spring.mp3"
music.loop = true;

setInterval(countDown , 1000);
playAudio();
function playAudio() {
    Swal.fire({
        title: 'Bạn có muốn thưởng thức âm nhạc không!',
        showDenyButton: true,
        confirmButtonText: 'Đồng ý',
        denyButtonText: 'Không muốn nghe',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            music.play();
        }
      })
}

let chooseDay = document.getElementById('selectDay');

chooseDay.addEventListener('change', (event) => {
        var day = chooseDay.value;
        var nameDay = event.target.options[event.target.selectedIndex].text;
        checkDay(day,nameDay);
})

function checkDay(day,nameDay) {
    let dd = new Date(day);
        var a1 = (dd.getMonth() + 1) +'/'+ dd.getDate() + '/' + timeNow.getFullYear();
        
        var a3 = new Date(a1);

        if(a3 < timeNow) {
            a1 = (dd.getMonth() + 1) +'/'+ dd.getDate() + '/' + (timeNow.getFullYear()+1);
            var days = new Date(a1).getTime();
            notificationDay(days,nameDay);
            
        }else {
            var days = new Date(a1).getTime();
            notificationDay(days,nameDay);
        }
}

function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor(gap % (day) / (hour));
    let m = Math.floor(gap % (hour) / (minute));
    let s = Math.floor(gap % (minute) / (second));

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}

function notificationDay(days,nameDay) {
    let now = new Date().getTime();
    let gap = days - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor(gap % (day) / (hour));
    let m = Math.floor(gap % (hour) / (minute));
    let s = Math.floor(gap % (minute) / (second));

    let timerInterval
    Swal.fire({
    html: "Còn " + d + " ngày nữa đến " + nameDay + ".",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    })
}
