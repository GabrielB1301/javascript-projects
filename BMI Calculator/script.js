const form = document.querySelector("form");
const bmiDisplay = document.querySelector(".bmi");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  if (!Number.isNaN(height) && !Number.isNaN(weight)) {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    checkBMI(bmi);
  } else {
    alert("Os valores devem ser números!");
  }
});

function checkBMI(bmi) {
  let html = "";
  if (bmi < 18.6) {
    html = `<p>Your BMI is ${bmi}, and it's under weight(18.6)</p>`;
  }
  if (bmi > 18.6 && bmi < 24.9) {
    html = `<p>Your BMI is ${bmi}, and it's normal weight</p>`;
  }
  if (bmi > 24.9) {
    html = `<p>Your BMI is ${bmi}, and it's over weight(24.9)</p>`;
  }
  bmiDisplay.insertAdjacentHTML("afterend", html);
}
