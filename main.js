const slider = document.querySelector(".slider__container");
const rightArrow = document.querySelector(".next");
const leftArrow = document.querySelector(".prev");

let curentIndex = 0;
let prevIndex;

const sliderImages = document.querySelectorAll(".slider__image");

const totalImages = Object.keys(sliderImages).length;

const imageWidth = 520;

leftArrow.addEventListener("click", () => {
  prevIndex = curentIndex;
  curentIndex = (curentIndex - 1 + totalImages) % totalImages;
  slider.style.transform = `translateX(-${imageWidth}px)`;
  slider.insertBefore(sliderImages[curentIndex], slider.firstChild);

  setTimeout(() => {
    slider.style.transform = "";
    slider.classList.add("slider__transition");
  }, 10);

  setTimeout(() => {
    slider.style.transform = "";
    slider.classList.remove("slider__transition");
  }, 490);
});

rightArrow.addEventListener("click", () => {
  slider.classList.add("slider__transition");

  prevIndex = curentIndex;
  curentIndex = (curentIndex + 1) % totalImages;
  slider.style.transform = `translateX(-${imageWidth}px)`;

  setTimeout(() => {
    slider.appendChild(sliderImages[prevIndex]);
    slider.classList.remove("slider__transition");
    slider.style.transform = "";
  }, 490);
});

// SCROLL Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
