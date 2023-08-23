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
        <div className="max-w-7xl mx-auto text-blue-900 font-lora text-left">
            <h1 className="text-5xl text-left font-normal px-4 md:px-2 py-6 md:py-10">Ceramic Work</h1>
            <p className="text-2xl text-left font-normal px-4 md:px-2 pb-6 md:pb-10">Every day working on proportions, expressions but still wanting the pieces to have a look of wild imagination and fantasy.</p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-2 md:grid-cols-3 grid-cols-2">
            <img src={ceramics1} alt="Ceramics 1" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics2} alt="Ceramics 2" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics3} alt="Ceramics 3" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics4} alt="Ceramics 4" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics5} alt="Ceramics 5" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics6} alt="Ceramics 6" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics7} alt="Ceramics 7" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics8} alt="Ceramics 8" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics9} alt="Ceramics 9" className="rounded-sm p-8 bg-blue-900" />
            <img src={ceramics10} alt="Ceramics 10" />
            <img src={ceramics11} alt="Ceramics 11" />
            <img src={ceramics12} alt="Ceramics 12" />
        </div>
    </div>
  );
};

export default CeramicsPage;
