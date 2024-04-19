document.addEventListener("DOMContentLoaded", function() {
    const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // Sort high scores by score in descending order
    highScores.sort((a, b) => b.score - a.score);

    // Populate the leaderboard
    highScoresList.innerHTML = highScores
      .map(score => {
        return `<li class="high-score">${score.name} | ${score.score}</li>`;
      })
      .join("");
});

