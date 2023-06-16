import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} h-2/3 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] animate-bounce"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient animate-pulse"></div>
        </div>
        <div className="flex flex-col justify-between xs:h-2/3 h-1/3">
          <h1 className={`${styles.heroSubText} mb-5`}>
            Hi, I'm{" "}
            <span className="text-[#915eff] text-start"> Nithin 👋.</span>
          </h1>
          <h1 className={`${styles.heroHeadText} xs:mb-6 mb-4 xs:text-center text-start`}>
            Change the world with{" "}
            <span className="text-[#915eff]">Code.</span>
          </h1>
          <p className={`${styles.heroSubText} text-end `}>
            {" "}
            Full-stack developer at LGC. <br />
            Freelance Web Wizard.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-1 bottom-7 w-full flex flex-col justify-center items-center animate-pulse">
        <a href="#about">
          <div className="w-[35px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        <p className="text-xs">click to scroll</p>
      </div>
    </section>
  );
};

export default Hero;
