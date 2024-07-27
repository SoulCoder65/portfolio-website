import { HERO_CONTENT } from "../constants/content";
import profilePic from "../../assets/AkshaySaxenaProfile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

const animatedContainer = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const About = () => {
  return (
    <Element name="about" className="border-b border-neutral-900 pb-4 lg:mb-5">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animatedContainer(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-thin tracking-tight mt-8 lg:mt-16 lg:text-6xl"
            >
              Akshay Saxena
            </motion.h1>
            <motion.div
              variants={animatedContainer(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-4xl font-light tracking-tight text-center lg:text-left"
            >
              <span className="text-white">I am a </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent font-normal">
                <Typewriter
                  words={["Full Stack Developer", "Mobile App Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>
            <motion.p
              variants={animatedContainer(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-wide text-center lg:text-left text-lg lg:text-lg text-neutral-300 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-end">
          <motion.img
            src={profilePic}
            alt="Akshay Saxena Profile"
            className="rounded-lg shadow-2xl border-4 border-neutral-900 max-w-full h-auto"
            style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </div>
    </Element>
  );
};

export default About;