import { logo, stand, dance } from "../assets";
import { SectionWrapper } from "../hoc";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class=" text-white py-6">
      <div class="container mx-auto flex flex-col items-center">
        <div className="flex flex-row gap-4 p-4">
          <a
            href="https://www.instagram.com/myselfnithin/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-spin text-white hover:text-[#915eff] scale-125 hover:scale-100"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/nithinkzy/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-spin text-white hover:text-[#915eff] scale-125 hover:scale-100"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/nithin-kollerethu/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-spin text-white hover:text-[#915eff] scale-125 hover:scale-100"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/nithinkzy"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-spin text-white hover:text-[#915eff] scale-125 hover:scale-100"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <p class="text-sm py-3 mb-5">© 2023 Nithin. All rights reserved.</p>
        <div class="cursor-wait">
          <img
            class="absolute hover:opacity-0  h-20 rounded-full "
            src={stand}
          />
          <img class="active h-20 rounded-full " src={dance} />
        </div>
        {/* <img src={logo} alt="Logo" className="w-auto h-20 object-fit" /> */}
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "");
