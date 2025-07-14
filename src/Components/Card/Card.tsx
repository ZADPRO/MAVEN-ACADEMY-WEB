import React, { useRef } from "react";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import "./Card.css";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer  ">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          insetBlockStart: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2 className="text-2xl">{title}</h2>
        <div className="body">
          <div className="description">
            <p className="text-sm">{description}</p>
          </div>
          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <img src={src} className="classImages" alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

// import React, { useRef } from "react";
// import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
// import "./Card.css";
// import Gymipopup from "../PopUpContent/GymiPopup";

// interface CardProps {
//   i: number;
//   title: string;
//   description: string;
//   src: string;
//   link: string;
//   color: string;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
// }

// const Card: React.FC<CardProps> = ({
//   // i,
//   title,
//   description,
//   src,
//   color,
//   progress,
//   range,
//   targetScale,
// }) => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });

//   // Animate image scale on scroll inside card
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

//   // Animate card scale based on progress passed from parent or something else
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <motion.div
//       ref={container}
//       className="cardContainer"
//       style={{ scale }}
//       // Optional: fade in/out based on scroll
//       // initial={{ opacity: 0.5 }}
//       // whileInView={{ opacity: 1 }}
//       // viewport={{ once: false, amount: 0.5 }}
//     >
//       <div className="card" style={{ backgroundColor: color }}>
//         <h2 className="font-bold text-3xl">{title}</h2>
//         <div className="body text-sm">
//           <div className="description p-3 text-sm">
//             <p>{description}</p>
//           </div>
//           <div className="imageContainer">
//             <motion.div className="inner" style={{ scale: imageScale }}>
//               <img src={src} className="classImages" alt="image" />
//             </motion.div>
//           </div>
//         </div>
//         <Gymipopup/>
//       </div>
//     </motion.div>
//   );
// };

// export default Card;

// import React, { useRef } from "react";
// import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
// import "./Card.css";

// // import Gymipopup from "../PopUpContent/GymiPopup";
// // import Ligunalpopup from "../PopUpContent/Ligunalpopup";
// // import Butterflypopup from "../PopUpContent/ButterflyPopup";

// interface CardProps {
//   i: number;
//   title: string;
//   description: string;
//   src: string;
//   link: string;
//   color: string;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   src,
//   color,
//   progress,
//   range,
//   targetScale,
// }) => {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });

//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);

 

//   return (
//     <>
//       <motion.div ref={container} className="cardContainer" style={{ scale }}>
//         <div className="card" style={{ backgroundColor: color }}>
//           <h2 className="font-bold text-3xl">{title}</h2>
//           <div className="body text-sm">
//             <div className="description p-3 text-sm">
//               <p>{description}</p>
//             </div>

//             {/* <button
//               className="italic underline text-blue-700 hover:text-blue-900 mt-2"
//               onClick={() => setIsPopupOpen(true)}
//             >
//               Explore More
//             </button> */}

//             <div className="imageContainer">
//               <motion.div className="inner" style={{ scale: imageScale }}>
//                 <img src={src} className="classImages" alt="image" />
//               </motion.div>
//             </div>
//           </div>
//           {/* {renderPopup()} */}
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Card;
