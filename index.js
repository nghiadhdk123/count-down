const countDate = new Date('jan 22, 2023 00:00:00').getTime();
let music = new Audio;
music.src = "/public/y2mate.com - Dan Gibson  A Breath of Spring.mp3"
music.loop;

setInterval(countDown , 1000);
// playAudio();
function playAudio() {
    Swal.fire({
        title: 'Bạn có muốn thưởng thức âm nhạc không!',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Đồng ý',
        denyButtonText: 'Không muốn nghe',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            music.play();
        }
      })
}

function countDown() {
    const now = new Date().getTime();
		gap = countDate - now;

		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		const d = Math.floor(gap / (day));
		const h = Math.floor(gap % (day) / (hour));
		const m = Math.floor(gap % (hour) / (minute));
		const s = Math.floor(gap % (minute) / (second));

		document.getElementById('days').innerHTML = d;
		document.getElementById('hours').innerHTML = h;
		document.getElementById('minutes').innerHTML = m;
		document.getElementById('seconds').innerHTML = s;
}