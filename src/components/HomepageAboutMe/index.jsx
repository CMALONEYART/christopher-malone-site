/* eslint-disable react/no-unescaped-entities */
import chrisimage from "../../assets/home/chris-malone.jpg";
import chrisimagemobile from "../../assets/home/chris-malone-mobile.jpg";

const HomepageAboutMe = () => {
  return (
    <div className="bg-blue-900 p-20">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <img
            className="w-[25em] mx-auto max-w-2xl rounded-sm shadow-xl bg-white p-4 hidden md:block"
            src={chrisimage}
            alt=""
          />
        </div>
        <img
          className="w-[25em] mx-auto rounded-sm shadow-xl bg-white p-4 md:hidden"
          src={chrisimagemobile}
          alt=""
        />
        <div className="md:w-1/2">
          <p className="text-white max-w-xl font-lora leading-10 md:leading-10 text-lg md:text-2xl pt-10 md:p-4">
            I am Chris Malone, a self-taught artist born and raised in the
            Midwest and currently situated near Washington DC. I started making
            dolls in 1992 and have exhibited my work nationwide; including in
            New Orleans, New York, and Washington DC.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-10">
            <a
              className=" hover:font-lora font-tiltprism text-2xl sm:text-4xl text-white hover:text-white hover:border-b-2 hover:border-white hover:pb-4 p-6 sm:p-0"
              href="/about"
            >
              Check my Work
            </a>
            <a
              className=" hover:font-lora font-tiltprism text-2xl sm:text-4xl text-white hover:text-white hover:border-b-2 hover:border-white hover:pb-4 p-6 sm:p-0"
              href="/about"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutMe;
