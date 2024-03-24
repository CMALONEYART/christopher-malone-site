/* eslint-disable react/no-unescaped-entities */
import work1 from "../../assets/work/work1.jpg";
import work2 from "../../assets/work/work2.jpg";
import work3 from "../../assets/work/work3.jpg";
import work4 from "../../assets/work/work4.jpg";
import washingtonSculptor from "../../assets/work/WashingtonSculptor.jpg";

const WorkPage = () => {
  return (
    <div className="bg-blue-900">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-2 pt-2 px-2 md:px-0">
        <h1 className="col-span-2 md:col-span-4 text-2xl md:text-5xl text-center font-semibold px-6 md:px-8 py-6 md:py-10 font-tiltprism hover:font-lora">
          My Work
        </h1>
        <img className="rounded-sm shadow-sm p-8 bg-white" src={work1} alt="" />
        <img className="rounded-sm shadow-sm p-8 bg-white" src={work2} alt="" />
        <img className="rounded-sm shadow-sm p-8 bg-white" src={work3} alt="" />
        <img className="rounded-sm shadow-sm p-8 bg-white" src={work4} alt="" />
        <p className="col-span-2 md:col-span-4 font-lora text-md md:text-2xl text-left font-semibold px-6 md:px-8 py-6 md:py-10 bg-white text-blue-900 rounded-sm">
          The process I use to create is achieved by sitting quietly undisturbed
          with a cup of hot tea or a jack and coke and a cigar. Please excuse me
          if my honestly makes you uncomfortable, but that's how I start.
          <br />
          After that I just wait. I usully don't have to wait too long. I start
          to create by starting with the armature, I guess most folks do.
        </p>
      </div>
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div>
          <h1 className="font-lora text-2xl md:text-4xl text-center pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
            Publications
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="https://folklife.si.edu/magazine/chris-malone-sculpture"
              target="_blank"
              rel="noreferrer"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src="https://folklife.si.edu/Media/Default/Talk%20Story/SC3_7591.JPG"
                alt="Publication Image 1"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                Pieces of Life: Chris Malone’s Sculptures Tell Stories of
                Spirituality and an Unknown Past
              </h5>
            </a>
            <a
              href="https://washingtonsculptors.org/wp-content/uploads/newsletters/wsg_2024_no1_winter_web.pdf"
              target="_blank"
              rel="noreferrer"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src={washingtonSculptor}
                alt="Publication Image 1"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                Interview with the Washington Sculptor’s group
                <br />
                2024
              </h5>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div>
          <h1 className="font-lora text-2xl md:text-4xl text-left pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
            Shows and Exhibits
          </h1>
          <ul className="text-left text-md sm:text-xl font-sans px-6 md:px-4">
            <li className="hover:font-lora border-white pl-2 pb-2">
              1996 - Featured Artist - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              1998 - Dolls With a Life of Their Own - The Washington Post
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2003 - Something For the Soul - American Jazz Museum Kansas City,
              MO
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2005 - Hidden Treasures exhibit- Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2006 - Found exhibit; BADC - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2007 - Erotic Blue Exhibit -Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2007 - Doll Noir - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2007 - Art Doll Exhibition - Florida Craftsman, St.Petersburg, FL
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2007 - BADC 1111 Penn. Ave. NW Washington DC, Margery's first
              Chris Malone Artgasim
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2007 - Art Doll Quarterly, Vol 5 Issue 3, Doll Artist Profile
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2008 - Doll Noir-Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2009 - Synergy2 Exhibition - Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2010 - Coaxing the Spirit to Dance - Stella Jones Gallery, New
              Orleans, LA
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2010 - Bon Appetit - 2010 Calendar
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2010 - Book - Creative Time and Space, Making Room for Making Art
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2011 - Book - Masters Polymer Clay, Mayor Works by Leading Artist,
              Lark Crafts
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2011 - Mahalia Jackson Queen of Gospel Music, African American Art
              Musem Dallas, TX
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2013 - Art Doll Exhibition - Florida Craftsman, St. Petersburg,
              FL.
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2014 - The Washington Color School- The Washington Post
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2014 - The Washington Informer - Home Transformed Into Art Lovers
              Treasure Trove
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2014 - Baltimore Clayworks, Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2014 - Brooklyn Art Museum, Brooklyn, NY
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2015 - Black Face Boy Exhibit -Brenwood Arts Exchange - Brentwood,
              Maryland
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2015 - Platform Gallery Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2015 - Imagining New Orleans in a Post Katrina World - Stella
              Jones Gallery, New Orleans
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2015 - Torpedo Factory Art Center, Alexandea, VA
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2019 - The Art League's November Origins Show, Old Town, VA
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2019 - H-Space gallery, Play Protection or Peril - June-September,
              Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2019 - Cover Art League School catalog, Alexandra, VA
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2021 - NCECA Exhibitions 2021
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2021 - Torpedo Factory, Alexandra, VA.
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2021 - Zenith gallery, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2021 - DC Art Bank, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2021 - February, Artist Talk - Episcopal High School
            </li>
            <li className="hover:font-lora border-white pl-2 pb-2">
              2022 - January, Torpedo Factory
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WorkPage;
