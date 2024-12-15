import React from "react";
import natalieImage from "../images/natalieImage.jpeg";

function About() {
  const address = "1 Darker Street, Leicester LE1 4SL";
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;

  return (
    <div
      id="about"
      className="p-4 md:p-8 bg-customGreen-50 text-black"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-14">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInTopToBottom">
          <div className="order-2 md:order-1 border-4 border-customGreen rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBz7vcBKQftrsK9f1xaVjggx759VJE8MsY&q=${encodeURIComponent(
                address
              )}`}
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps location for CDCA Academy"
            ></iframe>
          </div>

          <div className="order-1 md:order-2 items-center text-center md:text-left md:ml-24 grid gap-8 md:gap-12 justify-center md:justify-start md:pl-8 bg-white py-8">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div>
                <p className="text-lg font-semibold">Saturday</p>
                <p className="text-2xl font-bold">21st December</p>
                <p className="text-lg text-gray-600">5:00 PM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div>
                <p className="text-2xl font-bold">CDCA Academy</p>
                <p className="text-lg text-gray-600">{address}</p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-customGreen-300 hover:bg-customGreen-600 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow-m transition duration-300"
                >
                  Open Maps
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="text-center md:text-left">
                <div className="relative inline-flex items-center justify-center bg-customGreen-400 text-white rounded-full w-40 h-32 shadow-md">
                  <a
                    href="https://www.eventbrite.co.uk/e/wow-productions-the-ultimate-heels-dance-class-party-games-experience-tickets-1112892374049?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl font-bold animate-bounce delay-300"
                  >
                    £15
                  </a>
                </div>
                <p className="text-lg text-gray-600 mt-4">
                  (Limited Spaces Available)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="host"
          className="mt-16 bg-white rounded-lg shadow-md p-4 md:p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-customGreen">
            Meet Your Host
          </h3>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={natalieImage}
              alt="Natalie Nicole James"
              className="w-48 h-72 object-cover rounded-sm mb-6 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-customGreen">
                Natalie Nicole James
              </p>
              <div className="text-sm md:text-base font-serif">
                <p className="mt-4 text-gray-800 leading-relaxed">
                  Multi-talented professional circus and dance leader who brings
                  a wealth of expertise to the events sector from her own work
                  at numerous festivals,{" "}
                  <span className="italic">BBC Radio</span>, publishing, and
                  theatre platforms— including the adaptation by{" "}
                  <span className="italic">Metta Theatres’ Jungle Book</span>{" "}
                  modern-day adaptation as the lead role and ensemble. From 2007
                  to 2023, she directed and performed often as a soloist and
                  established a milestone as the first aerialist to perform at{" "}
                  <span className="italic">
                    Breakin' Convention at Sadler's Wells
                  </span>{" "}
                  mainstage and the first trapeze artist to create work at{" "}
                  <span className="italic">Move It at London Excel</span>{" "}
                  mainstage. Working with the renowned{" "}
                  <span className="italic">
                    English National Opera, Boy Blue, Ockham's Razor
                  </span>
                  , and as a choreographer and dance instructor for{" "}
                  <span className="italic">
                    Disney's The Lion King Cub Academy
                  </span>{" "}
                  six-week audition program allowed her to use her variety of
                  skills while also honing them.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Her trajectory from playground creativity as a child to
                  professional artistry has influenced{" "}
                  <span className="italic">W.O.W</span>’s mission: to celebrate
                  life, build relationships, encourage inclusivity and
                  accessibility, and foster collaborative leadership networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
