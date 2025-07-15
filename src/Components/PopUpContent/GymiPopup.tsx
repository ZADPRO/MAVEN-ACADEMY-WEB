// import React from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// const ButterflyAndGymi: React.FC = () => {
//   const { t } = useTranslation("global");

//   return (
//     <div className="px-6 py-12 space-y-12 bg-gradient-to-b from-blue-50 to-white text-gray-800">
//       {/* Header Section */}
//       <motion.div
//         className="text-center"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl font-bold text-blue-900">
//           {/* Butterfly Gardens */}
//           {t("butterflyAndGymi.header.title")}
//         </h1>
//         <p className="italic text-lg text-blue-700 mt-2">
//           “ {t("butterflyAndGymi.header.subtitle")}”
//         </p>
//       </motion.div>

//       {/* About Butterfly Gardens */}
//       <motion.section
//         className="max-w-5xl mx-auto text-center"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-2xl font-semibold mb-4">
//           {t("butterflyAndGymi.about.title")}
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//          {t("butterflyAndGymi.about.description")}
//         </p>
//       </motion.section>

//       {/* Syllabus Framework Cards */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         {[
//           {
//             title: "Language Arts",
//             desc: "Balanced literacy through stories, phonics, writing, and comprehension.",
         
//           },
//           {
//             title: "Mathematics",
//             desc: "Concepts taught using manipulatives, games, and real-life application.",
//           },
//           {
//             title: "Science & Discovery",
//             desc: "Nature studies, experiments, and thematic exploration.",
//           },
//           {
//             title: "General Knowledge",
//             desc: "World cultures, geography, and history awareness.",
//           },
//           {
//             title: "Creative Arts",
//             desc: "Art, crafts, music, drama, and expressive movement.",
//           },
//           {
//             title: "Life Skills",
//             desc: "Emotional intelligence, communication, and problem-solving.",
//           },
//         ].map((item, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white shadow-lg rounded-xl p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#a7c7e7] hover:to-[#fff4b1] hover:text-gray-800 hover:scale-105"
//           >
//             <h3 className="text-xl font-bold mb-2 transition-colors duration-300">
//               {item.title}
//             </h3>
//             <p className="transition-colors duration-300">{item.desc}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Language Integration Table */}
//       <motion.div
//         className="max-w-4xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.7 }}
//       >
//         <h2 className="text-xl font-semibold text-center mb-4">
//           {/* Language Integration by Age Group */}
//                    {t("butterflyAndGymi.languageIntegration.title")}

//         </h2>

//         <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
//           <thead className="bg-blue-200 text-blue-900">
//             <tr>
//               <th className="p-3">
//                    {t("butterflyAndGymi.languageIntegration.age")}
//                 </th>
//               <th className="p-3">Focus</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             <tr className="border-t">
//               <td className="p-3">3–5 yrs</td>
//               <td className="p-3">
//                 Songs, vocabulary, play, picture books, and motor skills.
//               </td>
//             </tr>
//             <tr className="border-t">
//               <td className="p-3">6–8 yrs</td>
//               <td className="p-3">
//                 Bilingual storytelling, reading, writing, role-play, guided
//                 reading
//               </td>
//             </tr>
//             <tr className="border-t">
//               <td className="p-3">9–12 yrs</td>
//               <td className="p-3">
//                 Essays, presentations, project work, group discussions
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </motion.div>

//       {/* Gymi Course Intro */}
//       <motion.div
//         className="text-center mt-12"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-3xl font-bold text-purple-800">
//           Gymi Course by Maven
//         </h2>
//         <p className="mt-2 text-lg font-medium text-purple-600">
//           Think, Learn, Thrive
//         </p>
//         <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
//           Gymnasium entry shapes a student’s future with opportunities to enter
//           top universities in Switzerland and abroad. At Maven, we prepare
//           children through personalized training for both Lang- and Kurzgymi
//           exams, including support during the probation period.
//         </p>
//       </motion.div>

//       {/* Gymi Course Details Table */}
//       <motion.div
//         className="max-w-4xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3 className="text-xl font-semibold text-center mb-4 mt-8">
//           Lang- & Kurzgymi Exam Training
//         </h3>
//         <table className="w-full border border-gray-300 text-left">
//           <thead className="bg-purple-200 text-purple-900">
//             <tr>
//               <th className="p-3">Subject</th>
//               <th className="p-3">Timings</th>
//               <th className="p-3">Mode</th>
//               <th className="p-3">Fees</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="p-3">German</td>
//               <td className="p-3">Fridays 16:00–18:00, 18:30–20:00</td>
//               <td className="p-3">In-person & Online</td>
//               <td className="p-3">3600 CHF (Group), 50 CHF/hr (1:1)</td>
//             </tr>
//             <tr className="border-t">
//               <td className="p-3">Mathematics</td>
//               <td className="p-3">Saturdays & Sundays 10:00–12:00</td>
//               <td className="p-3">In-person & Online</td>
//               <td className="p-3">Same as above</td>
//             </tr>
//           </tbody>
//         </table>
//       </motion.div>

//       {/* Probezeit Section */}
//       <motion.div
//         className="max-w-4xl mx-auto mt-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         <h3 className="text-xl font-semibold text-center mb-4">
//           Probezeit Training
//         </h3>
//         <div className="bg-white border shadow-md p-6 rounded-xl">
//           <p className="mb-3">
//             <strong>Subjects:</strong> Maths, English, German, French
//           </p>
//           <p>
//             <strong>Fees:</strong> 50 CHF/hr (1:1), 180 CHF/month (Group)
//           </p>
//           <p className="mt-2">
//             <strong>Timings:</strong> Flexible, based on teacher-parent
//             coordination
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ButterflyAndGymi;


import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ButterflyAndGymi: React.FC = () => {
  const { t } = useTranslation("global");

  const syllabusItems = t("butterflyAndGymi.syllabus.items", { returnObjects: true }) as {
    [key: string]: string;
  }[];

  const langIntegration = t("butterflyAndGymi.languageIntegration.table", { returnObjects: true }) as {
    age: string;
    focus: string;
  }[];

  const gymiTable = t("butterflyAndGymi.gymiCourse.examTrainingTable", { returnObjects: true }) as {
    subject: string;
    timings: string;
    mode: string;
    fees: string;
  }[];

  return (
    <div className="px-6 py-12 space-y-12 bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900">
          {t("butterflyAndGymi.header.title")}
        </h1>
        <p className="italic text-lg text-blue-700 mt-2">
          “{t("butterflyAndGymi.header.subtitle")}”
        </p>
      </motion.div>

      {/* About Section */}
      <motion.section
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          {t("butterflyAndGymi.about.title")}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {t("butterflyAndGymi.about.description")}
        </p>
      </motion.section>

      {/* Syllabus Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {syllabusItems.map((item, idx) => {
          const title = item[`title${idx + 1}`];
          const desc = item[`desc${idx + 1}`];
          return (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#a7c7e7] hover:to-[#fff4b1] hover:text-gray-800 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Language Integration */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          {t("butterflyAndGymi.languageIntegration.title")}
        </h2>
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="p-3">{t("butterflyAndGymi.languageIntegration.age")}</th>
              <th className="p-3">Focus</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {langIntegration.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{row.age}</td>
                <td className="p-3">{row.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Gymi Header */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-purple-800">
          {t("butterflyAndGymi.gymiCourse.title")}
        </h2>
        <p className="mt-2 text-lg font-medium text-purple-600">
          {t("butterflyAndGymi.gymiCourse.subtitle")}
        </p>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          {t("butterflyAndGymi.gymiCourse.description")}
        </p>
      </motion.div>

      {/* Gymi Course Table */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-center mb-4 mt-8">
          {t("butterflyAndGymi.gymiCourse.examTrainingTitle")}
        </h3>
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-purple-200 text-purple-900">
            
            {/* <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Timings</th>
              <th className="p-3">Mode</th>
              <th className="p-3">Fees</th>
            </tr> */}
              <tr>
    <th className="p-3">{t("butterflyAndGymi.tableHeaders.subject")}</th>
    <th className="p-3">{t("butterflyAndGymi.tableHeaders.timings")}</th>
    <th className="p-3">{t("butterflyAndGymi.tableHeaders.mode")}</th>
    <th className="p-3">{t("butterflyAndGymi.tableHeaders.fees")}</th>
  </tr>
          </thead>
          <tbody>
            {gymiTable.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{row.subject}</td>
                <td className="p-3">{row.timings}</td>
                <td className="p-3">{row.mode}</td>
                <td className="p-3">{row.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Probezeit */}
      <motion.div
        className="max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-center justify-items-center mb-4">
          {t("butterflyAndGymi.probezeitTraining.title")}
        </h3>
        <div className="bg-white border shadow-md p-6 rounded-xl">
          <p className="mb-3">
            <strong>{t("butterflyAndGymi.tableHeaders.subject")}:</strong> {t("butterflyAndGymi.probezeitTraining.subjects")}
          </p>
          <p>
            <strong>{t("butterflyAndGymi.tableHeaders.fees")}:</strong> {t("butterflyAndGymi.probezeitTraining.fees")}
          </p>
          <p className="mt-2">
            <strong>{t("butterflyAndGymi.tableHeaders.timings")}:</strong> {t("butterflyAndGymi.probezeitTraining.timings")}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ButterflyAndGymi;
