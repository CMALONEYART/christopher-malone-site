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
    focusAt: 'center',
    perView: 3,
    startAt: 0,
    type: "carousel",
    swipeThreshold: 80,
    autoplay: 5000,
    hoverpause: true
  };

const sliderConfigurationMobile = {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4000,
    focusAt: '1',
    startAt: 3,
    perView: 1, 
    swipeThreshold: 80,
    hoverpause: true
  };

const MastheadSlider = () => {
  const slider = new Glide(".glide", sliderConfiguration);
  const sliderMobile = new Glide(".glideMobile", sliderConfigurationMobile);

  useEffect(() => {
    slider.mount();
    sliderMobile.mount();
  }, [slider, sliderMobile]);

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
        <div className="glide hidden md:block">
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
        <div className="glideMobile block md:hidden">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <img src={masthead1} />
              <img src={masthead2} />
              <img src={masthead3} />
              <img src={masthead4} />
            </ul>
          </div>
          <div className="my-5 flex flex-row items-center justify-center pt-5">
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="mx-4 md:mx-16 glide__arrow glide__arrow--left focus:outline-none focus:shadow-outline bg-red-400 text-white font-bold py-2 px-6 rounded-full hover:text-red-600 hover:bg-white border-red-400"
                data-glide-dir="<"
              >
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="mx-4 md:mx-16 glide__arrow glide__arrow--right focus:outline-none focus:shadow-outline bg-red-400 text-white font-bold py-2 px-6 rounded-full mr-4 hover:text-red-600 hover:bg-white border-red-400"
                data-glide-dir=">"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MastheadSlider;
