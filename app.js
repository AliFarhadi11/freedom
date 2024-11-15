const xTargetDate = new Date("2024-12-31T00:00:00").getTime();
const yTargetDate = new Date("2024-12-29T00:00:00").getTime();
const zTargetDate = new Date("2024-12-24T00:00:00").getTime();
const TargetDate = new Date("2025-01-13T00:00:00").getTime();

function countdown(targetDate, container) {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    document.getElementById("countdown").innerHTML = "Time's up!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const containerEl = document.getElementById(container);

  const dayEl = containerEl.querySelector("#day span");
  dayEl.innerHTML = days;

  const hourEl = containerEl.querySelector("#hour span");
  hourEl.innerHTML = hours;

  const minuteEl = containerEl.querySelector("#minute span");
  minuteEl.innerHTML = minutes;

  const secondEl = containerEl.querySelector("#second span");
  secondEl.innerHTML = seconds;
}
// *** --- X
setInterval(() => {
  countdown(xTargetDate, "x");
}, 1000);

countdown(xTargetDate, "x");

// *** --- Y
setInterval(() => {
  countdown(yTargetDate, "y");
}, 1000);

countdown(yTargetDate, "y");

// *** --- Z
setInterval(() => {
  countdown(zTargetDate, "z");
}, 1000);
countdown(zTargetDate, "z");

// *** --- ELSE
setInterval(() => {
  countdown(TargetDate, "else");
}, 1000);
countdown(TargetDate, "else");
