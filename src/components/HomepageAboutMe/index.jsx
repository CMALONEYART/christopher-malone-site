import chrisimage1 from "../../assets/home/chris-malone.jpg";
import surbhiimage3 from "../../assets/home/chris-malone.jpg";
import backgroundImage from "../../assets/home/chris-malone.jpg";
import testimonialBg from "../../assets/home/chris-malone.jpg";

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
            className="w-full mx-auto max-w-2xl p-2 rounded-xl shadow-xl ring-1 ring-gray-400/10 md:w-[20rem] rotate-6 border border-gray-900"
            src={chrisimage1}
            alt="Surbhi Image"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-xl p-4">
              <p>
                Chris Malone is a self taught artist born and raised in the
                Midwest. Malone’s work is rooted in his unknown African past but
                takes it a step further to use it as a medium to explore
                spirituality and ancestry. Creating these sculptures is a
                balance between imaginative play and spiritual practice. Malone
                currently resides somewhere near Washington DC. They have
                exhibited their work nation-wide including in New Orleans, New
                York, and Washington DC. I started making dolls In 1992. I had
                just moved to the Washington, D.C. area and was walking through
                Old Town Alexandria, VA, and I came upon a shop called Angie's
                Doll boutique. The ladies in the shop asked if I was looking for
                my mother or my girlfriend? I replied that I was a doll maker
                and I was looking to see what they had for me to use to create
                dolls. We soon became friends. I believe my creations come from
                my unknown African past. When my ancestors came to this country
                chained in the belly of ships as cargo, they were taken away
                from their language, families, way of life; and this included
                their Gods. When I am creating a doll I'll have the exotic
                fabric, beads and feathers on a table in front of me and I let
                the Universe (spirit) guide me in what to do with it, I do the
                same when I'm sculpting in clay. Maybe my guidance in creativity
                is coming from my unknown ancestors... perhaps telling me
                stories that I have never heard and showing mask and painted
                faces that I have never seen? I just know if I keep my mouth
                closed and my mind open I can be creative... I can only say that
                this works for me. After I'm done creating a sculpture I exhale
                and I have a cigar and a beer (or maybe a whisky and coke) and a
                nap, after that it starts all over again.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
        }}
        className="bg-violet-800"
      >
        <p className="max-w-2xl mx-auto text-center p-32 font-semibold text-white text-xl md:text-2xl">
          Stories showed me the way. At each step they guided me and led me to a
          very fulfilling inner journey of discovering, adding and recreating
          myself.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center mt-2 p-4 mx-auto max-w-7xl">
          <img
            className="lg:w-1/2 rounded-xl shadow-xl ring-1 ring-gray-400/10 -rotate-6 w-4/6"
            src={surbhiimage3}
            alt="Surbhi Image"
          />
          <p className="text-md font-semibold font-sans md:text-left md:text-lg text-slate-700 md:ml-8 p-8 lg:w-1/2 text-center">
            My first step of self discovery began when I wrote a children’s
            story. That led me into becoming a storyteller. As I started telling
            stories, I began to learn about children, mental health, emotions
            and about life through the stories I told. This carried me further
            into the field of psychology. However when I studied psychology I
            could see the gaps which psychology could not adequately address. As
            a storyteller I was acutely aware of the energetic exchange that
            takes place between teller and listener, of how stories are
            containers of energy and how our interactions with the world are
            shaped by energies. I stumbled upon pranic healing and started
            applying that in my work.
            <br />
            <br />
            And then gradually it all started to make sense: stories, psychology
            and pranic healing. The thread that was weaving and bringing it all
            together was healing. Be it telling stories, counselling people or
            doing energy work for my clients: the common denominator is my
            passion for healing and helping others to feel whole and connected
            to their soul.
            <br />
            <br />
            The tapestry was being woven all along but until the pattern is
            revealed, it just feels messy and meaningless. In retrospect I can
            connect the dots today and feel everything making sense. I can see
            how the threads of science, psychology, healing, stories and
            spirituality came together and interwove a distinct path for me. And
            because of such a unique background, I feel strongly equipped to
            serve the needs of my clients in a comprehensive and holistic way.
            Along the way I discovered my greatest joy: to bring healing to
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
