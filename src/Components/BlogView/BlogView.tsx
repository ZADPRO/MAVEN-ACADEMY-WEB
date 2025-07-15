import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlogView.css";
import online from "../../assets/course/online.jpg";
import { useTranslation } from "react-i18next";

const BlogView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};
  const { t } = useTranslation("global");

  if (!blog) {
    return <div className="text-center py-10">{t("blog.NoBlogFound")} </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex-1">
            {blog.blogTitle}
            </h1>
          <p className="text-gray-800 text-sm  flex">
            {blog.blogDate}
            </p>
        </div>

        <div className="mb-6">
          <img
            src={blog.signedImageUrl || online}
            alt="Blog"
            className="rounded-lg max-h-[400px] object-cover w-full"
          />
        </div>

        <div
          className="prose max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: blog.blogContent }}
        ></div>

        <div className="mt-8 text-center">
          <button
            // onClick={() => navigate(-1)

            // }
            onClick={() => {
              navigate(-1);
              // window.scrollTo(0, 0);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#090a58] text-white px-5 py-2 rounded-full hover:text-[#FFD700] transition duration-300"
          >
            {t("blog.backBlogs")}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
