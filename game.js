document.addEventListener("DOMContentLoaded", () => {
    let clickCount = 0;

    const clickCounterElement = document.getElementById("clickCounter");
    const leaderboardButton = document.getElementById("leaderboardButton");

    console.log("Script loaded. Elements:", {
        clickCounterElement,
        leaderboardButton
    });

    if (clickCounterElement && leaderboardButton) {
        document.addEventListener("click", (event) => {
            // Prevent incrementing click count when clicking on the counter or leaderboard button
            if (event.target.id === "clickCounter" || event.target.id === "leaderboardButton") return;

            clickCount++;
            clickCounterElement.textContent = `Clicks: ${clickCount}`;
            console.log(`Clicked! Count: ${clickCount}`);
        });

        leaderboardButton.addEventListener("click", () => {
            // Implement leaderboard display logic here
            alert("Leaderboard functionality to be implemented");
        });
    } else {
        console.error("Element not found: ", {
            clickCounterElement,
            leaderboardButton
        });
    }
});
