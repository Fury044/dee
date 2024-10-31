onload = () => {
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  // Changing text functionality
  const phrases = ["Pretty", "Beautiful", "Dumb"]; // Array of changing phrases
  let index = 0; // Index to track current phrase

  // Function to update the text
  function updateText() {
      const changingTextElement = document.getElementById("changingText");
      changingTextElement.textContent = phrases[index]; // Update the text
      index = (index + 1) % phrases.length; // Cycle through phrases
  }

  // Update text every 250 milliseconds (0.25 seconds)
  setInterval(updateText, 250);
};
