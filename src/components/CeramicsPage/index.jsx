/* eslint-disable no-unused-vars */
import ceramics1 from "../../assets/work/ceramics/1.jpeg";
import ceramics2 from "../../assets/work/ceramics/2.jpeg";
import ceramics3 from "../../assets/work/ceramics/3.jpeg";
import ceramics4 from "../../assets/work/ceramics/4.jpeg";
import ceramics5 from "../../assets/work/ceramics/5.jpeg";
import ceramics6 from "../../assets/work/ceramics/6.jpeg";
import ceramics7 from "../../assets/work/ceramics/7.jpeg";
import ceramics8 from "../../assets/work/ceramics/8.jpeg";
import ceramics9 from "../../assets/work/ceramics/9.jpeg";
import ceramics10 from "../../assets/work/ceramics/10.jpeg";
import ceramics11 from "../../assets/work/ceramics/11.jpeg";
import ceramics12 from "../../assets/work/ceramics/12.jpeg";

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
            <h1 className="text-xl md:text-3xl text-left font-normal px-6 md:px-8 py-6 md:py-10">
            Ceramic Work
            </h1>
            <p className="text-md md:text-xl text-left font-normal px-6 md:px-8 pb-6 md:pb-10">
            Every day working on proportions, expressions but still wanting the
            pieces to have a look of wild imagination and fantasy.
            </p>
        </div>
      </div>
    </div>
  );
};

export default CeramicsPage;
