document.getElementById("diagnosisForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const bp = parseInt(document.getElementById("bp").value);
  const glucose = parseInt(document.getElementById("glucose").value);
  const cholesterol = parseInt(document.getElementById("cholesterol").value);

  let riskScore = 0;
  if (age > 50) riskScore++;
  if (bp > 140) riskScore++;
  if (glucose > 120) riskScore++;
  if (cholesterol > 200) riskScore++;

  const result = document.getElementById("result");
  if (riskScore >= 3) {
    result.textContent = "High risk of heart disease or diabetes. Please consult a doctor.";
    result.style.color = "red";
  } else {
    result.textContent = "Low risk. Keep monitoring your health.";
    result.style.color = "green";
  }
});
