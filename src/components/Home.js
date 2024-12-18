import React, { useState, useEffect } from "react";
import heelDance1 from "../images/heel-dance-1.jpg";
import heelDance2 from "../images/heel-dance-2.jpg";
import interactiveGames1 from "../images/interactive-games-2.jpg";
import music1 from "../images/music1.jpg";
import prosecco2 from "../images/prosecco-2.jpg";
import food1 from "../images/food-1.webp";
import captureMemories1 from "../images/capture-memories-1.avif";

const images = [
  {
    src: heelDance2,
    caption: "Heels Dance Class",
    description:
      "Unleash your inner diva with an exciting heels dance class led by top instructors",
  },
  {
    src: interactiveGames1,
    caption: "Interactive Games",
    description: "Fun, laughter, and prizes to keep the energy alive",
  },
  {
    src: music1,
    caption: "Music & Vibes",
    description: "Groove to great music and enjoy a lively atmosphere",
  },
  {
    src: prosecco2,
    caption: "Prosecco & Drinks",
    description: "Drinks to fuel the fun",
  },
  {
    src: food1,
    caption: "Delicious Food",
    description:
      "Savor a variety of treats to keep you fueled throughout the evening",
  },
  {
    src: captureMemories1,
    caption: "Capture Memories",
    description:
      "Capture moments with friends and family that you'll cherish forever",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      id="home"
      className="text-customGreen text-center p-4 md:p-8 relative bg-customGreen-50"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="relative">
          <img
            src={heelDance1}
            alt="Heels Dance"
            className="rounded-lg shadow-lg w-full h-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center rounded-lg text-white text-2xl md:text-6xl font-bold bg-black/30 p-2 md:p-4 text-center tracking-wide">
            The Ultimate Heels Dance Class & Party Games Experience
          </h1>
        </div>
      </div>

      <div className="mt-8 text-center space-y-8">
        <h2 className="italic text-2xl md:text-4xl font-bold text-customGreen tracking-wide">
          W.O.W Productions Presents
        </h2>

        <div className="text-sm md:text-lg mt-8 text-center space-y-6 font-serif ">
          <p className="leading-relaxed text-gray-800">
            <span className="italic">W.O.W</span> originated out of a conversation amongst friends following the
            pandemic to find and attend a local heels dance class together. As
            neither of them could locate anywhere to attend in Leicester,
            Natalie decided to arrange one herself and lead a session herself
            for her group of friends, making a celebration out of the occasion.
          </p>
          <p className="leading-relaxed text-gray-800 mt-4">
            What began as a vibrant and memorable social gathering, has since
            evolved into a professional service that offers a range of services
            and packages for special occasions, such as birthdays, hen parties,
            social gatherings, and team-building. Every one of our packages is
            designed to meet your needs, both now and in the future. <span className="italic">W.O.W </span>work
            with companies and creatives to fulfil both your objectives and work
            within your financial preferences. Provide your requirements and we
            can take it from there and turn it into a reality.
          </p>
          
        </div>

        <div className="mt-8 text-center space-y-6">
          <p className="text-base md:text-lg font-semibold tracking-wide">
            Join us for an unforgettable evening at CDCA, 1 Darker Street, where
            energy, laughter, and celebration take center stage!
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 py-4 px-2 md:p-5">
  <h3 className="text-2xl font-semibold text-center tracking-wide">Event Highlights</h3>
  <div className="relative max-w-2xl mx-auto mt-8">
    <div
      key={currentIndex}
      className="relative animate-fadeInRightToLeft duration-300"
    >
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].caption}
        className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center rounded-lg text-white text-2xl font-semibold bg-black/30">
        {images[currentIndex].caption}
      </p>
    </div>
    <p
      key={`${currentIndex}-description`}
      className="flex items-center justify-center text-black text-base md:text-xl tracking-wider mt-4 animate-fadeInRightToLeft"
    >
      {images[currentIndex].description}
    </p>
    <div className="flex justify-center mt-4 space-x-2">
      {images.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            index === currentIndex ? "bg-gray-800" : "bg-gray-400"
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>


      <div className="mt-8 text-center">
        <p className="text-lg font-semibold tracking-wide">
          Don’t miss out on this fantastic evening of entertainment and
          celebration!
        </p>
        <a
          href="https://www.eventbrite.co.uk/e/wow-productions-the-ultimate-heels-dance-class-party-games-experience-tickets-1112892374049?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-customGreen hover:bg-customGreen-700 text-white text-lg font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Secure Your Spot Now!
        </a>
      </div>
    </div>
  );
}

export default Home;
