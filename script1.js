let balance = 0; // Initial balance

document.getElementById("transaction-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  const amount = parseFloat(document.getElementById("amount").value);
  const utr = document.getElementById("utr").value;

  if (isNaN(amount) || utr.trim() === "") {
    alert("Please enter a valid amount and UTR number.");
    return;
  }

  // Update balance
  balance += amount;

  // Update balance display
  document.getElementById("current-balance").textContent = `Current Balance: $${balance.toFixed(2)}`;

  // Add to transaction history
  const historyList = document.getElementById("transaction-history");
  const historyItem = document.createElement("li");
  historyItem.textContent = `UTR: ${utr}, Amount: $${amount.toFixed(2)}`;
  historyList.appendChild(historyItem);

  // Calculate reward points (10 points per 100 units)
  const rewardPoints = Math.floor(amount / 100) * 10;

  // Store reward points in localStorage
  localStorage.setItem("rewardPoints", rewardPoints);

  setTimeout(function() {
    alert("Going to Reward Page");
    // Redirect to reward page
    window.location.href = "reward.html";
  }, 2000);

  // Reset form
  document.getElementById("transaction-form").reset();
});
