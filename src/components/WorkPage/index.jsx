/* eslint-disable react/no-unescaped-entities */
import work1 from "../../assets/work/work1.jpg";
import work2 from "../../assets/work/work2.jpg";
import work3 from "../../assets/work/work3.jpg";
import work4 from "../../assets/work/work4.jpg";
import washingtonSculptor from "../../assets/work/WashingtonSculptor.jpg";
import piece1 from "../../assets/work/sculptures/pieces/1.jpg";
import piece2 from "../../assets/work/sculptures/pieces/2.jpg";
import piece3 from "../../assets/work/sculptures/pieces/3.jpg";
import piece4 from "../../assets/work/sculptures/pieces/4.jpg";
import babuka1 from "../../assets/work/acclaims/babuka1-min.jpg";
import babuka2 from "../../assets/work/acclaims/babuka2-min.jpg";
import bendo1 from "../../assets/work/acclaims/bendo1-min.jpg";
import bendo2 from "../../assets/work/acclaims/bendo2-min.jpg";

const WorkPage = () => {
  const workImages = [work1, work2, work3, work4];

  const showsAndExhibits = [
    "1996 - Featured Artist - Graham Collection, Washington DC",
    "1998 - Dolls With a Life of Their Own - The Washington Post",
    "2003 - Something For the Soul - American Jazz Museum Kansas City, MO",
    "2005 - Hidden Treasures exhibit- Graham Collection, Washington DC",
    "2006 - Found exhibit; BADC - Graham Collection, Washington DC",
    "2007 - Erotic Blue Exhibit - Graham Collection, Washington DC",
    "2007 - Doll Noir - Graham Collection, Washington DC",
    "2007 - Art Doll Exhibition - Florida Craftsman, St.Petersburg, FL",
    "2007 - BADC 1111 Penn. Ave. NW Washington DC, Margery's first Chris Malone Artgasim",
    "2007 - Art Doll Quarterly, Vol 5 Issue 3, Doll Artist Profile",
    "2008 - Doll Noir-Graham Collection, Washington DC",
    "2009 - Synergy2 Exhibition - Baltimore, MD",
    "2010 - Coaxing the Spirit to Dance - Stella Jones Gallery, New Orleans, LA",
    "2010 - Bon Appetit - 2010 Calendar",
    "2010 - Book - Creative Time and Space, Making Room for Making Art",
    "2011 - Book - Masters Polymer Clay, Mayor Works by Leading Artist, Lark Crafts",
    "2011 - Mahalia Jackson Queen of Gospel Music, African American Art Musem Dallas, TX",
    "2013 - Art Doll Exhibition - Florida Craftsman, St. Petersburg, FL.",
    "2014 - The Washington Color School- The Washington Post",
    "2014 - The Washington Informer - Home Transformed Into Art Lovers Treasure Trove",
    "2014 - Baltimore Clayworks, Baltimore, MD",
    "2014 - Brooklyn Art Museum, Brooklyn, NY",
    "2015 - Black Face Boy Exhibit - Brenwood Arts Exchange - Brentwood, Maryland",
    "2015 - Platform Gallery Baltimore, MD",
    "2015 - Imagining New Orleans in a Post Katrina World - Stella Jones Gallery, New Orleans",
    "2015 - Torpedo Factory Art Center, Alexandria, VA",
    "2019 - The Art League's November Origins Show, Old Town, VA",
    "2019 - H-Space gallery, Play Protection or Peril - June-September, Washington DC",
    "2019 - Cover Art League School catalog, Alexandria, VA",
    "2021 - NCECA Exhibitions 2021",
    "2021 - Torpedo Factory, Alexandria, VA",
    "2021 - Zenith gallery, Washington DC",
    "2021 - DC Art Bank, Washington DC",
    "2021 - February, Artist Talk - Episcopal High School",
    "2022 - January, Torpedo Factory",
    "2024 - NCECA Conference, Richmond - Virginia",
  ];

  return (
    <div className="bg-blue-900">
      {/* Work Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-2 pt-2 px-2 md:px-0">
        <h1 className="col-span-2 md:col-span-4 text-2xl md:text-5xl text-center font-semibold px-6 md:px-8 py-6 md:py-10 font-tiltprism hover:font-lora">
          My Work
        </h1>
        {workImages.map((img, i) => (
          <img key={i} className="rounded-sm shadow-sm p-8 bg-white" src={img} alt={`Work ${i + 1}`} />
        ))}
        <p className="col-span-2 md:col-span-4 font-lora text-md md:text-2xl text-left font-semibold px-6 md:px-8 py-6 md:py-10 bg-white text-blue-900 rounded-sm">
          The process I use to create is achieved by sitting quietly undisturbed
          with a cup of hot tea or a jack and coke and a cigar. Please excuse me
          if my honestly makes you uncomfortable, but that's how I start.
          <br />
          After that I just wait. I usually don't have to wait too long. I start
          to create by starting with the armature, I guess most folks do.
        </p>
      </div>

      {/* Acclaims Section */}
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col items-center">
        <h2 className="font-lora text-2xl md:text-4xl text-center pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
          Acclaims<br />
          <span className="text-lg md:text-xl">(Please reach out for more information)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {[{
            title: "Babuka",
            text: "Best in Show,\nCreative Craft Council Exhibition\nStrathmore Mansion, Rockville",
            images: [babuka1, babuka2]
          }, {
            title: "Bendo",
            text: "2nd Place, Ceramics\nCreative Craft Council Exhibition\nStrathmore Mansion, Rockville",
            images: [bendo1, bendo2]
          }].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="font-lora text-xl md:text-3xl text-center mb-2">{item.title}</h2>
              <p className="text-md text-gray-200 mb-6 whitespace-pre-line">{item.text}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                {item.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${item.title} ${idx + 1}`} className="rounded-sm shadow-sm p-4 bg-white w-full sm:w-1/2" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pieces Section */}
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div>
          <h2 className="font-lora text-2xl md:text-4xl text-center pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
            Pieces<br />
            <span className="text-lg md:text-xl">(Please reach out for more information)</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src={piece1}
                alt="Pieces 1"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                Situated at the Black History Museum, Richmond, VA<br /><span className="text-violet-800">(Private Collection)</span>
                <span className="text-md md:text-lg uppercase text-blue-700">
                  <br />
                  26”X18”X20”
                  <br />
                  $8000.00
                  <br />
                  <span className="text-sm md:text-md">
                    Unavailable for Sale
                  </span>
                </span>
              </h5>
            </div>
            <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src={piece2}
                alt="Pieces 2"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                “Thomasina, The Advisor” - Ceramic - 2023<br /><span className="text-violet-800">(Private Collection)</span>
                <span className="text-md md:text-lg uppercase text-blue-700">
                  <br /><br />

                  <br />
                  $4800.00
                  <br />
                  <span className="text-sm md:text-md">
                    Unavailable for Sale
                  </span>
                </span>
              </h5>
            </div>
            <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src={piece3}
                alt="Pieces 3"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                “23.3” - Ceramic Clay, Underglaze, Glaze - 2023<br /><span className="text-violet-800">(Private Collection)</span>
                <span className="text-md md:text-lg uppercase text-blue-700">
                  <br /><br />
                  18”X9”X8”
                  <br />
                  $1800.00
                  <br />
                  <span className="text-sm md:text-md">
                    Unavailable for Sale
                  </span>
                </span>
              </h5>
            </div>
            <div
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300"
            >
              <img
                src={piece4}
                alt="Pieces 4"
                className="pb-4 rounded-sm"
              />
              <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900">
                “23.4” - Ceramic, Glaze, Unglaze, Stain - 2023<br /><span className="text-violet-800">(Private Collection)</span>
                <span className="text-md md:text-lg uppercase text-blue-700">
                  <br /><br />
                  23”X11”X8”
                  <br />
                  $1800.00
                  <br />
                  <span className="text-sm md:text-md">
                    Unavailable for Sale
                  </span>
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div>
          <h1 className="font-lora text-2xl md:text-4xl text-center pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
            Publications
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {[
              {
                href: "https://folklife.si.edu/magazine/chris-malone-sculpture",
                src: "https://folklife.si.edu/Media/Default/Talk%20Story/SC3_7591.JPG",
                text: "Pieces of Life: Chris Malone’s Sculptures Tell Stories of Spirituality and an Unknown Past"
              },
              {
                href: "https://washingtonsculptors.org/wp-content/uploads/newsletters/wsg_2024_no1_winter_web.pdf",
                src: washingtonSculptor,
                text: "Interview with the Washington Sculptor’s group\n2024"
              }
            ].map((pub, index) => (
              <a key={index} href={pub.href} target="_blank" rel="noreferrer" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-slate-300">
                <img src={pub.src} alt={`Publication Image ${index + 1}`} className="pb-4 rounded-sm" />
                <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-900 whitespace-pre-line">{pub.text}</h5>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Shows and Exhibits Section */}
      <div className="mx-auto py-10 px-2 md:px-4 max-w-7xl flex flex-col md:flex-row justify-center items-center">
        <div>
          <h1 className="font-lora text-2xl md:text-4xl text-left pt-10 pb-16 hover:font-tiltprism px-6 md:px-4">
            Shows and Exhibits
          </h1>
          <ul className="text-left text-md sm:text-xl font-sans px-6 md:px-4">
            {showsAndExhibits.map((show, index) => (
              <li key={index} className="hover:font-lora border-white pl-2 pb-2">{show}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
