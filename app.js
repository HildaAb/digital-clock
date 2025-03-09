const hourEl = document.querySelector("#hours");
const minEl = document.querySelector("#minutes");
const secEl = document.querySelector("#seconds");
const amEl = document.querySelector("#am");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = "AM";

  if (h > 12) {
    h = h - 12;
    am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerHTML = h;
  minEl.innerHTML = m;
  secEl.innerHTML = s;
  amEl.innerHTML = am;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
