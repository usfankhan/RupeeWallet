// Get reward points from localStorage
const rewardPoints = parseInt(localStorage.getItem("rewardPoints") || 0);

// Display reward points
document.getElementById("reward-points").textContent = rewardPoints;
document.getElementById("reward-message").textContent = `You have ${rewardPoints} reward points.`;

// Function to handle item redemption
function redeemItem(itemName, requiredPoints) {
  if (rewardPoints >= requiredPoints) {
    // Subtract the points from the total
    localStorage.setItem("rewardPoints", rewardPoints - requiredPoints);

    // Show a success alert
    alert(`Congratulations! You can redeem a ${itemName}.`);
    const alertMessage = "Congratulations! You can redeem a ${itemName}.";

    // Update the points on the page
    document.getElementById("reward-points").textContent = rewardPoints - requiredPoints;
    document.getElementById("redeem-info").textContent = `You have redeemed a ${itemName}!`;
  } else {
    // Show a failure alert
    alert(`Sorry, you need at least ${requiredPoints} points to redeem a ${itemName}.`);
  }
}

function showCustomAlert() {
  const alertMessage = "Sorry, you need at least ${requiredPoints} points to redeem a ${itemName}.";
  
  document.getElementById('alertMessage').textContent = alertMessage;
  document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';
}
