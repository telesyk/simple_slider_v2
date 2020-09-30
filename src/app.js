import Slide from "./slide";

export default function App(images, options) {
  const slider = options.container;
  const width = slider.offsetWidth;
  const speed = options.speed | 300;
  let counter = 0;

  const handlePrevSlide = () => {
    options.nav_prev.addEventListener("click", () => {
      if (counter !== 0) {
        slider.style.transition = `all ${speed}ms ease-in-out`;
        counter--;
      } else {
        slider.style.transition = "none";
        counter = images.length - 1;
      }
      slider.style.transform = "translateX(" + -width * counter + "px)";
    });
  };

  const handleNextSlide = () => {
    options.nav_next.addEventListener("click", () => {
      if (counter < images.length - 1) {
        slider.style.transition = `all ${speed}ms ease-in-out`;
        counter++;
      } else {
        slider.style.transition = "none";
        counter = 0;
      }
      slider.style.transform = "translateX(" + -width * counter + "px)";
    });
  };

  const createSlider = (slides) => {
    handlePrevSlide();
    handleNextSlide();

    return slides.map((slide, index) => {
      if (index !== counter) {
        return slider.append(Slide(slide, index));
      } else {
        return slider.append(Slide(slide, index, "active"));
      }
    });
  };

  return createSlider(images);
}
