const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const bearGif = document.getElementById("bear-gif");
const initialButtons = document.getElementById("initial-buttons");
const tripOptions = document.getElementById("trip-options");

function moveNoButton() {
  noBtn.style.position = "absolute";
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.left = `${Math.max(10, x)}px`;
  noBtn.style.top = `${Math.max(10, y)}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeey! It's a trip! 🎉";
  bearGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  initialButtons.style.display = "none";
  tripOptions.style.display = "block";
});

function selectDay(chosenDay) {
  question.innerHTML = `Pack your bags! Trip locked in for ${chosenDay}! 🎒✈️`;
  tripOptions.style.display = "none";
}