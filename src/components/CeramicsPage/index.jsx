/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import ceramics1 from "../../assets/work/ceramics/1.jpg";
import ceramics2 from "../../assets/work/ceramics/2.jpg";
import ceramics3 from "../../assets/work/ceramics/3.jpg";
import ceramics4 from "../../assets/work/ceramics/4.jpg";
import ceramics5 from "../../assets/work/ceramics/5.jpg";
import ceramics6 from "../../assets/work/ceramics/6.jpg";
import ceramics7 from "../../assets/work/ceramics/7.jpg";
import ceramics8 from "../../assets/work/ceramics/8.jpg";
import ceramics9 from "../../assets/work/ceramics/9.jpg";
import ceramics10 from "../../assets/work/ceramics/10.jpg";
import ceramics11 from "../../assets/work/ceramics/11.jpg";
import ceramics12 from "../../assets/work/ceramics/12.jpg";
import quote from "../../assets/work/ceramics/quote.png";

const CeramicsPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto grid gap-2 md:grid-cols-3 grid-cols-2">
        <img
          src={ceramics2}
          alt="Ceramics 2"
          className="rounded-sm p-8 bg-blue-900"
        />
        <img
          src={ceramics4}
          alt="Ceramics 4"
          className="rounded-sm p-8 bg-blue-900"
        />
        <img
          src={ceramics5}
          alt="Ceramics 5"
          className="rounded-sm p-8 bg-blue-900"
        />
        <img
          src={ceramics6}
          alt="Ceramics 6"
          className="rounded-sm p-8 bg-blue-900"
        />
        <img
          src={ceramics7}
          alt="Ceramics 7"
          className="rounded-sm p-8 bg-blue-900"
        />
        <img
          src={ceramics8}
          alt="Ceramics 8"
          className="rounded-sm p-8 bg-blue-900"
        />
      </div>
      <div className="max-w-7xl mx-auto grid gap-2 md:grid-cols-3 grid-cols-2 mt-2">
        <img
          src={ceramics9}
          alt="Ceramics 9"
          className="rounded-sm p-8 bg-blue-900 md:col-span-1 hidden md:block"
        />
        <div className="rounded-sm p-8 bg-blue-900 font-lora col-span-2 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl text-left font-semibold px-6 md:px-8 py-6 md:py-10 hover:font-tiltprism">
            Ceramic Work
          </h1>
          <p className="text-md md:text-xl text-left font-normal px-6 md:px-8 pb-6 md:pb-10">
            Every day working on proportions, expressions but still wanting the
            pieces to have a look of wild imagination and fantasy.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 bg-blue-900 mt-2 rounded-sm">
        <div className="hidden md:block"></div>
        <p
          className="col-span-2 text-md md:text-xl font-lora text-center font-normal p-8 md:p-10"
          style={{
            backgroundImage: `url(${quote})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          There will always be someone who will not want you to accomplish what
          ever task you set for yourself. Avoid these people, don't be angry and
          nasty about it, just avoid them and go forward.
          <br />
          <br />
          Follow the path the universe presents to you... Or don't, the choice
          is yours.
        </p>
        <div className="hidden md:block"></div>
      </div>
        <div className="max-w-7xl mx-auto grid gap-2 grid-cols-2 mt-2">
            <img
                src={ceramics10}
                alt="Ceramics 10"
                className="rounded-sm p-8 bg-blue-900"
            />
            <img
                src={ceramics11}
                alt="Ceramics 11"
                className="rounded-sm p-8 bg-blue-900"
            />
        </div>
    </div>
  );
};

export default CeramicsPage;
