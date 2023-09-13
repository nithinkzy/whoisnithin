import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: "experience.iconBg" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="2-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    <p
      className="text-secondary text-[16px] font-semibold"
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </p>
    {/* <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul> */}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} animate-pulse`}>
          What I have done
        </p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      {/* <p className="mt-20 text-center">
        Click{" "}
        <span className="animate-pulse underline underline-offset-8 hover:underline-offset-2">
          <Link
            to="NithinKumar_KollerethuSuresh.pdf"
            target="_blank"
            download
          >
            here
          </Link>{" "}
        </span>
        to Download Full Resume.
      </p> */}
    </>
  );
};

export default SectionWrapper(Experience, "experience");
