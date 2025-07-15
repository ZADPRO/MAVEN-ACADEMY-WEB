import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../UI/Card/Card";
import { useTranslation } from "react-i18next";

// const Calender: React.FC = () => {
//   const { t } = useTranslation("global");

//   return (
//     <div className="min-h-screen  py-12 px-4 sm:px-8 lg:px-20 bg-[#fff2cd] ">
//       <h1 className="text-3xl sm:text-5xl font-bold text-[#1e3a8a] mb-5 text-center">
//         {/* OUR COURSES{" "} */} {t("gymi.heading")}
//       </h1>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="grid gap-8 md:grid-cols-2"
//       >
//         {/* <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
//           <CardContent>
//             <h2 className="text-2xl font-bold mb-4 text-[#000] text-center">
//               Lang- & Kurzgymi Exam Training
//             </h2>
//             <h3 className="text-xl mb-4 text-[#000]">
//               Subjects: German & Maths
//             </h3>

//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               Timings{" "}
//               <span className="text-[#000]">(In-person and online)</span>
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>German: Fridays, 16:00-18:00, 18:30-20:00</li>
//               <li>Maths: Saturdays, 10:00-12:00</li>
//               <li>Maths: Sundays, 10:00-12:00</li>
//             </ul>

//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               Price
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>3600 CHF for group lessons (August-February package)</li>
//               <li>50 CHF per hour for individual lessons</li>
//             </ul>
//           </CardContent>
//         </Card>
//         <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
//           <CardContent>
//             <h2 className="text-2xl font-bold mb-4 text-[#000] text-center">
//               Probezeit (probation period) training after the Gymi exam{" "}
//             </h2>
//             <h3 className="text-xl mb-4 text-[#000]">
//               Subjects: Subjects Maths, English, German, French
//             </h3>
//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               Timings{" "}
//               <span className="text-[#[#1e3a8a]]">(In-person and online)</span>
//             </h3>

//             <p className="list-disc list-inside text-[#000]">
//               Can be fixed with the teacher for mutual convenience.
//             </p>
//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               Price
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>50 CHF per hour for 1:1</li>
//               <li>180 CHF per month for group lessons</li>
//             </ul>
//           </CardContent>
//         </Card> */}
//         <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
//           <CardContent>
//             <h2 className="text-2xl font-bold mb-4 text-[#000] text-center">
//               {t("gymi.title1")}
//             </h2>
//             <h3 className="text-xl mb-4 text-[#000]">{t("gymi.subjects1")}</h3>

//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               {t("gymi.timings")}{" "}
//               <span className="text-[#000]">{t("gymi.mode")}</span>
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>{t("gymi.timing1")}</li>
//               <li>{t("gymi.timing2")}</li>
//               <li>{t("gymi.timing3")}</li>
//             </ul>

//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               {t("gymi.price")}
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>{t("gymi.price1")}</li>
//               <li>{t("gymi.price2")}</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
//           <CardContent>
//             <h2 className="text-2xl font-bold mb-4 text-[#000] text-center">
//               {t("gymi.title2")}
//             </h2>
//             <h3 className="text-xl mb-4 text-[#000]">{t("gymi.subjects2")}</h3>
//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               {t("gymi.timings")}{" "}
//               <span className="text-[#000]">{t("gymi.mode")}</span>
//             </h3>

//             <p className="list-disc list-inside text-[#000]">
//               {t("gymi.timingNote")}
//             </p>

//             <h3 className="text-lg font-semibold mt-5 mb-3 text-[#000]">
//               {t("gymi.price")}
//             </h3>
//             <ul className="list-disc list-inside text-[#000]">
//               <li>{t("gymi.price3")}</li>
//               <li>{t("gymi.price4")}</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default Calender;



const Calender: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <div className="w-full bg-[#fff2cd] py-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-10 text-center leading-snug break-words">
        {t("gymi.heading")}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* --- Card 1 --- */}
        <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-6 sm:p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
          <CardContent className="space-y-4 text-[#000]">
            <h2 className="text-xl sm:text-2xl font-bold text-center break-words">
              {t("gymi.title1")}
            </h2>
            <h3 className="text-lg sm:text-xl">{t("gymi.subjects1")}</h3>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {t("gymi.timings")}{" "}
                <span className="text-[#000] font-normal">{t("gymi.mode")}</span>
              </h3>
              <ul className="list-disc list-inside">
                <li>{t("gymi.timing1")}</li>
                <li>{t("gymi.timing2")}</li>
                <li>{t("gymi.timing3")}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {t("gymi.price")}
              </h3>
              <ul className="list-disc list-inside">
                <li>{t("gymi.price1")}</li>
                <li>{t("gymi.price2")}</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* --- Card 2 --- */}
        <Card className="rounded-3xl shadow-2xl border border-[#c4d3f6] p-6 sm:p-8 bg-gradient-to-br from-[#e8c10a] to-[#c89606] hover:scale-[1.02] transition duration-300">
          <CardContent className="space-y-4 text-[#000]">
            <h2 className="text-xl sm:text-2xl font-bold text-center break-words">
              {t("gymi.title2")}
            </h2>
            <h3 className="text-lg sm:text-xl">{t("gymi.subjects2")}</h3>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {t("gymi.timings")}{" "}
                <span className="text-[#000] font-normal">{t("gymi.mode")}</span>
              </h3>
              <p className="text-base">{t("gymi.timingNote")}</p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-1">
                {t("gymi.price")}
              </h3>
              <ul className="list-disc list-inside">
                <li>{t("gymi.price3")}</li>
                <li>{t("gymi.price4")}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Calender;
