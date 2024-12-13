import React from "react";
import natalieImage from "../images/natalieImage.jpeg"

function About() {
  const address = "1 Darker Street, Leicester LE1 4SL";
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;

  return (
    <div id="about" className="p-8 bg-gradient-to-r from-customGreen-200 via-customGreen-100 to-customGreen-50 text-black">
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
                  <span className="text-4xl font-bold animate-bounce delay-300">
                    £15
                  </span>
                </div>
                <p className="text-lg text-gray-600 mt-4">
                  (Limited Spaces Available)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="host" className="mt-16 bg-white rounded-lg shadow-md p-8 text-left">
          <h3 className="text-2xl font-bold mb-6 text-center">Meet Your Host</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={natalieImage}
              alt="Natalie Nicole James"
              className="w-auto h-72 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div>
              <p className="text-lg font-semibold">
                Natalie Nicole James is an artistic dance and circus movement teacher and creator.
              </p>
              <p className="mt-4 text-gray-700">
                From 2012 to 2015, Natalie studied at the National Centre for Circus Arts, receiving a full scholarship to
                train and specialise in dance-trapeze. She graduated with a BA Honours in Circus Arts and has since
                performed extensively, including a lead role in Metta Theatre's adaptation of Kipling's *Jungle Book*.
              </p>
              <p className="mt-4 text-gray-700">
                Natalie has also been part of the Beijing Olympics Torch ceremony in 2008 and has collaborated with
                renowned artists and mentors such as Kenrick Sandy MBE, Jonzi D, and Jasmin Vardimon. Her movement
                vocabulary blends circus, contemporary dance, hip hop, and physical theatre.
              </p>
              <p className="mt-4 text-gray-700">
                Day to day, Natalie enjoys mentoring, writing, and creating something positive out of nothing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
