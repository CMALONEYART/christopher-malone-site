/* eslint-disable react/no-unescaped-entities */
import chrisimage1 from "../../assets/home/chris-malone.jpg";

const HomepageAboutMe = () => {
  return (
    <div className="bg-blue-900 p-20">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <img
            className="w-[25em] mx-auto max-w-2xl rounded-sm shadow-xl bg-white p-4"
            src={chrisimage1}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <div className="max-w-xl font-lora text-2xl leading-10 text-white lg:max-w-xl p-2">
            <p>
              I am Chris Malone, a self-taught artist born and raised in the
              Midwest and currently situated near Washington DC. I started making dolls in 1992 and have
              exhibited my work nationwide; including in New Orleans, New York,
              and Washington DC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAboutMe;
