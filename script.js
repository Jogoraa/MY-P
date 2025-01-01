// Get all word elements
let words = document.querySelectorAll(".word");

// Split each word into individual letters
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.appendChild(span); // Fixed 'append' to 'appendChild'
  });
});

// Word animation control variables
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

// Initial word visibility
words[currentWordIndex].style.opacity = "1"; // Ensure current word is visible initially

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  // Animate letters of the current word out
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter-out";
    }, i * 80);
  });

  // Ensure next word becomes visible
  nextWord.style.opacity = "1"; // Added style assignment to control opacity

  // Animate letters of the next word in
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter-behind";
    setTimeout(() => {
      letter.className = "letter-in";
    }, 340 + i * 80);
  });

  // Update the currentWordIndex
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);