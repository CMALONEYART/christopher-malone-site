/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import sculptures1 from "../../assets/work/sculptures/1.jpeg";
import sculptures2 from "../../assets/work/sculptures/2.jpeg";
import sculptures3 from "../../assets/work/sculptures/3.jpeg";
import sculptures4 from "../../assets/work/sculptures/4.jpeg";
import sculptures5 from "../../assets/work/sculptures/5.jpg";
import sculptures6 from "../../assets/work/sculptures/6.jpg";
import sculptures7 from "../../assets/work/sculptures/7.jpg";
import sculptures8 from "../../assets/work/sculptures/8.jpg";

const SculpturesPage = () => {
  return (
    <div className="bg-blue-900">
      <h1 className="col-span-2 text-2xl md:text-5xl text-center font-semibold px-6 md:px-8 py-6 md:py-10 font-tiltprism hover:font-lora">
        Soft Sculptures
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-7xl gap-2 pt-2 px-2 md:px-0 items-center mx-auto">
        <img
          className="rounded-sm shadow-sm p-8 bg-white h-[250px] md:h-[400px]"
          src={sculptures1}
          alt=""
        />
        <p className="md:col-span-2 text-lg md:text-2xl font-lora text-left font-normal px-6 md:px-8 pb-6 md:pb-10">
          These images are sculptures that I have been working on, the whole
          process is amazing, considering it starts with an idea and a handful
          of ceramic clay or polymer clay.
        </p>
        <p className="text-lg md:text-2xl font-lora text-left font-normal px-6 md:px-8 pb-6 md:pb-10">
          Here are a few early ceramic pieces. I see my style has changed as I
          have become more at ease with this medium.
        </p>
        <img
          className="rounded-sm shadow-sm p-8 bg-white h-[250px] md:h-[400px]"
          src={sculptures2}
          alt=""
        />
        <img
          className="rounded-sm shadow-sm p-8 bg-white h-[250px] md:h-[400px]"
          src={sculptures3}
          alt=""
        />
      </div>
      <p className="text-lg md:text-3xl font-lora text-center font-normal px-6 md:px-8 py-6 md:py-10 max-w-5xl mx-auto">
        Remember that none of this is difficult. Often times people will plant
        the seeds of{" "}
        <span className="text-yellow-200 font-bold">
          "you will never be able to do this"
        </span>
        , in your mind. Don't listen to them, move forward and just create.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-2 pt-2 px-2 md:px-0 md:py-8 items-center mx-auto justify-items-center">
        <img
          className="rounded-sm shadow-sm p-8 bg-white w-[164px]"
          src={sculptures4}
          alt=""
        />
        <img
          className="rounded-sm shadow-sm p-8 bg-white w-[164px]"
          src={sculptures5}
          alt=""
        />
        <img
          className="rounded-sm shadow-sm p-8 bg-white w-[164px]"
          src={sculptures6}
          alt=""
        />
        <img
          className="rounded-sm shadow-sm p-8 bg-white w-[164px]"
          src={sculptures7}
          alt=""
        />
        <img
          className="rounded-sm shadow-sm p-8 bg-white w-[164px] hidden lg:block"
          src={sculptures8}
          alt=""
        />
      </div>
    </div>
  );
};

export default SculpturesPage;
