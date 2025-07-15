import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo/maven.png";
import "./Header.css";
import { useTranslation } from "react-i18next";
import de from "../../assets/language/de.svg";
import en from "../../assets/language/en.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const [menuStatus, setMenuStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [_loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation("global");

  // const {t} = useTranslation("global")

  const currentLang = i18n.language;

  // const languageIcon = currentLang === "en" ? de : en;
  const languageIcon = currentLang === "en" ? en : de;


  const handleChangeLang = (lang: string) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setLoading(false);
    }, 3000);
  };

  const isNoScrollEffect =
    location.pathname === "/blog-view" || location.pathname === "/release-view";

  useEffect(() => {
    const handleScroll = () => {
      if (!isNoScrollEffect) {
        setScrolled(window.scrollY > 10);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNoScrollEffect]);

  const navLinkClass = `text-[20px] cursor-pointer font-bold underline-animation transition duration-300 ease-in-out relative after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-[#000a35]  text-[#000a35] after:transition-all after:duration-300`;

  const textColor = isNoScrollEffect
    ? "text-[#FFD700] hover:text-[#090a58]"
    : scrolled
    ? "text-[#FFD700] hover:text-[#090a58]"
    : "text-[#FFD700] hover:text-[#090a58]";

  return (
    <div>
      {/* Fixed Header */}
      <div
        className={`h-[75px] text-[15px] fixed top-0 left-0 right-0 flex items-center justify-center shadow-xs backdrop-blur-md bg-[#fefdf8] border-b border-white/20 transition-colors duration-300 z-40 `}
      >
        <div
          className={`w-full flex ${
            menuStatus ? "fixed z-50" : ""
          } justify-center items-center h-full`}
        >
          <div className="w-[80%] h-full lg:w-[93%] flex justify-evenly items-center">
            {/* Logo */}
            <div className="w-[50%] lg:w-[30%] flex justify-start">
              <Link to="/" onClick={() => setMenuStatus(false)}>
                <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex w-[90%] justify-center gap-x-10">
              <Link
                to="/"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/course"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.courses")}
              </Link>
              <Link
                to="/blogs"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.blogs")}
              </Link>
              <Link
                to="/contact"
                className={`${navLinkClass} ${textColor}`}
                onClick={() => {
                  setMenuStatus(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* <div className="w-[40%] lg:w-[10%] flex justify-end">
              <p
                className="me-5"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  const newLang = currentLang === "en" ? "de" : "en";
                  handleChangeLang(newLang);
                }}
              >
                <img
                  src={languageIcon}
                  alt="translate"
                  height={30}
                  width={30}
                />
              </p>{" "}
            </div> */}
            <div className="w-[40%] lg:w-[10%] flex justify-end">
  <p
    className="me-5 transition-transform duration-300 ease-in-out hover:scale-110"
    style={{ cursor: "pointer" }}
    onClick={(e) => {
      e.preventDefault();
      const newLang = currentLang === "en" ? "de" : "en";
      handleChangeLang(newLang);
    }}
  >
    <img
      src={languageIcon}
      alt={currentLang === "en" ? "English" : "German"}
      height={30}
      width={30}
      className="transition-transform duration-300 ease-in-out hover:rotate-12"
    />
  </p>
</div>

            {/* Optional Icon / Placeholder */}
            <div className="w-[50%] lg:w-[10%] flex justify-end">
              <p style={{ cursor: "pointer" }}>
                {/* Optional icon can go here */}
              </p>
            </div>

            {/* Mobile Hamburger */}
            <div className="w-[0%] ml-14 flex lg:hidden justify-center items-center">
              <button
                className={`relative order-10 cursor-pointer block self-center lg:hidden ${
                  menuStatus
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                    : ""
                }`}
                onClick={() => setMenuStatus(!menuStatus)}
                aria-expanded={menuStatus}
                aria-label="Toggle navigation"
              >
                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                  <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                  <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`w-full h-[90vh] overflow-y-auto z-50 mt-[10vh] fixed top-0 left-0 transition-all duration-500 ease-in-out bg-white transform ${
          menuStatus
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full">
          <div className="w-[80%] mt-10">
            <Link
              to="/"
              className="text-[20px] cursor-pointer py-3 font-bold block"
              onClick={() => {
                setMenuStatus(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[20px] cursor-pointer py-3 font-bold block"
              onClick={() => {
                setMenuStatus(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About
            </Link>
            <Link
              to="/course"
              className="text-[20px] cursor-pointer py-3 font-bold block"
              onClick={() => {
                setMenuStatus(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Course
            </Link>
            <Link
              to="/blogs"
              className="text-[20px] cursor-pointer py-3 font-bold block"
              onClick={() => {
                setMenuStatus(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-[20px] cursor-pointer py-3 font-bold block"
              onClick={() => {
                setMenuStatus(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
