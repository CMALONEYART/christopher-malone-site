/* eslint-disable react/no-unescaped-entities */
import chrisimage1 from "../../assets/home/chris-malone.jpg";

const AboutMe = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-6 sm:pt-10 lg:overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 p-4">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:p-4">
            <p className="font-playfair font-medium text-2xl text-red-500 md:text-4xl md:p-6">
              about me
            </p>
          </div>
        </div>
        <div className="md:-mt-12 md:-ml-12 md:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[20em] mx-auto max-w-2xl px-4 pt-4 rounded-xl shadow-xl rotate-6 border border-gray-900 bg-white"
            src={chrisimage1}
            alt="Chris Image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-xl p-2">
              <p>
                I am Chris Malone, a self-taught artist born and raised in the
                Midwest and currently situated near Washington DC. I have
                exhibited my work nationwide; including in New Orleans, New
                York, and Washington DC.
                <br />
                <br />
                I started making dolls In 1992 when I had just moved to the
                Washington, D.C. area, as I was walking through Old Town
                Alexandria, VA, I came upon a shop called Angie's Doll Boutique.
                The ladies in the shop asked if I was looking for something for
                my mother or my girlfriend. I replied that I was a doll maker
                and I was looking to see what they had for me to use to create
                dolls. We soon became friends.
                <br />
                <br />
                I believe my creations come from my unknown African past. When
                my ancestors came to this country chained in the belly of ships
                as cargo, they were taken away from their language, families,
                and way of life; and this included their Gods. I believe my work
                takes it a step further to use it as a medium to explore
                spirituality and ancestry. Creating these sculptures is a
                balance between imaginative play and spiritual practice.
                <br />
                <br />
                When I am creating a doll I'll have the exotic fabric, beads,
                and feathers on a table in front of me and I let the Universe
                (Spirit) guide me, I do the same when I'm sculpting in clay.
                Maybe my guidance in creativity is coming from my unknown
                ancestors... perhaps telling me stories that I have never heard
                and showing masks and painted faces that I have never seen? I
                just know if I keep my mouth closed and my mind open I can be
                creative... I can only say that this works for me. After I'm
                done creating a sculpture I exhale and have a cigar and a beer
                (or maybe a whisky and coke) and a nap, after that it starts all
                over again.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
