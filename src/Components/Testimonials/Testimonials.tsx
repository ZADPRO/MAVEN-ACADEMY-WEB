import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import img1 from "../../assets/home/01.jpg";

const testimonials = [
  {
    id: 1,
    name: "Markus L, Parent, Zurich",
    quote: "The Gymi prep course at Maven Academy was incredibly helpful. My son felt supported every step of the way, and he passed with confidence.",
    image: img1,
  },
  {
    id: 2,
    name: "Elena S, Parent, Zug",
    quote: "We enrolled our daughter in the English language program at Maven, and we’ve seen such improvement.",
    image: img1,
  },
  {
    id: 3,
    name: "Daniel M, Parent, Winterthur",
    quote: "Maven’s coding classes have sparked a real interest in technology for my 10-year-old. He looks forward to every session.",
    image: img1,
  },
  {
    id: 4,
    name: "Tobias J, Parent, Bern",
    quote: "The flexible mix of in-person and online classes made it so much easier to manage our schedule. We love that Maven offers quality education.",
    image: img1,
  },
];

const testimonialsClone = [
  {
    id: 5,
    name: "Caroline W, Parent, Basel",
    quote: "My son was always shy about speaking in front of others. After a few months with Maven’s public speaking program, he’s more confident and expressive.",
    image: img1,
  },
  {
    id: 6,
    name: "Priya R, Parent, Lausanne",
    quote: "I was pleasantly surprised by how much my daughter enjoyed the yoga sessions. It’s helped her manage stress and stay balanced during schoolwork. ",
    image: img1,
  },
  {
    id: 7,
    name: "Isabelle G, Parent, Zurich",
    quote: "Maven Academy doesn’t just teach subjects – they build confidence, curiosity, and communication. It’s exactly the kind of education I want for my kids.",
    image: img1,
  },
  {
    id: 8,
    name: "Nadia F, Parent, Lucerne",
    quote: "From the very first class, we felt welcomed and supported. The team at Maven is passionate, professional, and truly cares about every child’s progress.",
    image: img1,
  },
];

const lightLemonYellow = "#fff9db";
const darkLemonYellow = "#c89606";

const Testimonials: React.FC = () => {
  const glideRef = useRef<Glide | null>(null);
  const glideReverseRef = useRef<Glide | null>(null);

  useEffect(() => {
    const glide = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1000,
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
      autoplay: 1000,
      animationDuration: 6000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 20,
      hoverpause: false,
      keyboard: false,
      breakpoints: { 1024: { perView: 2 }, 640: { perView: 1 } },
    });
    glideReverse.mount();
    glideReverseRef.current = glideReverse;

    return () => {
      glide.destroy();
      glideReverse.destroy();
    };
  }, []);

  return (
    <div className="testimonials-section max-w-8xl mx-0 p-3 bg-[#fefdf8] mt-3">
      {/* First carousel */}
      <div>
        <h2 className="text-center text-5xl font-bold mb-3 text-[#1e3a8a] mt-4">
          Testimonials / Success Stories
        </h2>
        <div className="glide-09 relative w-full overflow-hidden py-6">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {testimonials.map((t) => (
                <li key={t.id} className="glide__slide px-0 cursor-pointer">
                  <div
                    className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
                    style={{
                      backgroundColor: lightLemonYellow,
                      // borderTop: `4px solid ${darkLemonYellow}`,
                      borderLeft: `4px solid ${darkLemonYellow}`,
                      padding: "1rem",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="object-cover rounded-none "
                      style={{ width: "100px", height: "140px", flexShrink: 0 }}
                    />
                    <div className="flex flex-col text-left">
                      <h3 className=" text-indigo-700">
                        {t.name}
                        <p className=" mb-2 text-gray-700">{t.quote}</p>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Second carousel immediately below, no spacing, reverse direction */}
      <div
        className="glide-09-reverse relative w-full overflow-hidden py-6 mt-0"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {testimonialsClone.map((t) => (
              <li
                key={t.id}
                className="glide__slide px-0 cursor-pointer"
                style={{ transform: "scaleX(-1)" }}
              >
                <div
                  className="flex items-center max-w-md mx-auto rounded-xl shadow-lg"
                  style={{
                    backgroundColor: lightLemonYellow,
                    // borderTop: `4px solid ${darkLemonYellow}`,
                    // borderRight: `4px solid ${darkLemonYellow}`,
                    borderLeft: `4px solid ${darkLemonYellow}`,
                    padding: "1rem",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover rounded-none"
                    style={{ width: "100px", height: "140px", flexShrink: 0 }}
                  />
                  <div className="flex flex-col text-left">
                    <h3 className=" text-indigo-700">{t.name}</h3>
                    <p className=" mb-2 text-gray-700">{t.quote}</p>
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

// import React, { useEffect, useRef } from "react";
// import Glide from "@glidejs/glide";
// import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";
// import img1 from "../../assets/home/01.jpg";

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     quote: "Great course, changed my life!",
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     quote: "Loved the practical lessons.",
//     image: img1,
//   },
//   {
//     id: 3,
//     name: "Michael Lee",
//     quote: "I landed my dream job after this!",
//     image: img1,
//   },
// ];

// const testimonialsClone = [
//   {
//     id: 4,
//     name: "Alice Cooper",
//     quote: "Fantastic content and support!",
//     image: img1,
//   },
//   {
//     id: 5,
//     name: "Bob Marley",
//     quote: "My skills improved drastically!",
//     image: img1,
//   },
//   {
//     id: 6,
//     name: "Catherine Zeta",
//     quote: "Loved every lesson and project.",
//     image: img1,
//   },
//   {
//     id: 7,
//     name: "David Bowie",
//     quote: "Highly recommend this academy.",
//     image: img1,
//   },
// ];

// const lightLemonYellow = "#000a35";
// const darkLemonYellow = "#000a35";

// const Testimonials: React.FC = () => {
//   const glideRef = useRef<Glide | null>(null);
//   const glideReverseRef = useRef<Glide | null>(null);

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
//     <div className="testimonials-section max-w-8xl mx-0 p-3 bg-white">
//       {/* First carousel */}
//       <div>
//         <h2 className="text-center text-5xl font-bold mb-3 text-[#FFD700]">
//           Testimonials / Success Stories
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
//                       borderTop: `4px solid ${darkLemonYellow}`,
//                       borderLeft: `4px solid ${darkLemonYellow}`,
//                       padding: "1rem",
//                       gap: "1rem",
//                     }}
//                   >
//                     <img
//                       src={t.image}
//                       alt={t.name}
//                       className="object-cover rounded-none "
//                       style={{ width: "100px", height: "140px", flexShrink: 0 }}
//                     />
//                     <div className="flex flex-col text-left">
//                        <h3 className="font-semibold text-[#ffff]">
//                         {t.name}
//                       <p className="italic mb-2 text-[#ffff]">"{t.quote}"</p>

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
//                     borderTop: `4px solid ${darkLemonYellow}`,
//                     borderRight: `4px solid ${darkLemonYellow}`,
//                     padding: "1rem",
//                     gap: "1rem",
//                   }}
//                 >
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="object-cover rounded-none"
//                     style={{ width: "100px", height: "140px", flexShrink: 0 }}
//                   />
//                   <div className="flex flex-col text-left">
//                     <h3 className="font-semibold text-[#ffff]">{t.name}</h3>
//                     <p className="italic mb-2 text-[#ffff]">"{t.quote}"</p>
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
