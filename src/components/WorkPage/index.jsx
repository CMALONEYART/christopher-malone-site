/* eslint-disable react/no-unescaped-entities */
import chrisimage from "../../assets/work/showwork.png";

const WorkPage = () => {
  return (
    <div className="bg-blue-900">
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-3/5">
          <h1 className="font-lora text-xl md:text-3xl text-left pb-10 hover:font-tiltprism px-6 md:px-4">
            Shows and Exhibits
          </h1>
          <ul className="text-left text-xs sm:text-lg font-sans md:list-disc px-6 md:px-4">
            <li className="hover:font-lora border-white pl-2">
              1996 - Featured Artist - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              1998 - Dolls With a Life of Their Own - The Washington Post
            </li>
            <li className="hover:font-lora border-white pl-2">
              2003 - Something For the Soul - American Jazz Museum Kansas City,
              MO
            </li>
            <li className="hover:font-lora border-white pl-2">
              2005 - Hidden Treasures exhibit- Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2006 - Found exhibit; BADC - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2007 - Erotic Blue Exhibit -Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2007 - Doll Noir - Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2007 - Art Doll Exhibition - Florida Craftsman, St.Petersburg, FL
            </li>
            <li className="hover:font-lora border-white pl-2">
              2007 - BADC 1111 Penn. Ave. NW Washington DC, Margery's first
              Chris Malone Artgasim
            </li>
            <li className="hover:font-lora border-white pl-2">
              2007 - Art Doll Quarterly, Vol 5 Issue 3, Doll Artist Profile
            </li>
            <li className="hover:font-lora border-white pl-2">
              2008 - Doll Noir-Graham Collection, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2009 - Synergy2 Exhibition - Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2">
              2010 - Coaxing the Spirit to Dance - Stella Jones Gallery, New
              Orleans, LA
            </li>
            <li className="hover:font-lora border-white pl-2">
              2010 - Bon Appetit - 2010 Calendar
            </li>
            <li className="hover:font-lora border-white pl-2">
              2010 - Book - Creative Time and Space, Making Room for Making Art
            </li>
            <li className="hover:font-lora border-white pl-2">
              2011 - Book - Masters Polymer Clay, Mayor Works by Leading Artist,
              Lark Crafts
            </li>
            <li className="hover:font-lora border-white pl-2">
              2011 - Mahalia Jackson Queen of Gospel Music, African American Art
              Musem Dallas, TX
            </li>
            <li className="hover:font-lora border-white pl-2">
              2013 - Art Doll Exhibition - Florida Craftsman, St. Petersburg,
              FL.
            </li>
            <li className="hover:font-lora border-white pl-2">
              2014 - The Washington Color School- The Washington Post
            </li>
            <li className="hover:font-lora border-white pl-2">
              2014 - The Washington Informer - Home Transformed Into Art Lovers
              Treasure Trove
            </li>
            <li className="hover:font-lora border-white pl-2">
              2014 - Baltimore Clayworks, Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2">
              2014 - Brooklyn Art Museum, Brooklyn, NY
            </li>
            <li className="hover:font-lora border-white pl-2">
              2015 - Black Face Boy Exhibit -Brenwood Arts Exchange - Brentwood,
              Maryland
            </li>
            <li className="hover:font-lora border-white pl-2">
              2015 - Platform Gallery Baltimore, MD
            </li>
            <li className="hover:font-lora border-white pl-2">
              2015 - Imagining New Orleans in a Post Katrina World - Stella
              Jones Gallery, New Orleans
            </li>
            <li className="hover:font-lora border-white pl-2">
              2015 - Torpedo Factory Art Center, Alexandea, VA
            </li>
            <li className="hover:font-lora border-white pl-2">
              2019 - The Art League's November Origins Show, Old Town, VA
            </li>
            <li className="hover:font-lora border-white pl-2">
              2019 - H-Space gallery, Play Protection or Peril - June-September,
              Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2019 - Cover Art League School catalog, Alexandra, VA
            </li>
            <li className="hover:font-lora border-white pl-2">
              2021 - NCECA Exhibitions 2021
            </li>
            <li className="hover:font-lora border-white pl-2">
              2021 - Torpedo Factory, Alexandra, VA.
            </li>
            <li className="hover:font-lora border-white pl-2">
              2021 - Zenith gallery, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2021 - DC Art Bank, Washington DC
            </li>
            <li className="hover:font-lora border-white pl-2">
              2021 - February, Artist Talk - Episcopal High School
            </li>
            <li className="hover:font-lora border-white pl-2">
              2022 - January, Torpedo Factory
            </li>
          </ul>
        </div>
        <div className="md:w-2/5">
          <img
            className="w-[25em] mx-auto max-w-2xl rounded-sm shadow-sm mt-8 lg:mt-0"
            src={chrisimage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default WorkPage;
