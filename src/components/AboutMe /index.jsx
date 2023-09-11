/* eslint-disable react/no-unescaped-entities */
import chrisimage1 from "../../assets/chrismalone.jpg";
import chrisimage2 from "../../assets/chrismalone2.jpeg";

const AboutMe = () => {
  return (
    <div className="bg-white">
      <h1 className="col-span-2 text-2xl md:text-5xl text-center font-semibold px-6 md:px-8 py-6 md:py-10 font-tiltprism hover:font-lora text-blue-900">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="md:w-1/2 text-lg md:text-xl font-lora text-center md:text-left font-semibold mx-auto text-blue-900 p-6 md:p-10">
          I started making dolls In 1992 when I had just moved to the
          Washington, D.C. area, as I was walking through Old Town Alexandria,
          VA, I came upon a shop called Angie's Doll Boutique. The ladies in the
          shop asked if I was looking for something for my mother or my
          girlfriend. I replied that I was a doll maker and I was looking to see
          what they had for me to use to create dolls. We soon became friends.
          <br />
          <br />
          I believe my creations come from my unknown African past. When my
          ancestors came to this country chained in the belly of ships as cargo,
          they were taken away from their language, families, and way of life;
          and this included their Gods. I believe my work takes it a step
          further to use it as a medium to explore spirituality and ancestry.
          Creating these sculptures is a balance between imaginative play and
          spiritual practice.
          <br />
        </p>
        <img
          className="w-[25em] mx-auto m-4 p-4 bg-blue-900 md:w-1/2 max-w-md rounded-sm"
          src={chrisimage1}
          alt="Chris Image"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          className="w-[25em] mx-auto m-4 p-4 bg-blue-900 md:w-1/2 max-w-md rounded-sm"
          src={chrisimage2}
          alt="Chris Image"
        />
        <p className="md:w-1/2 text-lg md:text-xl font-lora text-center md:text-left font-semibold mx-auto text-blue-900 p-6 md:p-10">
          When I am creating a doll I'll have the exotic fabric, beads, and
          feathers on a table in front of me and I let the Universe (Spirit)
          guide me, I do the same when I'm sculpting in clay. Maybe my guidance
          in creativity is coming from my unknown ancestors... perhaps telling
          me stories that I have never heard and showing masks and painted faces
          that I have never seen? I just know if I keep my mouth closed and my
          mind open I can be creative... I can only say that this works for me.
          After I'm done creating a sculpture I exhale and have a cigar and a
          beer (or maybe a whisky and coke) and a nap, after that it starts all
          over again.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
