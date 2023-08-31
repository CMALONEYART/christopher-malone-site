import MastheadSlider from "../components/MastheadSlider";
import MastheadImages from "../components/MastheadImages";
import HomepageAboutMe from "../components/HomepageAboutMe";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHeaderHidden = scrollY >= 100;

  return (
    <>
      <div className={isHeaderHidden ? `fixed w-full z-10` : `hidden`}>
        <Header />
      </div>
      <div className="hidden md:block">
        <MastheadImages />
      </div>
      <div className="md:hidden">
        <MastheadSlider />
      </div>
      <HomepageAboutMe />
    </>
  );
};

export default Home;
