/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
// Testimonials Slider using React Awesome Slider

import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "./styles.css";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import background from "../../assets/tiedie-bg.jpg";
import masthead1 from "../../assets/home/masthead1.jpg";
import masthead2 from "../../assets/home/masthead2.jpg";
import masthead3 from "../../assets/home/masthead3.jpg";
import masthead4 from "../../assets/home/masthead4.jpg";

const sliderConfiguration = {
    gap: 50,
    peek: 100,
    focusAt: 'center',
    perView: 1,
    startAt: 0,
    type: "carousel",
    swipeThreshold: 80,
    autoplay: 5000,
    hoverpause: true
  };

const MastheadSlider = () => {
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      {" "}
      <div
        className="py-8 md:py-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <img src={masthead1} className="rounded-lg" />
              <img src={masthead2} className="rounded-lg" />
              <img src={masthead3} className="rounded-lg" />
              <img src={masthead4} className="rounded-lg" />
            </ul>
          </div>
          <div className="my-5 flex flex-row items-center justify-center pt-5">
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="mx-4 md:mx-16 glide__arrow glide__arrow--left focus:outline-none focus:shadow-outline bg-red-400 text-white font-bold py-2 px-6 rounded-full hover:text-red-600 hover:bg-white border-red-400"
                data-glide-dir="<"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="mx-4 md:mx-16 glide__arrow glide__arrow--right focus:outline-none focus:shadow-outline bg-red-400 text-white font-bold py-2 px-6 rounded-full mr-4 hover:text-red-600 hover:bg-white border-red-400"
                data-glide-dir=">"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MastheadSlider;
