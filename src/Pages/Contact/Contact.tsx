// import React, { useState } from "react";
// import "./Contact.css";
// import { LocationEdit, Mail, Phone } from "lucide-react";

// const Contact: React.FC = () => {
//   // Store form data in state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const { name, email, phone, subject, message } = formData;

//     const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=indumathi65indumathi@gmail.com.com&su=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(
//       `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
//     )}`;

//     window.open(mailto, "_blank");
//   };

//   return (
//     <div>
//       <div>
//         <div className="contactUsBanner">
//           <div className="bannerOverlay">
//             <h1 className="bannerTitle uppercase ">Contact Us</h1>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto pt-[60px] pb-[60px]">
//           <div className="flex flex-col items-center justify-center py-8 px-4 ">
//             <div className="flex justify-center gap-8 max-w-7xl w-full">
//               <div className="flex-1 min-w-[250px] max-w-xs sm:max-w-none sm:text-left text-center">
//                 <h4 className="text-2xl font-bold mb-2 flex items-center sm:justify-start justify-center gap-2 text-blue-950">
//                   <LocationEdit className="text-3xl mt-0.5" />
//                   Address
//                 </h4>
//                 <p className="text-lg font-medium text-gray-700 sm:text-left text-center">
//                   GZ Oerlikon, VFK Kloten,
//                   <br />
//                   GZ Heuried, GZ Leimbach
//                 </p>
//               </div>

//               <div className="flex-1 min-w-[250px] max-w-xs sm:max-w-none sm:text-left text-center">
//                 <h4 className="text-2xl font-bold mb-2 flex items-center sm:justify-start justify-center gap-2 text-blue-950">
//                   <Phone className="text-3xl mt-1.5" />
//                   Mobile
//                 </h4>
//                 <p className="text-lg font-medium text-gray-700 sm:text-left text-center">
//                   +41 76 760 39 21
//                 </p>
//               </div>

//               <div className="flex-1 min-w-[250px] max-w-xs sm:max-w-none sm:text-left text-center">
//                 <h4 className="text-2xl font-bold mb-2 flex items-center sm:justify-start justify-center gap-2 text-blue-950">
//                   <Mail className="text-3xl mt-1.5" />
//                   Email
//                 </h4>
//                 <p className="text-lg font-medium text-gray-700 sm:text-left text-center break-words">
//                   mavenacademy.switzerland@gmail.com{" "}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
//             <h2 className="text-2xl md:text-3xl font-semibold text-[#090a58] mb-6 border-l-4 border-[#090a58] pl-4">
//               We'd love to hear from you
//             </h2>

//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             >
//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   required
//                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-gray-700 font-medium">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Enter subject"
//                   required
//                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block mb-2 text-gray-700 font-medium">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   placeholder="Write your message here..."
//                   required
//                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
//                 ></textarea>
//               </div>

//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   className="bg-[#090a58] hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { LocationEdit, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "./Contact.css";
import Carousels from "../../Components/Carousel/Carousel";

// Define your orbit animation variants
const orbitVariants: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
};

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF size={18} color="#1877F2" />,
    url: "https://facebook.com",
    borderColor: "#1877F2",
    angle: 0,
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={18} color="#E4405F" />,
    url: "https://instagram.com",
    borderColor: "#E4405F",
    angle: 120,
  },
  {
    name: "Email",
    icon: <FaEnvelope size={18} color="#0A66C2" />,
    url: "https://linkedin.com",
    borderColor: "#0A66C2",
    angle: 240,
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=mavenacademy.switzerland@gmail.com.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.open(mailto, "_blank");
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <div className="bg-[#fefdf8]">
      {/* <div className="contactUsBanner">
        <div className="bannerOverlay">
          <h1 className="bannerTitle uppercase">Contact Us</h1>
        </div>
      </div> */}
      <Carousels />

      <div className="max-w-6xl mx-auto py-16 px-4 mt-10">
        {/* Get in Touch Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 bg-[#fefdf8]">
          <h2 className="text-6xl font-bold text-[#090a58] mb-4 ">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you have a question about courses, pricing, or anything
            else, our team is ready to help you.
          </p>

          {/* Orbit Social Links */}
          <div
            style={{
              position: "relative",
              width: 180,
              height: 180,
              margin: "0 auto",
            }}
          >
            {/* Outer rotating ring */}
            <motion.div
              variants={orbitVariants}
              animate="rotate"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 140,
                height: 140,
                marginTop: -70,
                marginLeft: -70,
                borderRadius: "50%",
                border: "2px dashed #ccc",
                boxSizing: "border-box",
              }}
            />
            {/* Social Icons orbiting */}
            {socialLinks.map(({ name, icon, url, borderColor, angle }) => {
              const radius = 70;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              return (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={orbitVariants}
                  whileHover="hover"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: y - 20,
                    marginLeft: x - 20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: `3px solid ${borderColor}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    boxShadow: `0 0 8px ${borderColor}`,
                    userSelect: "none",
                    textDecoration: "none",
                  }}
                  title={name}
                >
                  {icon}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#e1f5fe] rounded-2xl p-6 shadow-md border-l-4 border-[#4fc3f7] text-center"
          >
            <LocationEdit className="mx-auto text-[#0288d1]" size={32} />
            <h4 className="mt-4 font-bold text-lg text-[#333]">Our Address</h4>
            <p className="text-gray-600 text-sm mt-2">
              GZ Oerlikon, VFK Kloten, GZ Heuried, GZ Leimbach
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#fff8e1] rounded-2xl p-6 shadow-md border-l-4  border-[#ffd54f] text-center"
          >
            <Phone className="mx-auto text-[#ffa000]" size={32} />
            <h4 className="mt-4 font-bold text-lg text-[#333]">Call Us</h4>
            <p className="text-gray-600 text-sm mt-2">+41 76 760 39 21</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#e0f7ea] rounded-2xl p-6 shadow-md border-l-4 border-[#66bb6a] text-center"
          >
            <Mail className="mx-auto text-[#43a047]" size={32} />
            <h4 className="mt-4 font-bold text-lg text-[#2e7d32]">Email Us</h4>
            <p className="text-gray-600 text-sm mt-2 break-words">
              mavenacademy.switzerland@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#090a58] mb-6 border-l-4 border-[#090a58] pl-4">
            We'd love to hear from you
          </h2>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
              Your message has been prepared for sending!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#090a58]"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#090a58] hover:bg-[#090a58e4] text-white px-6 py-3 rounded-md font-semibold transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
