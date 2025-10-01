const images = [
  "../photos/1.jpg",
  "../photos/2.jpg",
  "../photos/3.jpg",
  "../photos/4.jpg", 
  "../photos/5.jpg",
  "../photos/6.jpg",
  "../photos/7.jpg",
  "../photos/8.jpg",
  "../photos/9.jpg", 
  "../photos/10.jpg",
  "../photos/11.jpg",
  "../photos/12.jpg",
  "../photos/13.jpg",
  "../photos/14.jpg",
  "../photos/15.jpg"
  

];

function startSlideshow(galerySelector, imagesArray) {
  const galery = document.querySelector(galerySelector);
  if (!galery) return;

  const sliders = galery.querySelectorAll(".image");
  let step = 0;

  function updateSlides() {
    sliders.forEach((slider, i) => {
      const img = slider.querySelector("img");
      if (img) {
        img.src = imagesArray[(step + i) % imagesArray.length];
      }
    });
    step = (step + 1) % imagesArray.length;
  }

  updateSlides();
  setInterval(updateSlides, 3000);
}

// Exemplo:
startSlideshow(".galery", images);
