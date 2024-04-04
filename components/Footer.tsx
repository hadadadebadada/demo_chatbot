import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <>
    <footer className="border-t bg-black z-50">
      {/* Removed text-primary-500 as it's not a default Tailwind color, adjust if you have custom colors */}
      <div className="container mx-auto flex flex-wrap justify-center items-center p-4 text-gray-800 overflow-x-hidden">
        {/* Applied overflow-x-hidden to prevent horizontal overflow */}
        {/* Adjusted margin classes from mr-md-4 to mr-4 for proper Tailwind syntax */}
        <a href="https://www.facebook.com/botschmiede" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaFacebookF className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/botschmiede/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://www.youtube.com/channel/UCNe1o4gR8JMWDFv0Tyedm9Q" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaYoutube className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/company/botschmiede/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="https://wa.me/491772266449" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="https://www.xing.com/pages/botschmiede-einzelunternehmen" target="_blank" className="q-mr-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="custom-svg-icon">
            <path
              d="M4.8 3C3.8 3 3 3.8 3 4.8v14.4c0 1 .8 1.8 1.8 1.8h14.4c1 0 1.8-.8 1.8-1.8V4.8c0-1-.8-1.8-1.8-1.8m-3.13 2h2.04c.12 0 .22.04.26.13c.06.09.06.2 0 .31l-4.47 7.92l2.85 5.2c.06.11.06.22 0 .31c-.05.08-.14.13-.25.13h-2.03c-.31 0-.47-.21-.56-.39l-2.87-5.26l4.49-7.96c.11-.2.24-.39.54-.39M7.09 7.76H9.1c.31 0 .47.2.57.39l1.39 2.42c-.09.14-2.18 3.85-2.18 3.85c-.11.19-.25.39-.56.39H6.3c-.12 0-.21-.05-.26-.14a.413.413 0 0 1 0-.31l2.14-3.79L6.82 8.2c-.05-.11-.07-.2-.01-.31c.05-.08.15-.13.28-.13z"
              fill="#7393B3" />
          </svg>

        </a>
      </div>
    </footer>
  </>
);

export default Footer;


        {/* <a href="https://www.xing.com/pages/botschmiede-einzelunternehmen" target="_blank" rel="noopener noreferrer" className="mr-md-4">
        </a> */}