import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer id="footer" className="bg-customGreen text-white p-6 text-center">
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <div className="space-y-4">
        <p>
          <a
            href="tel:+447944625119"
            className="text-white flex items-center justify-center space-x-2 hover:underline hover:text-customGreen-50"
          >
            <FaPhoneAlt className="text-xl" />
            <span className="text-sm">07944625119</span>
          </a>
        </p>
        <p>
          <a
            href="mailto:natalienicolej@outlook.com"
            className="text-white flex items-center justify-center space-x-2 hover:underline hover:text-customGreen-50"
          >
            <MdEmail className="text-xl" />
            <span className="text-sm">natalienicolej@outlook.com</span>
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/natalienicolejames"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center justify-center space-x-2 hover:underline hover:text-customGreen-50"
          >
            <FaInstagram className="text-xl" />
            <span className="text-sm">natalienicolejames</span>
          </a>
        </p>
      </div>
      <p className="mt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
