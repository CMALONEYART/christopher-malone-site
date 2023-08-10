/* eslint-disable react/no-unescaped-entities */
import chrisimage1 from "../../assets/home/chris-malone.jpg";

const AboutPageContent = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white pt-6 sm:pt-10 lg:overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 p-4">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:p-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mx-auto">
              About Me
            </h1>
          </div>
        </div>
        <div className="md:-mt-12 md:-ml-12 md:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[20em] mx-auto max-w-2xl px-4 pt-4 rounded-xl shadow-2xl rotate-6 border border-gray-900"
            src={chrisimage1}
            alt="Chris Image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-xl p-4">
              <p>
                Chris Malone is a self taught artist born and raised in the
                Midwest.
                <br />
                <br />
                Malone’s work is rooted in his unknown African past but takes it
                a step further to use it as a medium to explore spirituality and
                ancestry. Creating these sculptures is a balance between
                imaginative play and spiritual practice.
                <br />
                <br />
                Malone currently resides somewhere near Washington DC. They have
                exhibited their work nation-wide including in New Orleans, New
                York, and Washington DC.
                <br />
                <br />
                I started making dolls In 1992. I had just moved to the
                Washington, D.C. area and was walking through Old Town
                Alexandria, VA, and I came upon a shop called Angie's Doll
                boutique. The ladies in the shop asked if I was looking for my
                mother or my girlfriend? I replied that I was a doll maker and I
                was looking to see what they had for me to use to create dolls.
                We soon became friends. I believe my creations come from my
                unknown African past. When my ancestors came to this country
                chained in the belly of ships as cargo, they were taken away
                from their language, families, way of life; and this included
                their Gods.
                <br />
                <br />
                When I am creating a doll I'll have the exotic fabric, beads and
                feathers on a table in front of me and I let the Universe
                (spirit) guide me in what to do with it, I do the same when I'm
                sculpting in clay. Maybe my guidance in creativity is coming
                from my unknown ancestors... perhaps telling me stories that I
                have never heard and showing mask and painted faces that I have
                never seen? I just know if I keep my mouth closed and my mind
                open I can be creative... I can only say that this works for me.
                After I'm done creating a sculpture I exhale and I have a cigar
                and a beer (or maybe a whisky and coke) and a nap, after that it
                starts all over again.
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

export default AboutPageContent;
