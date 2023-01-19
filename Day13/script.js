function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImg = document.querySelectorAll(".slide-in");

function checkScrollSlide(e) {
  sliderImg.forEach((img) => {
    // window.scrollY gives the height scrolled from top, window.innerheight gives the value that in the full page height so when we add it it gives the value at the end of the screen

    // then we subtract it with slider img - which gives the hight of the img , but we want the image width /2 so that its half the image when the image starts animating so sliderimg.hight/2
    const slidein = window.scrollY + window.innerHeight - img.height / 2;
    // this gives the value of the bottom of the image to see if we scrolled past the image
    const imageBottom = img.offsetTop + img.height;
    // this will check if slide in value is greater than the value where the image is at
    const isHalfShown = slidein > img.offsetTop;
    // this will check if we scrolled past the image or not
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkScrollSlide));
