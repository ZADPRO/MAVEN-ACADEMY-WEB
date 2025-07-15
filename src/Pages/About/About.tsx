import React, { useState } from "react";
import { motion } from "framer-motion";
import academic from "../../assets/course/academic.jpg";
import computer from "../../assets/course/computer.jpg";
import art from "../../assets/course/art.jpg";
import robot from "../../assets/home/robot.jpg";
import "./About.css";
import { useNavigate } from "react-router-dom";
import Carousels from "../../Components/Carousel/Carousel";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const navigate = useNavigate();
  const [_menuStatus, setMenuStatus] = useState(false);
  const { t } = useTranslation("global");

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuStatus(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Carousels />

      {/* First Content Section */}
      <div className="px-4 mt-20 flex items-center bg-[#fefdf8]">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto gap-10 items-center">
          {/* Animated Images */}
          <motion.div
            className="flex-1 relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full lg:w-[90%] flex justify-center items-center">
              <motion.img
                src={academic}
                alt="Academic"
                className="rounded-3xl w-[280px] h-[330px] lg:w-[400px] lg:h-[420px] object-cover shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src={computer}
                alt="Computer"
                className="absolute bottom-[-20px] right-[-20px] w-[200px] lg:w-[250px] rounded-2xl shadow-xl border-4 border-white"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-[70px] h-[3px] bg-[#FFD700] mr-4"></div>
              <span className="text-xl uppercase font-bold text-[#000a35]">
                {t("about.title")}
              </span>
            </div>

            <p className="text-[24px] uppercase font-bold mb-3 text-[#000a35]">
              {t("about.tagline")}
            </p>

            <div className="space-y-4 text-justify text-[18px] leading-relaxed">
              <p>{t("about.para1")}</p>
              <p>{t("about.para2")}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values & Vision Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center max-w-7xl mx-auto py-16 px-6 gap-10 bg-[#fefdf8] mt-10">
        {/* Image Section */}
        <div className="flex-1 py-10 flex justify-center items-center w-full relative">
          <div className="relative w-full max-w-[500px] flex flex-col items-center gap-6">
            {/* Outer Circle Background (behind everything) */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full bg-gradient-to-tr from-[#FFD700] to-[#fff0b3] opacity-20 z-0"
            ></motion.div>

            {/* Main Circle Image (on top of yellow circle) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="rounded-full overflow-hidden shadow-2xl border-4 border-white w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] z-10"
            >
              <img
                src={art}
                alt="Main"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Bottom Floating Image (also in front of circle) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-white w-[160px] sm:w-[200px] lg:w-[240px] z-10"
            >
              <img
                src={robot}
                alt="Floating"
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0 px-4">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="w-[70px] h-[3px] bg-[#FFD700] mr-4"></div>
            <span className="text-xl uppercase font-bold text-[#000a35]">
              {t("about.title1")}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            <strong> {t("about.missionLabel")}</strong> {t("about.mission")}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            <strong> {t("about.innovationLabel")}</strong>{" "}
            {t("about.innovation")}
          </p>
          <button
            className="px-6 py-3 bg-[#001f4d] text-white rounded-lg hover:text-[#FFD700] transition"
            onClick={() => {
              handleNavigation("/course");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t("about.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
