import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, sub, icon }) => {
  return (
    <Tilt className="w-[230px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-[12px]  text-center">{title}</h3>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <p className="font-bold text-[12px]">{sub}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} animate-pulse`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <div className="md:columns-2 ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] break-after-column"
        >
          I'm Nithin, a dedicated and skilled{" "}
          <span className="underline underline-offset-4 hover:underline-offset-8">
            full stack developer with 5 years of experience
          </span>{" "}
          in building dynamic web applications. With a bachelor's degree in
          computer science and an advanced diploma in software engineering
          technology, I've honed my skills to deliver exceptional results. As a
          seasoned{" "}
          <span className="underline underline-offset-4 hover:underline-offset-8">
            freelance developer with 7 years of experience
          </span>
          , I've collaborated with diverse clients, showcasing their unique
          strengths through visually captivating websites.
          <br />
          <br />
          I'm passionate about using code to change the world and empower
          businesses to thrive. Let's embark on a journey of digital innovation
          together.
        </motion.p>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-end"
        >
          <ul>
            <li
              className={`${styles.sectionSubText} underline underline-offset-4 hover:underline-offset-8 mb-`}
            >
              EDUCATION
            </li>
            <li>Jan/2018 - Dec/2019</li>
            <li>
              Advanced Diploma - Software Engineering Technology
              {/* Advanced Diploma Co-op Fast-Track */}
            </li>
            <li>Centennial College, Toronto, ON</li>
            <br />
            <li>Jul/ 2013 – Jul/ 2017 </li>
            <li>Bachelor of Engineering – Computer Science</li>
            <li>Visvesvaraya Technological University, Bangalore, India</li>
          </ul>
        </motion.div>
      </div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-center mt-6">
        Fascinating Facts About Me
      </motion.p>
      <div className="mt-10 grid grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-6 justify-center place-items-center">
        {/* <div class="snap-center shrink-0">
          <div class="shrink-0 w-4 sm:w-48"></div>
        </div> */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
