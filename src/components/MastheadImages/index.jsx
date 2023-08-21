import masthead1 from "../../assets/home/masthead1.jpg";
import masthead2 from "../../assets/home/masthead2.jpg";
import masthead3 from "../../assets/home/masthead3.jpg";
import masthead4 from "../../assets/home/masthead4.jpg";

const MastheadImages = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col bg-orange-50 gap-4">
        <img src={masthead1} className="rounded-lg hover:scale-110 transition duration-500 cursor-pointer object-cover" />
        <img src={masthead3} className="rounded-lg " />
        <img src={masthead2} className="opacity-0" />
        <img src={masthead3} className="opacity-0" />
        <img src={masthead4} className="rounded-lg " />
        <img src={masthead2} className="rounded-lg " />
        <img src={masthead3} className="rounded-lg " />
        <img src={masthead3} className="opacity-0" />
      </div>
    </>
  );
};

export default MastheadImages;
