// import React, { useEffect, useRef } from "react";
// import Glide from "@glidejs/glide";
// import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";
// import img1 from "../../assets/course/girl-1.jpg";
// import img2 from "../../assets/course/girl-2.jpg";
// import img3 from "../../assets/course/boy-1.jpg";
// import img4 from "../../assets/course/boy-2.jpg";
// import img5 from "../../assets/course/girl-3.jpg"
// import img6 from "../../assets/course/priya.jpg";
// import img7 from "../../assets/course/girl-4.jpg";
// import img8 from "../../assets/course/boy-3.jpg";
// import { useTranslation } from "react-i18next";

// const lightLemonYellow = "#fff9db";
// const darkLemonYellow = "#c89606";

// const Testimonials: React.FC = () => {
//   const { t } = useTranslation("global");

//   const glideRef = useRef<Glide | null>(null);
//   const glideReverseRef = useRef<Glide | null>(null);

//    const testimonials = [
//     {
//       id: 1,
//       name: t("testimonials.testimonial1.name"),
//       quote: t("testimonials.testimonial1.quote"),
//       image: img8,
//     },
//     {
//       id: 2,
//       name: t("testimonials.testimonial2.name"),
//       quote: t("testimonials.testimonial2.quote"),
//       image: img2,
//     },
//     {
//       id: 3,
//       name: t("testimonials.testimonial3.name"),
//       quote: t("testimonials.testimonial3.quote"),
//       image: img3,
//     },
//     {
//       id: 4,
//       name: t("testimonials.testimonial4.name"),
//       quote: t("testimonials.testimonial4.quote"),
//       image: img4,
//     },
//   ];

//   const testimonialsClone = [
//     {
//       id: 5,
//       name: t("testimonials.testimonial5.name"),
//       quote: t("testimonials.testimonial5.quote"),
//       image: img5,
//     },
//     {
//       id: 6,
//       name: t("testimonials.testimonial6.name"),
//       quote: t("testimonials.testimonial6.quote"),
//       image: img6,
//     },
//     {
//       id: 7,
//       name: t("testimonials.testimonial7.name"),
//       quote: t("testimonials.testimonial7.quote"),
//       image: img7,
//     },
//     {
//       id: 8,
//       name: t("testimonials.testimonial8.name"),
//       quote: t("testimonials.testimonial8.quote"),
//       image: img1,
//     },
//   ];
//   useEffect(() => {
//     const glide = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1000,
//       animationDuration: 6000,
//       animationTimingFunc: "linear",
//       perView: 3,
//       gap: 20,
//       hoverpause: false,
//       keyboard: false,
//       breakpoints: { 1024: { perView: 2 }, 640: { perView: 1 } },
//     });
//     glide.mount();
//     glideRef.current = glide;

//     const glideReverse = new Glide(".glide-09-reverse", {
//       type: "carousel",
//       autoplay: 1000,
//       animationDuration: 6000,
//       animationTimingFunc: "linear",
//       perView: 3,
//       gap: 20,
//       hoverpause: false,
//       keyboard: false,
//       breakpoints: { 1024: { perView: 2 }, 640: { perView: 1 } },
//     });
//     glideReverse.mount();
//     glideReverseRef.current = glideReverse;

//     return () => {
//       glide.destroy();
//       glideReverse.destroy();
//     };
//   }, []);

//   return (
//     <div className="testimonials-section max-w-8xl mx-0 p-3 bg-[#fefdf8] mt-3">
//       {/* First carousel */}
//       <div>
//         <h2 className="text-center text-5xl font-bold mb-3 text-[#1e3a8a] mt-4">
//           {t("testimonials.heading")}
//         </h2>
//         <div className="glide-09 relative w-full overflow-hidden py-6">
//           <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides">
//               {testimonials.map((t) => (
//                 <li key={t.id} className="glide__slide px-0 cursor-pointer">
//                   <div
//                     className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
//                     style={{
//                       backgroundColor: lightLemonYellow,
//                       // borderTop: `4px solid ${darkLemonYellow}`,
//                       borderLeft: `4px solid ${darkLemonYellow}`,
//                       padding: "1rem",
//                       gap: "1rem",
//                           height: "200px", // ✅ fixed height

//                     }}
//                   >
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="object-cover rounded-none "
//                       style={{ width: "100px", height: "140px", flexShrink: 0 }}
//                     />
//                     <div className="flex flex-col text-left">
//                       <h3 className=" text-indigo-700">
//                         {t.name}
//                         <p className=" mb-2 text-gray-700">{t.quote}</p>
//                       </h3>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Second carousel immediately below, no spacing, reverse direction */}
//       <div
//         className="glide-09-reverse relative w-full overflow-hidden py-6 mt-0"
//         style={{ transform: "scaleX(-1)" }}
//       >
//         <div className="glide__track" data-glide-el="track">
//           <ul className="glide__slides">
//             {testimonialsClone.map((t) => (
//               <li
//                 key={t.id}
//                 className="glide__slide px-0 cursor-pointer"
//                 style={{ transform: "scaleX(-1)" }}
//               >
//                 <div
//                   className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
//                   style={{
//                     backgroundColor: lightLemonYellow,
//                     // borderTop: `4px solid ${darkLemonYellow}`,
//                     // borderRight: `4px solid ${darkLemonYellow}`,
//                     borderLeft: `4px solid ${darkLemonYellow}`,
//                     padding: "1rem",
//                     gap: "1rem",
//                         height: "200px", // ✅ fixed height

//                   }}
//                 >
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="object-cover rounded-none"
//                     style={{ width: "100px", height: "140px", flexShrink: 0 }}
//                   />
//                   <div className="flex flex-col text-left">
//                     <h3 className=" text-indigo-700">{t.name}</h3>
//                     <p className=" mb-2 text-gray-700">{t.quote}</p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import img1 from "../../assets/course/girl-1.jpg";
import img2 from "../../assets/course/girl-2.jpg";
import img3 from "../../assets/course/boy-1.jpg";
import img4 from "../../assets/course/boy-2.jpg";
import img5 from "../../assets/course/girl-3.jpg";
import img6 from "../../assets/course/priya.jpg";
import img7 from "../../assets/course/girl-4.jpg";
import img8 from "../../assets/course/boy-3.jpg";
import { useTranslation } from "react-i18next";

const lightLemonYellow = "#fff9db";
const darkLemonYellow = "#c89606";

const Testimonials: React.FC = () => {
  const { t } = useTranslation("global");

  const glideRef = useRef<Glide | null>(null);
  const glideReverseRef = useRef<Glide | null>(null);

  const testimonials = [
    {
      id: 1,
      name: t("testimonials.testimonial1.name"),
      quote: t("testimonials.testimonial1.quote"),
      image: img8,
    },
    {
      id: 2,
      name: t("testimonials.testimonial2.name"),
      quote: t("testimonials.testimonial2.quote"),
      image: img2,
    },
    {
      id: 3,
      name: t("testimonials.testimonial3.name"),
      quote: t("testimonials.testimonial3.quote"),
      image: img3,
    },
    {
      id: 4,
      name: t("testimonials.testimonial4.name"),
      quote: t("testimonials.testimonial4.quote"),
      image: img4,
    },
  ];

  const testimonialsClone = [
    {
      id: 5,
      name: t("testimonials.testimonial5.name"),
      quote: t("testimonials.testimonial5.quote"),
      image: img5,
    },
    {
      id: 6,
      name: t("testimonials.testimonial6.name"),
      quote: t("testimonials.testimonial6.quote"),
      image: img6,
    },
    {
      id: 7,
      name: t("testimonials.testimonial7.name"),
      quote: t("testimonials.testimonial7.quote"),
      image: img7,
    },
    {
      id: 8,
      name: t("testimonials.testimonial8.name"),
      quote: t("testimonials.testimonial8.quote"),
      image: img1,
    },
  ];

  useEffect(() => {
    const glide = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 3000,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      hoverpause: false,
      keyboard: false,
      breakpoints: { 1024: { perView: 2 }, 640: { perView: 1 } },
    });
    glide.mount();
    glideRef.current = glide;

    const glideReverse = new Glide(".glide-09-reverse", {
      type: "carousel",
      autoplay: 3000,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      hoverpause: false,
      keyboard: false,
      breakpoints: { 1024: { perView: 2 }, 640: { perView: 1 } },
      // We use scaleX transform for reverse effect, so no native reverse option here.
    });
    glideReverse.mount();
    glideReverseRef.current = glideReverse;

    return () => {
      glide.destroy();
      glideReverse.destroy();
    };
  }, []);

  return (
    // <div className="testimonials-section max-w-7xl mx-auto px-4 py-8 bg-[#fefdf8] mt-6">
        <div className="testimonials-section max-w-8xl mx-0 p-3 bg-[#fefdf8] mt-1">

      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-8 text-[#1e3a8a]">
        {t("testimonials.heading")}
      </h2>

      {/* First carousel */}
      <div className="glide-09 relative w-full overflow-hidden py-6">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {testimonials.map((item) => (
              <li
                key={item.id}
                className="glide__slide cursor-pointer px-2"
                style={{ minWidth: "280px" }}
              >
                <div
                  className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
                  style={{
                    backgroundColor: lightLemonYellow,
                    borderLeft: `4px solid ${darkLemonYellow}`,
                    padding: "1rem",
                    gap: "1rem",
                    height: "200px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-none flex-shrink-0"
                    style={{ width: "100px", height: "140px" }}
                  />
                  <div className="flex flex-col text-left overflow-hidden">
                    <h3 className="text-indigo-700 font-semibold truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 mt-1 line-clamp-5">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second carousel (reverse direction) */}
      <div
        className="glide-09-reverse relative w-full overflow-hidden py-6 mt-0"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {testimonialsClone.map((item) => (
              <li
                key={item.id}
                className="glide__slide cursor-pointer px-2"
                style={{ minWidth: "280px", transform: "scaleX(-1)" }}
              >
                <div
                  className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
                  style={{
                    backgroundColor: lightLemonYellow,
                    borderLeft: `4px solid ${darkLemonYellow}`,
                    padding: "1rem",
                    gap: "1rem",
                    height: "200px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover rounded-none flex-shrink-0"
                    style={{ width: "100px", height: "140px" }}
                  />
                  <div className="flex flex-col text-left overflow-hidden">
                    <h3 className="text-indigo-700 font-semibold truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 mt-1 line-clamp-5">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
