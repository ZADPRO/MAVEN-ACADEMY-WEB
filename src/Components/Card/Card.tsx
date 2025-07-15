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
