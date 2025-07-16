// import React from "react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// // import ShuffleGrids from "../../pages/ShuffleGrid/ShuffleGrid";
// import "./Home.css";
// import img1 from "../../assets/home/01.jpg";
// import img2 from "../../assets/home/02.jpg";
// import img3 from "../../assets/home/03.jpg";
// import img4 from "../../assets/home/04.jpg";
// import img5 from "../../assets/home/05.jpg";
// import img6 from "../../assets/home/06.jpg";
// import img7 from "../../assets/home/07.jpg";
// import img8 from "../../assets/home/08.jpg";
// import img9 from "../../assets/home/09.jpg";
// import img10 from "../../assets/home/10.jpg";
// import img11 from "../../assets/home/11.jpg";
// import img12 from "../../assets/home/12.jpg";
// import img13 from "../../assets/home/13.jpg";
// import img14 from "../../assets/home/14.jpg";
// import img15 from "../../assets/home/15.jpg";
// import img16 from "../../assets/home/16.jpg";
// import { useNavigate } from "react-router";
// import Loading from "../../Pages/Loading/Loading";
// import Testimonials from "../../Components/Testimonials/Testimonials";
// import Calender from "../../Components/Calender/Calender";
// import Carousels from "../../Components/Carousel/Carousel";
// import { useTranslation } from "react-i18next";

// const Home: React.FC = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const { t } = useTranslation("global");

//   const handleNavigation = (path: string) => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate(path);
//       window.scrollTo(0, 0);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <>
//       {loading && <Loading />}

//       <div>
//         <Carousels />

//         {/* <div className="primary bg-[#fefdf8] mt-0">
//           <section className="w-full md:h-screen mt-2 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto  ">
//             <div className="newclass">
//               <span className="block mb-4 text-xl text-[#020f46] font-medium">
//                 Your Partner in Lifelong Learning
//               </span>
//               <h3 className="text-4xl md:text-6xl font-extralight text-[#000]">
//                 Welcome to{" "}
//                 <span className="text-[#FFD700] font-black">
//                   {" "}
//                   Maven Academy
//                 </span>
//               </h3>
//               <p
//                 className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
//                 style={{ textIndent: "2rem", fontSize: "20px" }}
//               >
//                 We believe that learning is a lifelong journey. Whether you want
//                 to enhance your academic performance, explore new skills, or
//                 nurture your personal growth, we are here to help you succeed.
//                 With a wide range of online and live physical classes, we offer
//                 comprehensive academic and non-academic tuition designed to meet
//                 your unique needs and learning goals.
//               </p>

//               <button
//                 className="bg-[#020f46] text-white font-medium py-2 px-6 transition-all hover:text-[#FFD700] active:scale-95 rounded-4xl flex items-center gap-3"
//                 onClick={() => handleNavigation("/course")}
//               >
//                 Book a Class Today{" "}
//                 <span className="rounded-full bg-[#FFD700] text-[#000a35] px-3 py-2 hover:text-[#000a35] ml-2">
//                   🡢
//                 </span>
//               </button>
//             </div>
//             <ShuffleGrid />
//           </section>
//           <Calender />
//         </div> */}
//         <div className="primary bg-[#fefdf8] mt-0">
//           <section className="w-full md:h-screen mt-2 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
//             <div className="newclass">
//               <span className="block mb-4 text-xl text-[#020f46] font-medium">
//                 {t("hero.tagline")}
//               </span>
//               <h3 className="text-4xl md:text-6xl font-extralight text-[#000]">
//                 {t("hero.welcome")}{" "}
//                 <span className="text-[#FFD700] font-black">
//                   {t("hero.academy")}
//                 </span>
//               </h3>
//               <p
//                 className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
//                 style={{ textIndent: "2rem", fontSize: "20px" }}
//               >
//                 {t("hero.description")}
//               </p>

//               <button
//                 className="bg-[#020f46] text-white font-medium py-2 px-6 transition-all hover:text-[#FFD700] active:scale-95 rounded-4xl flex items-center gap-3"
//                 onClick={() => handleNavigation("/course")}
//               >
//                 {t("hero.cta")}{" "}
//                 <span className="rounded-full bg-[#FFD700] text-[#000a35] px-3 py-2 hover:text-[#000a35] ml-2">
//                   🡢
//                 </span>
//               </button>
//             </div>
//             <ShuffleGrid />
//           </section>
//           <Calender />
//         </div>
//       </div>
//       <Testimonials />
//     </>
//   );
// };

// export default Home;

// const shuffle = (array: (typeof squareData)[0][]) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: img1,
//   },
//   {
//     id: 2,
//     src: img2,
//   },
//   {
//     id: 3,
//     src: img3,
//   },
//   {
//     id: 4,
//     src: img4,
//   },
//   {
//     id: 5,
//     src: img5,
//   },
//   {
//     id: 6,
//     src: img6,
//   },
//   {
//     id: 7,
//     src: img7,
//   },
//   {
//     id: 8,
//     src: img8,
//   },
//   {
//     id: 9,
//     src: img9,
//   },
//   {
//     id: 10,
//     src: img10,
//   },
//   {
//     id: 11,
//     src: img11,
//   },
//   {
//     id: 12,
//     src: img12,
//   },
//   {
//     id: 13,
//     src: img13,
//   },
//   {
//     id: 14,
//     src: img14,
//   },
//   {
//     id: 15,
//     src: img15,
//   },
//   {
//     id: 16,
//     src: img16,
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<any>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import Loading from "../../Pages/Loading/Loading";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Calender from "../../Components/Calender/Calender";
import Carousels from "../../Components/Carousel/Carousel";

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.jpg";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.jpg";
import img6 from "../../assets/home/06.jpg";
import img7 from "../../assets/home/07.jpg";
import img8 from "../../assets/home/08.jpg";
import img9 from "../../assets/home/09.jpg";
import img10 from "../../assets/home/10.jpg";
import img11 from "../../assets/home/11.jpg";
import img12 from "../../assets/home/12.jpg";
import img13 from "../../assets/home/13.jpg";
import img14 from "../../assets/home/14.jpg";
import img15 from "../../assets/home/15.jpg";
import img16 from "../../assets/home/16.jpg";
import img17 from "../../assets/home/17.jpg";

import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("global");

  const handleNavigation = (path: string) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {loading && <Loading />}
      <div>
        <Carousels />
        <div className="primary bg-[#fefdf8] mt-0">
          <section className="w-full px-4 sm:px-8 py-12 flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl mx-auto">
            <div className="flex-1">
              <span className="block mb-4 text-lg text-[#020f46] font-medium break-words">
                {t("hero.tagline")}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#000] break-words leading-tight mb-4">
                {t("hero.welcome")}{" "}
                <span className="text-[#FFD700] font-black">
                  {t("hero.academy")}
                </span>
              </h3>
              <p className="text-base sm:text-lg text-slate-700 mb-6 break-words whitespace-normal text-justify">
                {t("hero.description")}
              </p>
              <button
                onClick={() => handleNavigation("/course")}
                className="bg-[#020f46] text-white font-medium py-2 px-4 sm:px-6 transition-all hover:text-[#FFD700] active:scale-95 rounded-3xl flex flex-wrap items-center gap-2"
              >
                {t("hero.cta")}
                <span className="rounded-full bg-[#FFD700] text-[#000a35] px-3 py-2 hover:text-[#000a35]">
                  🡢
                </span>
              </button>
            </div>
            <div className="flex-1 w-full">
              <ShuffleGrid />
            </div>
          </section>
          <Calender />

          <div className="bg-gradient-to-b mt-1 from-yellow-100 to-yellow-50 text-gray-800 py-12 space-y-24">
            {/* Butterfly Garden Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 px-6 max-w-6xl mx-auto">
              {/* Image */}
              <motion.img
                src={img13}
                alt="Butterfly Garden"
                className="w-full max-w-md rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Text */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-blue-950 mb-4">
                  {t("butterflyAndGymi.header.title")}
                </h2>
                <p className="italic text-lg text-blue-950 mb-4">
                  “{t("butterflyAndGymi.header.subtitle")}”
                </p>
                <p className="text-md leading-relaxed text-gray-700">
                  {t("coursescard.projects.1.description")}
                </p>
              </motion.div>
            </div>

            {/* Gymi Course Section */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6 max-w-6xl mx-auto">
              {/* Text */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-blue-950 mb-4">
                  {t("butterflyAndGymi.gymiCourse.title")}
                </h2>
                <p className="italic text-lg text-blue-950 mb-4">
                  “{t("butterflyAndGymi.gymiCourse.subtitle")}”
                </p>
                <p className="text-md leading-relaxed text-gray-700">
                  {t("coursescard.projects.0.description")}
                </p>
              </motion.div>

              {/* Image */}
              <motion.img
                src={img17}
                alt="Gymi Course"
                className="w-full max-w-md rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;

// Shuffle grid logic remains unchanged
const squareData = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
];

const shuffle = (array: typeof squareData) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const generateSquares = () => {
  return shuffle([...squareData]).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[350px] gap-1">
      {squares}
    </div>
  );
};
