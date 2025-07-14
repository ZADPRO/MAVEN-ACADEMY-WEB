import { motion } from "framer-motion";
import { FaChild, FaUserGraduate, FaUserFriends } from "react-icons/fa";
import React from "react";

const AgeTable:React.FC = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 rounded-2xl bg-white shadow-2xl border-2 border-blue-200 bg-opacity-95 backdrop-blur"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
        Language Integration by Age Group
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg shadow-sm">
              <th className="p-4">Age Group</th>
              <th className="p-4">Focus Area</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            <tr className="hover:bg-blue-50 transition duration-200">
              <td className="p-4 flex items-center gap-3 font-semibold">
                <FaChild className="text-blue-600 text-xl" />
                3–5 yrs
              </td>
              <td className="p-4">
                Songs, vocabulary, play, picture books, and motor skills.
              </td>
            </tr>
            <tr className="bg-gray-50 hover:bg-blue-50 transition duration-200">
              <td className="p-4 flex items-center gap-3 font-semibold">
                <FaUserFriends className="text-blue-600 text-xl" />
                6–8 yrs
              </td>
              <td className="p-4">
                Bilingual storytelling, reading, writing, role-play, guided reading.
              </td>
            </tr>
            <tr className="hover:bg-blue-50 transition duration-200">
              <td className="p-4 flex items-center gap-3 font-semibold">
                <FaUserGraduate className="text-blue-600 text-xl" />
                9–12 yrs
              </td>
              <td className="p-4">
                Essays, presentations, project work, and group discussions.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AgeTable;
