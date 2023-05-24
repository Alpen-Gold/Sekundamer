let soatBy = document.querySelector(".soat");
let minutBy = document.querySelector(".minut");
let sekuntBy = document.querySelector(".sekunt");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let inputHour = document.querySelector(".inputHour");
let inputMinut = document.querySelector(".inputMinut");
let inputSekunt = document.querySelector(".inputSekunt");

let audio = document.querySelector(".audio");
audio.style.display = "none";

let error = document.querySelector(".error");

let time = 0;
// start button
let interval;
let soat = 0;
let minut = 0;
let sekunt = 0;

let milli = () => {
  console.log(time);
  soat = Math.floor(time / 3600);
  minut = Math.floor(time / 60) % 60;
  sekunt = Math.floor(time % 60);

  soatBy.innerHTML = soat;
  minutBy.innerHTML = minut;
  sekuntBy.innerHTML = sekunt;

  if (soat < 10) {
    soatBy.innerHTML = "0" + soat;
  }

  if (minut < 10) {
    minutBy.innerHTML = "0" + minut;
  }
  if (sekunt < 10) {
    sekuntBy.innerHTML = "0" + sekunt;
  }

  if (time === 0) {
    inputHour.value = null;
    inputMinut.value = null;
    inputSekunt.value = null;
    return;
  }

  if (time === 11) {
    audio.play();
  }

  time--;
};

startBtn.addEventListener("click", () => {
  if (time === 0) {
    if (
      +inputHour.value === 0 &&
      +inputMinut.value === 0 &&
      +inputSekunt.value === 0
    ) {
      error.style.opacity = "99";
      error.innerHTML = "Son kiritmadingiz !!!";
    } else {
      error.innerHTML = ".";
      error.style.opacity = "0";

      time = +inputHour.value * 3600;
      time += +inputMinut.value * 60;
      time += +inputSekunt.value;

      inputHour.value = Math.floor(time / 3600);
      inputMinut.value = Math.floor((time / 60) % 60);
      inputSekunt.value = Math.floor(time % 60);
    }
  }

  clearInterval(interval);
  interval = setInterval(milli, 1000);
});

// stop button

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// reset button

resetBtn.addEventListener("click", () => {
  soat = 0;
  sekunt = 0;
  minut = 0;
  milliSekunt = 0;
  time = 0;

  clearInterval(interval);

  inputHour.value = null;
  inputMinut.value = null;
  inputSekunt.value = null;

  soatBy.innerHTML = "00";
  minutBy.innerHTML = "00";
  sekuntBy.innerHTML = "00";
  milliSekuntBy.innerHTML = "00";
});
