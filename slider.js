// Select navigation elements (right and left arrow buttons)
const right = document.querySelector(".right");
const left = document.querySelector(".left");

// Select all images that act as slides and the slider container
const images = document.querySelectorAll(".image");
const slider = document.querySelector(".slider");

// Select the container where the navigation buttons (indicators) will be added
const bottom = document.querySelector(".bottom");

// Initialize the slide counter (starting at 1) and get the total number of slides
let slideNumber = 1;
let lengthSlider = images.length;

// Create navigation buttons (indicators) for each slide
for (let i = 0; i < lengthSlider; i++) {
  const div = document.createElement("div");
  div.classList = "button"; // Each indicator gets the class "button"
  bottom.appendChild(div);  // Append each button to the bottom container
}

// Select all the created navigation buttons
const buttons = document.querySelectorAll(".button");

// Highlight the first button to indicate the initial active slide
buttons[0].style.backgroundColor = "white";

/**
 * resetBg - Resets the background color of all indicator buttons to transparent
 */
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

// Add click event listeners to each navigation button
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg(); // Reset the background color for all buttons
    // Move the slider to the corresponding slide
    slider.style.transform = `translateX(-${i * 800}px)`;
    // Update the current slide number (i starts from 0, so slideNumber becomes i+1)
    slideNumber = i + 1;
    // Highlight the clicked button to indicate the active slide
    button.style.backgroundColor = "white";
  });
});

/**
 * nextSlider - Advances the slider to the next slide
 * It translates the slider container left by (slideNumber * 800) pixels,
 * then increments the slideNumber.
 */
const nextSlider = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

/**
 * prevSlider - Moves the slider to the previous slide
 * It calculates the translation using (slideNumber - 2) * 800 pixels,
 * then decrements the slideNumber.
 */
const prevSlider = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

/**
 * getFirstSlide - Resets the slider to the first slide.
 */
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

/**
 * getLastSlide - Moves the slider to the last slide.
 * It calculates the translation based on the number of slides.
 */
const getLastSlide = () => {
  slider.style.transform = `translateX(${(slideNumber - lengthSlider) * 800}px)`;
  slideNumber = lengthSlider;
};

/**
 * changeColor - Resets all indicator buttons' colors and sets the active one to white.
 */
const changeColor = () => {
  resetBg();
  // Set the active button's background color based on the current slide number
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

// Add click event listener for the right (next) button
right.addEventListener("click", () => {
  // If the current slide is less than the total slides, move to the next slide,
  // otherwise, loop back to the first slide.
  slideNumber < lengthSlider ? nextSlider() : getFirstSlide();
  changeColor();
});

// Add click event listener for the left (previous) button
left.addEventListener("click", () => {
  // If the current slide is greater than 1, move to the previous slide,
  // otherwise, loop to the last slide.
  slideNumber > 1 ? prevSlider() : getLastSlide();
  changeColor();
});
