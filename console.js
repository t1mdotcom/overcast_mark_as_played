// Get all the mark as played buttons
const buttons = Array.from(document.querySelectorAll('.overcast-mark-as-played-btn'));

// Function to generate a random delay between 50ms and 2000ms (2 seconds)
function getRandomDelay() {
  return Math.floor(Math.random() * 1950) + 50;
}

// Function to click the buttons with a delay between each click
async function clickButtonsWithDelay() {
  // Sort the buttons based on their order of appearance on the page
  const sortedButtons = buttons.sort((buttonA, buttonB) => {
    const rectA = buttonA.getBoundingClientRect();
    const rectB = buttonB.getBoundingClientRect();
    return rectA.top - rectB.top || rectA.left - rectB.left;
  });

  for (let i = 0; i < sortedButtons.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
    sortedButtons[i].click();
  }
}

// Call the function to click the buttons with a delay between each click
clickButtonsWithDelay();
