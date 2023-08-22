import masthead1 from "../../assets/home/masthead1.jpg";
import masthead2 from "../../assets/home/masthead2.jpg";
import masthead3 from "../../assets/home/masthead3.jpg";
import masthead4 from "../../assets/home/masthead4.jpg";

const MastheadImages = () => {
  return (
    <div className="bg-white h-screen">
      <div className="grid grid-cols-4 ">
        <div className="py-2 pl-2 pr-1">
          <img
            className="h-auto max-w-full rounded-sm"
            src={masthead1}
            alt=""
          />
        </div>
        <div className="py-2 pl-1 pr-1">
          <img
            className="h-auto max-w-full rounded-sm "
            src={masthead2}
            alt=""
          />
        </div>
        <div className="py-2 pl-1 pr-1">
          <img
            className="h-auto max-w-full rounded-sm "
            src={masthead3}
            alt=""
          />
        </div>
        <div className="py-2 pl-1 pr-2">
          <img
            className="h-auto max-w-full rounded-sm"
            src={masthead4}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 bg-white">
        <div className="my-40 pl-2 pr-1">
          <h1 className="font-tiltprism font-medium text-2xl text-blue-900 md:text-7xl">CHRISTOPHER MALONE</h1>
        </div>
      </div>
    </div>
  );
};

export default MastheadImages;
