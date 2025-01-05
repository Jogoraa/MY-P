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
setInterval(changeText, 3000);

// Circle Skills section
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
  var dots = elem.getAttribute('data-dots');
  var marked = elem.getAttribute('data-percent');
  var percent = Math.floor(dots * marked / 100);
  var rotate = 360 / dots;
  var points = "";

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked');
  }
});




//mix it up portifolio section
const containerEl = document.querySelector('.portfolio-gallery');
mixitup(containerEl);

// active menu
const menuEl = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section')
function activeMenu() {
  let len = section.length

  while (--len && window.scrollY + 97 < section[len].offsetTop) { }
  menuEl.forEach(sec => sec.classList.remove('active'));
  menuEl[len].classList.add('active');
}


// Sticky Nav bar------------------------
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 50);
})

// toggle Icon  Nav bar------------------------

let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};


window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navlist.classList.remove('open');
};
// Parallax Effect ------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items');
    } else {
      entry.target.classList.remove('show-items');
    }
  });
}, {
  threshold: 0.1, // Adjusts how much of the element needs to be visible to trigger the observer
});

// Observe elements with specific classes
const scrollScale = document.querySelectorAll('.scroll-scale');
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll('.scroll-bottom');
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll('.scroll-top');
scrollTop.forEach((el) => observer.observe(el));



// Email js



// Initialize EmailJS
emailjs.init('EAEAHWDf60oL7AlTh'); // Replace with your actual EmailJS public key

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Send form data using EmailJS
  emailjs.sendForm('service_nrmippa', 'template_r3euf3e', this)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      document.getElementById('contact-form').reset(); // Reset the form
    }, function (error) {
      console.error('FAILED...', error);
      alert('Oops! Something went wrong. Please try again.');
    });
});


  // Add functionality for "Download CV"
  document.querySelector(".btn-box .btn:first-child").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    // Trigger file download
    const link = document.createElement("a");
    link.href = "resume/Dawit_Jogora_CV.pdf"; // Replace with the actual CV file path
    link.download = "Dawit_Jogora_CV.pdf"; // Set the downloaded file name
    link.click();
  });

  // Add functionality for "Hire Me"
  document.querySelector(".btn-box .btn:last-child").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    // Redirect to contact or hire page
    window.location.href = "#contact"; // Replace with the actual contact page URL
  });



  // Read more about
document.querySelector(".read-more-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents default link behavior

  const moreText = document.querySelector(".more-text");
  const dots = document.querySelector(".dots");
  const btn = event.target;

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline"; // Show additional text
    dots.style.display = "none"; // Hide dots
    btn.textContent = "Read Less"; // Change button text
  } else {
    moreText.style.display = "none"; // Hide additional text
    dots.style.display = "inline"; // Show dots
    btn.textContent = "Read More"; // Reset button text
  }
});
