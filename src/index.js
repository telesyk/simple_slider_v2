import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.css";

import App from "./app";

const gallery = [
  "https://images.pexels.com/photos/3225524/pexels-photo-3225524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500",
  "https://images.pexels.com/photos/3512846/pexels-photo-3512846.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2766915/pexels-photo-2766915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const sliderOpt = {
  container: document.querySelector(".slider-container"),
  nav_prev: document.querySelector(".slider-nav__prev"),
  nav_next: document.querySelector(".slider-nav__next"),
  speed: 400
};

App(gallery, sliderOpt);
