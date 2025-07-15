// import React from "react";
// import { motion } from "framer-motion";

// const ClassTimings: React.FC = () => {
//   const classes = [
//     {
//       subject: "German",
//       days: ["F"],
//       name: "Gymi course",
//       time: ["16:00 - 18:00", "18:30 - 20:00"],
//       mode: "In-person / Online",
//       animation: {
//         initial: { opacity: 0, rotate: -10, scale: 0.8 },
//         whileInView: { opacity: 1, rotate: 0, scale: 1 },
//       },
//     },
//     {
//       subject: "Mathematics",
//       days: ["S", "S"],
//       name: "Gymi course",
//       time: ["10:00 - 12:00", "10:00 - 12:00"],
//       mode: "In-person / Online",
//       animation: {
//         initial: { opacity: 0, y: 80 },
//         whileInView: { opacity: 1, y: 0 },
//       },
//     },
//     {
//       subject: "Language Arts, Mathematics",
//       days: ["M", "T", "W", "T", "F"],
//       name: "Butterfly Gardens",
//       time: ["8:30 - 12:30"],
//       mode: "In-person / Online",
//       animation: {
//         initial: { opacity: 0, y: 80 },
//         whileInView: { opacity: 1, y: 0 },
//       },
//     },
//   ];
//   const renderDays = (days: string[]) => {
//     const allDays = ["S", "M", "T", "W", "T", "F", "S"];
//     return (
//       <div className="flex justify-center gap-4 mb-6">
//         {allDays.map((day, idx) => (
//           <span
//             key={idx}
//             className={`w-8 h-8 flex items-center justify-center rounded-full ${
//               days.includes(day) ? "bg-purple-600 text-white" : "text-[#9ca3af]"
//             } text-sm font-semibold`}
//           >
//             {day}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div
//       className="mt-8 flex flex-col items-center mb-5 py-12 px-4 rounded-2xl shadow-inner"
//       style={{
//         background: "linear-gradient(135deg, #f0f4ff, #e1e9ff)",
//         // background: "#fff2cd",
//         minHeight: "100vh",
//         width: "100%",
//       }}
//     >
//       <h2 className="text-4xl font-bold mb-10 text-[#1e3a8a] text-center drop-shadow-lg">
//         Class Timings Overview
//       </h2>
//       <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">
//         {classes.slice(0, 3).map((item, index) => (
//           <motion.div
//             key={index}
//             initial={classes[0].animation.initial}
//             whileInView={classes[0].animation.whileInView}
//             transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
//             viewport={{ once: true }}
//             whileHover={{
//               scale: 1.05,
//               rotate: 2, // same rotate as index 0
//               boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
//             }}
//             className="bg-white rounded-2xl shadow-2xl border border-[#d1d5db] p-6 w-full max-w-sm"
//           >
//             {renderDays(item.days)}

//             <div className="flex flex-col text-[#1e3a8a] font-semibold mb-4 text-base">
//               <div className="mb-2">
//                 <span className="text-sm text-[#6b7280]">
//                   {/* Optional label or empty? */}
//                 </span>
//                 <span className="flex justify-center items-center text-[#1e3a8a] ">
//                   {item.name}
//                 </span>
//               </div>

//               <div className="mb-2">
//                 <span className="block text-sm text-[#6b7280]">Subject</span>
//                 <span>{item.subject}</span>
//               </div>

//               <div className="mb-2">
//                 <span className="block text-sm text-[#6b7280]">Time</span>
//                 <span>{item.time.join(", ")}</span>
//               </div>

//               <div className="mb-4">
//                 <span className="block text-sm text-[#6b7280]">Mode</span>
//                 <span>{item.mode}</span>
//               </div>
//             </div>
//             {/* <Gymipopup /> */}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClassTimings;

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ClassTimings: React.FC = () => {
  const { t } = useTranslation("global");

  const classes = [
    {
      subject: t("classTimings.subjects.german"),
      days: ["F"],
      name: t("classTimings.gymi"),
      time: ["16:00 - 18:00", "18:30 - 20:00"],
      mode: t("classTimings.modeType"),
      animation: {
        initial: { opacity: 0, rotate: -10, scale: 0.8 },
        whileInView: { opacity: 1, rotate: 0, scale: 1 },
      },
    },
    {
      subject: t("classTimings.subjects.math"),
      days: ["S", "S"],
      name: t("classTimings.gymi"),
      time: ["10:00 - 12:00", "10:00 - 12:00"],
      mode: t("classTimings.modeType"),
      animation: {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
      },
    },
    {
      subject: t("classTimings.subjects.langMath"),
      days: ["M", "T", "W", "T", "F"],
      name: t("classTimings.butterfly"),
      time: ["8:30 - 12:30"],
      mode: t("classTimings.modeType"),
      animation: {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
      },
    },
  ];

  const renderDays = (days: string[]) => {
    const allDays = ["S", "M", "T", "W", "T", "F", "S"]; // Su -> Sa (as per original design)
    return (
      <div className="flex justify-center gap-4 mb-6">
        {allDays.map((day, idx) => (
          <span
            key={idx}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              days.includes(day) ? "bg-purple-600 text-white" : "text-[#9ca3af]"
            } text-sm font-semibold`}
          >
            {day}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="mt-8 flex flex-col items-center mb-5 py-12 px-4 rounded-2xl shadow-inner"
      style={{
        background: "linear-gradient(135deg, #f0f4ff, #e1e9ff)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h2 className="text-4xl font-bold mb-10 text-[#1e3a8a] text-center drop-shadow-lg">
        {t("classTimings.heading")}
      </h2>

      <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">
        {classes.map((item, index) => (
          <motion.div
            key={index}
            initial={item.animation.initial}
            whileInView={item.animation.whileInView}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
            }}
            className="bg-white rounded-2xl shadow-2xl border border-[#d1d5db] p-6 w-full max-w-sm"
          >
            {renderDays(item.days)}

            <div className="flex flex-col text-[#1e3a8a] font-semibold mb-4 text-base">
              <div className="mb-2">
                <span className="flex justify-center items-center text-[#1e3a8a]">
                  {item.name}
                </span>
              </div>

              <div className="mb-2">
                <span className="block text-sm text-[#6b7280]">
                  {t("classTimings.subject")}
                </span>
                <span>{item.subject}</span>
              </div>

              <div className="mb-2">
                <span className="block text-sm text-[#6b7280]">
                  {t("classTimings.time")}
                </span>
                <span>{item.time.join(", ")}</span>
              </div>

              <div className="mb-4">
                <span className="block text-sm text-[#6b7280]">
                  {t("classTimings.mode")}
                </span>
                <span>{item.mode}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClassTimings;
