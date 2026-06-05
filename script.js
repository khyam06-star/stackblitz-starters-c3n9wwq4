// 1. Dynamic Greeting based on time of day
const greetingElement = document.getElementById('dynamic-greeting');
const currentHour = new Date().getHours();
let greetingText = 'Welcome to my portfolio!';

if (currentHour < 12) {
  greetingText = 'Good Morning! Welcome to my portfolio.';
} else if (currentHour < 18) {
  greetingText = 'Good Afternoon! Welcome to my portfolio.';
} else {
  greetingText = 'Good Evening! Welcome to my portfolio.';
}
greetingElement.textContent = greetingText;

// 2. Light / Dark Theme Switcher using DOM manipulation
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});

// 3. Interactive DOM Effect: Quick color change on name click
const nameHeader = document.getElementById('user-name');
nameHeader.addEventListener('click', () => {
  nameHeader.style.color = '#3498db';
  setTimeout(() => {
    nameHeader.style.color = '';
  }, 1000);
});

// =========================================================
// 4. Week 12: Hobby Gallery (Arrays & Loops Implementation)
// =========================================================

// Array holding web placeholders matching your uploaded South Korea photos
const hobbyImages = [
  'https://i.postimg.cc/Y9t91z7q/Whats-App-Image-2026-05-25-at-22-16-45.jpg',
  'https://i.postimg.cc/rsM8rSB0/Whats-App-Image-2026-05-25-at-22-16-41.jpg',
  'https://i.postimg.cc/g07sjs64/Whats-App-Image-2026-05-25-at-22-16-43.jpg',
  'https://i.postimg.cc/JnTk02Xz/Whats-App-Image-2026-05-25-at-22-16-52.jpg',
];

// Start tracking index position at 0
let currentIndex = 0;

// Grab gallery DOM elements
const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');

// Click Event Listener to seamlessly change images
nextBtn.addEventListener('click', () => {
  // Progress index forward
  currentIndex++;

  // Prevent out-of-bounds error: reset to index 0 when hitting array length
  if (currentIndex >= hobbyImages.length) {
    currentIndex = 0;
  }

  // Assign new array value to image node
  galleryImg.src = hobbyImages[currentIndex];

  // Log the event tracker activity cleanly to developer tools console
  console.log(`Gallery rotated safely to index: [${currentIndex}]`);
});
console.log('Hello!');
