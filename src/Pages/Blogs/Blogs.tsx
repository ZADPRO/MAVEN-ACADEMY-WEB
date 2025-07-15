import React, { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import online from "../../assets/course/online.jpg";
import { motion } from "framer-motion";
import decrypt from "../../Helper";
import Carousels from "../../Components/Carousel/Carousel";
import { useTranslation } from "react-i18next";
import Loading from "../Loading/Loading";

interface Blog {
  blogContent: string;
  blogDate: string;
  blogImage: string;
  blogTitle: string;
  signedImageUrl?: string;
}

const Blogs: React.FC = () => {
  const [listBlogs, setListBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isFallback, setIsFallback] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const [loading, setLoading] = useState(false);

  const fallbackBlogs: Blog[] = [
    {
      blogTitle: t("blog.fallbackBlogs.bilingualTitle"),
      blogDate: "2024-12-01",
      blogContent: `<p>${t("blog.fallbackBlogs.bilingualContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
    {
      blogTitle: t("blog.fallbackBlogs.creativeSpacesTitle"),
      blogDate: "2024-12-10",
      blogContent: `<p>${t("blog.fallbackBlogs.creativeSpacesContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
    {
      blogTitle: t("blog.fallbackBlogs.learningGamesTitle"),
      blogDate: "2025-01-15",
      blogContent: `<p>${t("blog.fallbackBlogs.learningGamesContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
    {
      blogTitle: t("blog.fallbackBlogs.mathFunTitle"),
      blogDate: "2025-02-01",
      blogContent: `<p>${t("blog.fallbackBlogs.mathFunContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
    {
      blogTitle: t("blog.fallbackBlogs.healthyHabitsTitle"),
      blogDate: "2025-03-10",
      blogContent: `<p>${t("blog.fallbackBlogs.healthyHabitsContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
    {
      blogTitle: t("blog.fallbackBlogs.emotionsTitle"),
      blogDate: "2025-04-05",
      blogContent: `<p>${t("blog.fallbackBlogs.emotionsContent")}</p>`,
      blogImage: "",
      signedImageUrl: online,
    },
  ];

  const fetchBlogs = () => {
    setLoading(true); // ⏳ Start loading

    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listBlogs`,
        { refProductsId: import.meta.env.VITE_PRODUCT_ID },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("data", data);

        if (data.success && data.AllBlogs?.length > 0) {
          setListBlogs(data.AllBlogs);
          setVisibleCount(3); // ✅ Show 3 initially for API blogs
          setIsFallback(false);
        } else {
          setListBlogs(fallbackBlogs);
          setVisibleCount(6); // ✅ Show all 6 for fallback
          setIsFallback(true);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog:", error);
        setListBlogs(fallbackBlogs);
        setVisibleCount(6); // ✅ Show all 6 for fallback
        setIsFallback(true);
        setLoading(false); // ✅ Stop loading
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(visibleCount === 3 ? listBlogs.length : 3);
  };

  const handleReadMore = (blog: Blog) => {
    navigate("/blog-view", { state: { blog } });
  };

  const displayedBlogs = isFallback
    ? listBlogs
    : listBlogs.slice(0, visibleCount);

  return (
    <div>
      {/* Banner */}
      {/* <div className="BlogsBanner">
        <div className="BlogsBannerOverlay">
          <h1 className="BlogsBannerTitle uppercase">BLOGS</h1>
        </div>
      </div> */}
      <Carousels />
      {loading && <Loading />}

      {/* Blog Cards */}
      <div className="blogCards flex w-full align-items-center justify-content-center bg-[#fefdf8]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-10/12 mx-auto py-8 px-10">
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={index}
              className="cardTemplate flex flex-col rounded-xl shadow-lg cursor-pointer max-w-sm w-full"
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
            >
              <img
                src={blog.signedImageUrl || online}
                alt="blog-img"
                className="rounded-t-xl h-48 object-cover w-full"
              />

              {/* <div className="flex flex-col p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="font-bold text-lg" title={blog.blogTitle}>
                    {blog.blogTitle?.length > 30
                      ? `${blog.blogTitle.slice(0, 30)}...`
                      : blog.blogTitle}
                  </p>
                  <p className="text-sm text-gray-500">{blog.blogDate}</p>
                </div>

                <div
                  className="text-center p-3 bg-[#090a58] font-bold text-white rounded-full flex items-center justify-center gap-3 hover:text-[#FFD700] transition duration-300"
                  onClick={() => handleReadMore(blog)}
                >
                  <p>Read More</p>
                </div>
              </div> */}

              <div className="flex flex-col justify-between p-4 h-full">
                <div className="flex flex-col gap-3 mb-4">
                  <div className="justify-between items-center">
                    <p className="text-sm text-gray-500 right-10">
                      {blog.blogDate}
                    </p>
                    <p className="font-bold text-lg" title={blog.blogTitle}>
                      {blog.blogTitle?.length > 30
                        ? `${blog.blogTitle.slice(0, 30)}...`
                        : blog.blogTitle}
                    </p>
                  </div>
                  {/* Optionally include preview or summary text here */}
                </div>
                <div
                  className="text-center p-3 bg-[#090a58] font-bold text-white rounded-full flex items-center justify-center gap-3 hover:text-[#FFD700] transition duration-300 mt-auto"
                  onClick={() => {
                    handleReadMore(blog);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <p>{t("blog.readMore")}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      {!isFallback && listBlogs.length > 3 && (
        <div className="flex justify-center mb-10">
          <button
            style={{ borderRadius: "50px" }}
            className="text-center px-7 py-4 bg-[#090a58] font-bold text-white flex items-center justify-center gap-3 hover:text-[#293049] transition duration-300 mt-auto w-full max-w-xs mx-4"
            onClick={handleViewMore}
          >
            {visibleCount === 3 ? t("blog.viewMore") : t("blog.viewLess")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
