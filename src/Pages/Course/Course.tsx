import React, { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import "./Course.css";
// import computer from "../../assets/course/computer.jpg";
import bilingual from "../../assets/course/bilingual.jpg";
import blur from "../../assets/course/blur.jpg";
// import dance from "../../assets/course/dance.jpg";
// import music from "../../assets/course/music.jpg";
// import language from "../../assets/course/language.jpg";
import butterfly from "../../assets/course/butterfly.jpg";
import Gymi from "../../assets/course/Gymi.jpg";
import { projects } from "../../Components/Card/projects";
import Carousels from "../../Components/Carousel/Carousel";
// import CardImage from "../../Components/CardImage/CardImage";
import Card from "../../Components/Card/Card";
import CardImage from "../../Components/CardImage/CardImage";
// import { style } from "framer-motion/client";
import { motion } from "framer-motion";
import ClassTimings from "../../Components/Calender/ClassTimings";
import ButterflyAndGymi from "../../Components/PopUpContent/GymiPopup";

const coursesData = [
  {
    id: 1,
    image: Gymi,
    title: "Gymi course ",
    author: "John Doe",
    date: "Jan 10, 2024",
  },
  {
    id: 2,
    image: butterfly,
    title: "Butterfly Gardens",
    author: "Jane Smith",
    date: "Feb 15, 2024",
  },
  {
    id: 3,
    image: bilingual,
    title: "Tagline, Bi-lingual school",
    author: "Alice Johnson",
    date: "Mar 20, 2024",
  },
  {
    id: 4,
    image: blur,
    title: "coming soon",
    author: "Bob Brown",
    date: "Apr 25, 2024",
    blur: true, // ✅ Add this line
  },
];

const Course: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const totalProjects = projects.length;

  return (
    <>
      <Carousels />
      {/* <div className="flex flex-col items-center justify-center w-full md:w-10/13 mx-auto my-10">
        <h3 className="font-bold uppercase text-[25px]">Our Popular Courses</h3>
        <div className="courseCardGrids">
          {coursesData.map((course) => (
            <CardImage key={course.id} course={course} />
          ))}
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center w-full md:w-10/13 mx-auto my-10 ">
        <h3 className="font-bold uppercase text-[25px]">Our Popular Courses</h3>
        <div className="courseCardGrids">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              style={{ originY: 0.5 }} // optional, smooth scale anchor
            >
              <CardImage course={course} />
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <ClassTimings />
      </div>
<ButterflyAndGymi/>
      <div>
        <main ref={container} className="main courseContents mt-10">
          {/* {projects.map((project, i) => {
            const targetScale = 1 - (totalProjects - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * (1 / totalProjects), (i + 1) * (1 / totalProjects)]}
                targetScale={targetScale}
              />
            );
          })} */}
          {/* {projects.map((project, i) => {
            const targetScale = 1 - (totalProjects - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * (1 / totalProjects), (i + 1) * (1 / totalProjects)]}
                targetScale={targetScale}
              />
            );
          })} */}
          {projects.map((project, i) => {
            const targetScale = 1 - (totalProjects - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project} // spreading project props here
                progress={scrollYProgress}
                range={[i * (1 / totalProjects), (i + 1) * (1 / totalProjects)]}
                targetScale={targetScale}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Course;
