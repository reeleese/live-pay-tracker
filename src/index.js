let dollarAmount = 0.00;
let hourlyRate = 1.00; // New variable for hourly rate
let secondsPassed = 0; // New variable to track time passed

function updateDollarAmount() {
    dollarAmount += (hourlyRate / 3600); // Update based on hourly rate
    secondsPassed += 1; // Increment seconds passed

    const hours = Math.floor(secondsPassed / 3600);
    const minutes = Math.floor((secondsPassed % 3600) / 60);
    const seconds = secondsPassed % 60;
    const displayMessage = `You have made $${dollarAmount.toFixed(2)} in the last ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('dollar-amount').innerText = displayMessage;
}

function resetDollarAmount() {
    dollarAmount = 0.00;
    secondsPassed = 0;
    document.getElementById('dollar-amount').innerText = `You have made $0.00 in the last 0:00:00`;
}

setInterval(updateDollarAmount, 1000);
