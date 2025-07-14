import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface GymipopupProps {
  onClose: () => void;
}

const Ligunalpopup: React.FC<GymipopupProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div
            className="fixed inset-0 bg-black opacity-30"
            aria-hidden="true"
          />

          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-50 max-h-[75vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click outside closing when clicking inside
          >
            return (
            <Dialog
              open={true}
              onClose={onClose}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-center min-h-screen px-4">
                <div
                  className="fixed inset-0 bg-black opacity-30"
                  aria-hidden="true"
                />

                <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-50">
                  <Dialog.Title className="text-2xl font-bold text-[#1e3a8a] mb-4">
                    Gymi Course 
                  </Dialog.Title>

                  <div className="space-y-4 text-sm text-gray-700 max-h-[70vh] overflow-y-auto pr-2">
                    <p>
                      <strong>Introduction</strong>
                      <br />
                      The Gymnasium exam is one of the most important and
                      crucial exams in a student's school life. By entering a
                      Gymnasium, the child automatically gets a chance to enter
                      prestigious universities, both in Switzerland and abroad.
                      At Maven, we ensure that your child gets a smooth start
                      into Gymnasium by providing a solid preparation with
                      individual attention in both 1:1 and group settings.
                    </p>

                    <p>
                      <strong>Our concept and motto</strong>
                      <br />
                      Think, Learn, Thrive.
                      <br />
                      We encourage and enable the child to take responsibility
                      for their own learning by using recent research and
                      teaching methods. We also help the children during the
                      probation period (Probezeit) and provide 1:1 consultation
                      on how to proceed with the exam with parents.
                    </p>

                    <div>
                      <strong>Our model</strong>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                          <strong>Lang- & Kurzgymi Exam Training</strong>
                        </li>
                        <li>Subjects: German & Maths</li>
                        <li>Lesson model: 1:1 & Group lessons</li>
                        <li>
                          Group lessons: 1 batch for Langgymi, 1 batch for
                          Kurzgymi, 6 students per batch. Number of batches can
                          be increased.
                        </li>
                        <li>
                          Timings:
                          <br />
                          - German: Fridays, 16:00–18:00, 18:30–20:00
                          <br />- Mathematics: Saturdays & Sundays, 10:00–12:00
                        </li>
                        <li>Mode: In-person and online</li>
                        <li>
                          Price:
                          <br />
                          - 3600 CHF for group lessons (August–February package)
                          <br />- 50 CHF per hour for individual lessons
                        </li>
                      </ul>
                    </div>

                    <div>
                      <strong>Probezeit (probation period) training</strong>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Subjects: Maths, English, German, French</li>
                        <li>
                          Price:
                          <br />
                          - 50 CHF/hour for 1:1
                          <br />- 180 CHF/month for group lessons
                        </li>
                        <li>
                          Timings: Can be fixed with the teacher for mutual
                          convenience.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={onClose}
                      className="bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#2c4990]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Dialog>
            );
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Ligunalpopup;
