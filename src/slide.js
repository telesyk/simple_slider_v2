export default function Slide(image, index, classActive = "") {
  const picSrc =
    typeof image === "string"
      ? image
      : "https://images.pexels.com/photos/1770619/pexels-photo-1770619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  const className = classActive ? "image " + classActive : "image";
  const newImg = document.createElement("img");
  const newSlide = document.createElement("figure");

  newImg.setAttribute("src", picSrc);
  newImg.setAttribute("alt", "image-" + index);
  newSlide.setAttribute("class", className);
  newSlide.setAttribute("data-slide", index);
  newSlide.appendChild(newImg);

  return newSlide;
}
