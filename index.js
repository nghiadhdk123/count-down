var timeNow = new Date();
var countDate = new Date('feb 10, 2024 00:00:00').getTime();
let music = new Audio;

music.src = "/public/y2mate.com - Dan Gibson  A Breath of Spring.mp3"
music.loop = true;

// Hàm tạo sao băng
function creartMeteor() {
    let container = document.querySelector('#container'); 
    let widthContainer = container.offsetWidth;
    let meteor = document.createElement('span');
    let randomLeft = Math.floor(Math.random() * widthContainer);
    meteor.classList.add('meteor');
    meteor.style.left = randomLeft + 'px';
    container.appendChild(meteor);


    setTimeout(function () { 
        container.removeChild(meteor)
    },10000);
}



setInterval(countDown , 1000);

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

getDay();
function getDay() {
    let text = "";
    let textDate = "";
    let day = new Date().getDay() + 1;
    let today = document.getElementById('day-to-day');
    let dateNow = document.getElementById('date-to-day');
    let newOld = new Date();
    let date = newOld.getDate();
    let month = newOld.getMonth()+1;
    let year = newOld.getFullYear();

    text = "Thứ " + day;
    textDate = date + "/" + month + "/" + year;
    if(day == 1) {
        text = "Chủ nhật";
    }
    today.innerHTML = text;
    dateNow.innerHTML = textDate;

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

$(document).ready(function () {
    $("#button-play").on('click', function() {
        $("#container").css({
            "top": "0%",
            "opacity": "1"
        });
        music.play();
        setInterval(function() {
            creartMeteor()
        },1000);
    })

    $("#button-pause").on('click', function() {
        $("#container").css({
            "top": "100%",
            "opacity": "0"
        });
        music.pause();
        clearInterval(function() {
            creartMeteor()
        },1000);
    })
});
