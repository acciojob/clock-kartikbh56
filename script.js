//your JS code here. If required.
function updateTimer() {
  const timerElement = document.getElementById("timer");

  const now = new Date();

  // Format: e.g., Thu Jul 04 2025 14:23:15
  const formatted = now.toString().split('GMT')[0].trim();

  timerElement.textContent = formatted;
}

// Initial call
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
