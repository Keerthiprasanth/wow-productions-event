import React, { useState, useEffect } from "react";
// import { FaInstagram } from "react-icons/fa";
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
      className="text-customGreen text-center p-8 relative bg-customGreen-50"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="relative">
          <img
            src={heelDance1}
            alt="Heels Dance"
            className="rounded-lg shadow-lg w-full h-full"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-6xl font-bold bg-black/30 p-4 text-center">
            The Ultimate Heels Dance Class & Party Games Experience
          </h1>
        </div>
      </div>

      <div className="mt-8 text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-customGreen">
          W.O.W PRODUCTIONS! PRESENTS originated out of a need amongst friends
          following the pandemic to find and attend a local heels dance class
          together
        </h2>

        <div className="mt-8 text-center space-y-6">
          <p className="text-lg leading-relaxed text-gray-800">
            As neither of us could locate anywhere in Leicester, Natalie decided
            to arrange and lead a session for her friends with regular sessions
            intended to follow. What began as a vibrant and memorable social
            gathering, has since evolved into a professional service that offers
            a range of services and packages for special occasions, such as
            birthdays, hen parties, social gatherings, and team-building. Every
            one of our packages is designed to meet your needs, both now and in
            the future.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            W.O.W. works with companies and creatives to fulfil both your
            objectives and work within your financial preferences. Provide your
            requirements and we can take it from there and turn it into a
            reality.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Multi-talented circus and dance performer{" "}
            <a
              href="#host"
              className="font-semibold text-customGreen-600 hover:underline"
            >
              Natalie Nicole James
            </a>{" "}
            brings a wealth of expertise to the events sector from her work at
            numerous festivals and on stages, including the Jungle Book
            adaptation by Metta Theatre. From 2007 to 2023, she directed and
            performed often and established a milestone as the first aerialist
            to perform at Breakin' Convention Sadler's Wells mainstage and the
            first trapeze artist to create work at Move It at London Excel
            mainstage. Working with English National Opera, Boy Blue, Ockham's
            Razor, and as a choreographer and dance instructor for Disney's The
            Lion King Cub Academy six-week audition program allowed her to use
            her variety of skills while also honing them.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Her trajectory from playground creativity as a child to professional
            artistry has influenced W.O.W.'s mission: to celebrate life, build
            relationships, encourage inclusivity and accessibility, and foster
            collaborative leadership networks.
          </p>
        </div>

        <div className="mt-8 text-center space-y-6">
          <p className="text-lg font-semibold text-customGreen-600">
            Join us for an unforgettable evening at CDCA, 1 Darker Street, where
            energy, laughter, and celebration take center stage!
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 p-5">
        <h3 className="text-2xl font-semibold text-center">Event Highlights</h3>
        <div className="relative max-w-2xl mx-auto mt-8">
          <div
            key={currentIndex}
            className="relative animate-fadeInRightToLeft duration-300"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black/30">
              {images[currentIndex].caption}
            </p>
          </div>
          <p
            key={`${currentIndex}-description`}
            className="flex items-center justify-center text-black text-lg mt-4 animate-fadeInRightToLeft"
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
        <p className="text-lg font-semibold text-customGreen-800">
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
