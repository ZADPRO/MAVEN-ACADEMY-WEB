import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// import logo from "../../assets/logo/logo1.png";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <svg
        className="css-p1skv3"
        style={{
          display: "block",
          width: "100%",
          marginBottom: "-1px",
          height: "40px",
          color: "#000a35",
        }}
      >
        <pattern
          id="curve-f989b4a0-bdbc-4484-bdd1-a42e780d25d0"
          x="0"
          y="0"
          width="800"
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="currentColor"
            d="M 0 40 L 0 20 Q 200 0, 400 20 Q 600 40, 800 20 L 800 40"
          ></path>
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#curve-f989b4a0-bdbc-4484-bdd1-a42e780d25d0"
        ></rect>
      </svg>
      <footer className="w-full text-blue-950 gap-3">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-[#000a35] bg-[#000a35] pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              {/* <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-product-4-sub"
              >
                <h3
                  className="mb-6  font-bold uppercase text-[22px] text-white"
                  id="footer-product-4-sub"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#fe0000] hover:font-bold focus:text-emerald">
                      Features
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                      Customers
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                      Why us?
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#fe0000] hover:font-bold focus:text-emerald-600">
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav> */}
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-mavenacademy-sub"
              >
                <h3
                  className="mb-4 font-bold uppercase text-[22px] text-white"
                  id="footer-mavenacademy-sub"
                >
                  {t("footer.academy")}

                  {/* Maven Academy */}
                </h3>
                <p className="text-white text-[16px] leading-7 ">
                  {/* Maven Academy is a Switzerland-based education company
                  dedicated to empowering learners of all ages.{" "} */}
                  {t("footer.description")}
                </p>
                <div className="flex space-x-4 text-[#fca000] text-xl mt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a href="mailto:mavenacademy.switzerland@gmail.com">
                    <MdEmail />
                  </a>
                </div>
              </nav>

              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3 ml-3"
                aria-labelledby="footer-docs-4-sub"
              >
                <h3
                  className="mb-6  font-bold uppercase text-[22px] text-white"
                  id="footer-docs-4-sub"
                >
                  {t("footer.courses")}{" "}
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/course"
                      className="transition-colors duration-300 text-white text-[18px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {/* Gymi course */}
                      {t("footer.course1")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/course"
                      className="transition-colors duration-300 text-white text-[18px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.course2")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/course"
                      className="transition-colors duration-300 text-white text-[18px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.course3")}
                    </Link>
                  </li>
                  {/* <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]">
                      Dance Classes
                    </a>
                  </li> */}
                  <li className="mb-2 leading-6">
                    {/* <a className="transition-colors duration-300 text-white text-[18px] hover:text-[#343b6c] hover:font-bold focus:text-emerald-600">
                      Explore More ...
                    </a> */}
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-4-sub"
              >
                <h3
                  className="mb-6  font-bold uppercase text-[22px] text-white"
                  id="footer-about-4-sub"
                >
                  {t("footer.quickLinks")}
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/"
                      className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.home")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/about"
                      className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.about")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/course"
                      className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.course")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/blogs"
                      className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.blogs")}
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/contact"
                      className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700] hover:font-bold focus:text-[#FFD700]"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {t("footer.contact")} 
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-4 md:col-span-4 lg:col-span-3 mr-2 ml-[-10px]"
                aria-labelledby="footer-get-in-touch-4-sub"
              >
                <h3
                  className="mb-6  font-bold uppercase text-[22px] text-white"
                  id="footer-get-in-touch-4-sub"
                >
                  {/* Get in touch */}
                  {t("footer.getInTouch")}
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <div className="flex items-center gap-2">
                      <p className="text-white text-[17px] font-medium">
                        {/* Mobile: */}
                        {t("footer.mobile")} {" "}<span>:</span>
                      </p>
                      <a
                        href="tel:+41767603921" // Optional: makes it clickable to call
                        className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700]  focus:text-[#FFD700]"
                      >
                        +41 76 760 39 21
                      </a>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <div className="flex items-center gap-2">
                      <p className="text-white text-[17px] font-medium">
                        {t("footer.email")} {" "}<span>:</span>
                      </p>
                      <a
                        href="mailto:mavenacademy.switzerland@gmail.com"
                        className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700]  focus:text-[#FFD700] break-all"
                      >
                        mavenacademy.switzerland@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="mb-2 leading-6">
                    <span className="text-white text-[17px] font-medium">
                      {t("footer.address")} {" "}<span>:</span>
                    </span>{" "}
                    <span className="transition-colors duration-300 text-white text-[15px] hover:text-[#FFD700]  focus:text-[#FFD700]">
                      {t("footer.addressDetails")}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="grid grid-cols-5 items-center gap-6 mb-1 ml-1.5">
            <img src={logo} alt="" className="w-[20vh] h-[6.2vh]" />
          </div> */}
        </div>
        {/*      <!-- Sub Footer --> */}
        {/* <div className="border-t border-slate-200 bg-[#2d2d2d] py-4 text-sm">
          <div className="container px-6">
            <div className="grid grid-cols-5 items-center gap-6">
              <img src={logo} alt="" className="w-[20vh] h-[6.2vh]" />
            </div>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
