// import React from "react";
// import { Dialog } from "@headlessui/react";

// interface GymipopupProps {
//   onClose: () => void;
// }

// const Gymipopup: React.FC<GymipopupProps> = ({ onClose }) => {
//   return (
//     <Dialog
//       open={true}
//       onClose={onClose}
//       className="fixed inset-0 z-50 overflow-y-auto"
//     >
//       <div className="flex items-center justify-center min-h-screen px-4">
//         <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

//         <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-50">
//           <Dialog.Title className="text-2xl font-bold text-[#1e3a8a] mb-4">
//             Gymi Course Content
//           </Dialog.Title>

//           <div className="space-y-4 text-sm text-gray-700 max-h-[70vh] overflow-y-auto pr-2">
//             <p>
//               <strong>Introduction</strong>
//               <br />
//               The Gymnasium exam is one of the most important and crucial exams
//               in a student's school life. By entering a Gymnasium, the child
//               automatically gets a chance to enter prestigious universities,
//               both in Switzerland and abroad. At Maven, we ensure that your
//               child gets a smooth start into Gymnasium by providing a solid
//               preparation with individual attention in both 1:1 and group
//               settings.
//             </p>

//             <p>
//               <strong>Our concept and motto</strong>
//               <br />
//               Think, Learn, Thrive.
//               <br />
//               We encourage and enable the child to take responsibility for their
//               own learning by using recent research and teaching methods. We
//               also help the children during the probation period (Probezeit) and
//               provide 1:1 consultation on how to proceed with the exam with
//               parents.
//             </p>

//             <div>
//               <strong>Our model</strong>
//               <ul className="list-disc list-inside ml-4 mt-2">
//                 <li>
//                   <strong>Lang- & Kurzgymi Exam Training</strong>
//                 </li>
//                 <li>Subjects: German & Maths</li>
//                 <li>Lesson model: 1:1 & Group lessons</li>
//                 <li>
//                   Group lessons: 1 batch for Langgymi, 1 batch for Kurzgymi, 6
//                   students per batch. Number of batches can be increased.
//                 </li>
//                 <li>
//                   Timings:
//                   <br />
//                   - German: Fridays, 16:00–18:00, 18:30–20:00
//                   <br />- Mathematics: Saturdays & Sundays, 10:00–12:00
//                 </li>
//                 <li>Mode: In-person and online</li>
//                 <li>
//                   Price:
//                   <br />
//                   - 3600 CHF for group lessons (August–February package)
//                   <br />- 50 CHF per hour for individual lessons
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <strong>Probezeit (probation period) training</strong>
//               <ul className="list-disc list-inside ml-4 mt-2">
//                 <li>Subjects: Maths, English, German, French</li>
//                 <li>
//                   Price:
//                   <br />
//                   - 50 CHF/hour for 1:1
//                   <br />- 180 CHF/month for group lessons
//                 </li>
//                 <li>
//                   Timings: Can be fixed with the teacher for mutual convenience.
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={onClose}
//               className="bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#2c4990]"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default Gymipopup;

import React from "react";
import { motion } from "framer-motion";
// import "./ButterflyAndGymi.css";

const ButterflyAndGymi: React.FC = () => {
  return (
    <div className="px-6 py-12 space-y-12 bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900">Butterfly Gardens</h1>
        <p className="italic text-lg text-blue-700 mt-2">
          “Growing Global Minds”
        </p>
      </motion.div>

      {/* About Butterfly Gardens */}
      <motion.section
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Who Are We?</h2>
        <p className="text-gray-700 leading-relaxed">
          Butterfly Gardens is a nurturing bilingual school for children aged 3
          to 12, rooted in discovery. We blend global academic standards with
          immersive, hands-on learning across English, German, French, Math,
          Science, and more. Just like a butterfly's transformation, we believe
          every child deserves freedom to express, explore, and grow in a
          multicultural world.
        </p>
      </motion.section>

      {/* Syllabus Framework Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {[
          {
            title: "Language Arts",
            desc: "Balanced literacy through stories, phonics, writing, and comprehension.",
          },
          {
            title: "Mathematics",
            desc: "Concepts taught using manipulatives, games, and real-life application.",
          },
          {
            title: "Science & Discovery",
            desc: "Nature studies, experiments, and thematic exploration.",
          },
          {
            title: "General Knowledge",
            desc: "World cultures, geography, and history awareness.",
          },
          {
            title: "Creative Arts",
            desc: "Art, crafts, music, drama, and expressive movement.",
          },
          {
            title: "Life Skills",
            desc: "Emotional intelligence, communication, and problem-solving.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-[#a7c7e7] hover:to-[#fff4b1] hover:text-gray-800 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-2 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="transition-colors duration-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Language Integration Table */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Language Integration by Age Group
        </h2>
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="p-3">Age Group</th>
              <th className="p-3">Focus</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-t">
              <td className="p-3">3–5 yrs</td>
              <td className="p-3">
                Songs, vocabulary, play, picture books, and motor skills.
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-3">6–8 yrs</td>
              <td className="p-3">
                Bilingual storytelling, reading, writing, role-play, guided
                reading
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-3">9–12 yrs</td>
              <td className="p-3">
                Essays, presentations, project work, group discussions
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Gymi Course Intro */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-purple-800">
          Gymi Course by Maven
        </h2>
        <p className="mt-2 text-lg font-medium text-purple-600">
          Think, Learn, Thrive
        </p>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Gymnasium entry shapes a student’s future with opportunities to enter
          top universities in Switzerland and abroad. At Maven, we prepare
          children through personalized training for both Lang- and Kurzgymi
          exams, including support during the probation period.
        </p>
      </motion.div>

      {/* Gymi Course Details Table */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-center mb-4 mt-8">
          Lang- & Kurzgymi Exam Training
        </h3>
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-purple-200 text-purple-900">
            <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Timings</th>
              <th className="p-3">Mode</th>
              <th className="p-3">Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">German</td>
              <td className="p-3">Fridays 16:00–18:00, 18:30–20:00</td>
              <td className="p-3">In-person & Online</td>
              <td className="p-3">3600 CHF (Group), 50 CHF/hr (1:1)</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Mathematics</td>
              <td className="p-3">Saturdays & Sundays 10:00–12:00</td>
              <td className="p-3">In-person & Online</td>
              <td className="p-3">Same as above</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* Probezeit Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-center mb-4">
          Probezeit Training
        </h3>
        <div className="bg-white border shadow-md p-6 rounded-xl">
          <p className="mb-3">
            <strong>Subjects:</strong> Maths, English, German, French
          </p>
          <p>
            <strong>Fees:</strong> 50 CHF/hr (1:1), 180 CHF/month (Group)
          </p>
          <p className="mt-2">
            <strong>Timings:</strong> Flexible, based on teacher-parent
            coordination
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ButterflyAndGymi;
