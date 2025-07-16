// import computer from "../../assets/course/computer.jpg";
// import yoga from "../../assets/course/yoga.png";
// // import art from "../../assets/course/art.jpg";
// // import dance from "../../assets/course/dance.jpg";
// // import music from "../../assets/course/music.jpg";
// import language from "../../assets/course/language.jpg";
// // import academic from "../../assets/course/academic.jpg";
// // import online from "../../assets/course/online.jpg";

// export const projects = [
//   {
//     title: "1. Gymi course – Think, Learn, Thrive!",
//     description:
//       "The Gymnasium exam is one of the most important and crucial exams in a student's school life. Entry into such a school is not just about excelling in school subjects, but also about providing opportunities for students’ future. By entering a Gymnasium, the child automatically gets a chance to enter prestigious universities, both in Switzerland and abroad. At Maven, we ensure that your child gets a smooth start into Gymnasium by providing a solid preparation with individual attention in both 1:1 and group settings. ",
//     src: computer,
//     link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//     color: "#e8c10a",
//     showPopup: true,
//      popupType: "gymi",
//   },
//   {
//     title: "2. Butterfly Garden – A Bilingual Learning Nest!",
//     description:
//       "Butterfly Garden is a nurturing bilingual school for children aged 3 to 12, where learning is rooted in discovery. We offer an immersive environment in the subjects English, German,French, Math, Science, General Knowledge, Visual learning, Art and craft, and after-school activities, blending global academic standards with hands-on exploration. Inspired by the transformation of a butterfly, we believe that every child deserves the freedom to learn, express, and grow in a multilingual, multicultural world.",
//     src: yoga,
//     link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//     color: "#c89606",
//     showPopup: true,
//     popupType: "butterfly",
//   },
//   {
//     title:
//       "3. Tagline, Bi-lingual school – Nurturing your kids transformation!",
//     description:
//       "Discover the world of creativity and self-expression with our Art & Craft classes. Whether you're a beginner looking to explore a new hobby, an aspiring artist eager to develop your skills, or simply someone who enjoys working with their hands, our classes offer something for everyone. At our studio, creativity knows no limits—join us and let your imagination soar!",
//     src: language,
//     link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//     color: "#9f6c09",
//     showPopup: true,
//      popupType: "lingual",
//   },
//   // {
//   //   title: "4. Dance Classes – Discover the Joy of Movement!",
//   //   description:
//   //     "Dance is more than just an art form—it's a celebration of expression, creativity, and movement. Whether you're a beginner eager to learn your first steps, an experienced dancer looking to refine your technique, or someone who simply loves to move, our dance classes offer something for everyone. Join us and explore the world of dance in a fun, supportive, and inspiring environment",
//   //   src: dance,
//   //   link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
//   //   color: "#d00000",
//   // },
//   // {
//   //   title: "5. Music Classes – Unlock Your Musical Potential!",
//   //   description:
//   //     "Music is a universal language that brings joy, harmony, and expression into our lives. Whether you’re a complete beginner, an intermediate player looking to improve, or an advanced musician wanting to refine your skills, our music classes offer something for everyone. At our studio, we believe in fostering a love for music and empowering students to develop their musical talents in a fun and supportive environment.",
//   //   src: music,
//   //   link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
//   //   color: "#370617",
//   // },
//   // {
//   //   title: "6. Language Classes – Unlock the World Through Language!",
//   //   description:
//   //     "Language is the gateway to understanding different cultures, connecting with people around the world, and opening up new opportunities. Whether you're learning a new language for travel, business, or personal enrichment, our language classes are designed to help you communicate confidently and effectively. With expert instructors and a supportive environment, we make language learning enjoyable and rewarding.",
//   //   src: language,
//   //   link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//   //   color: "#6a040f",
//   // },
//   // {
//   //   title: "7. Academic Tuition Classes – Unlock Your Full Potential!",
//   //   description:
//   //     "At our academic tuition center, we believe that every student can excel with the right guidance and support. Whether you're struggling with a challenging subject, aiming to improve your grades, or preparing for an important exam, our expert tutors are here to help you reach your academic goals. We offer personalized, results-driven tuition in a wide range of subjects, designed to build confidence, boost performance, and foster a love for learning.",
//   //   src: academic,
//   //   link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//   //   color: "#9d0208",
//   // },
//   // {
//   //   title: "8. Online - Learning has no boundaries!",
//   //   description:
//   //     "All of our courses are also available online, allowing you to learn at your own pace, from the comfort of your home or on the go. No matter your schedule, our platform is designed to fit into your life seamlessly. Whether you're juggling work, family, or other commitments, you can access your course materials, lessons, and resources whenever it’s convenient for you.",
//   //   src: online,
//   //   link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//   //   color: "#d00000",
//   // },
// ];

import computer from "../../assets/course/computer.jpg";
import img13 from "../../assets/home/13.jpg";
import language from "../../assets/course/language.jpg";
import { useTranslation } from "react-i18next";

export const useTranslatedProjects = () => {
  const { t } = useTranslation("global");

  return [
    {
      title: t("coursescard.projects.0.title"),
      description: t("coursescard.projects.0.description"),
      src: computer,
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#e8c10a",
      showPopup: true,
      popupType: "gymi",
    },
    {
      title: t("coursescard.projects.1.title"),
      description: t("coursescard.projects.1.description"),
      src: img13,
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#c89606",
      showPopup: true,
      popupType: "butterfly",
    },
    {
      title: t("coursescard.projects.2.title"),
      description: t("coursescard.projects.2.description"),
      src: language,
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#9f6c09",
      showPopup: true,
      popupType: "lingual",
    },
  ];
};

// import computer from "../../assets/course/computer.jpg";
// import img13 from "../../assets/home/13.jpg";
// import language from "../../assets/course/language.jpg";

// export const projects = [
//   {
//     title: "1. Gymi course – Think, Learn, Thrive!",
//     description:
//       "The Gymnasium exam is one of the most important and crucial exams in a student's school life. Entry into such a school is not just about excelling in school subjects, but also about providing opportunities for students’ future. By entering a Gymnasium, the child automatically gets a chance to enter prestigious universities, both in Switzerland and abroad. At Maven, we ensure that your child gets a smooth start into Gymnasium by providing a solid preparation with individual attention in both 1:1 and group settings. ",
//     src: computer,
//     link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//     color: "#e8c10a",
//     showPopup: true,
//     popupType: "gymi",
//   },
//   {
//     title: "2. Butterfly Garden – A Bilingual Learning Nest!",
//     description:
//       "Butterfly Garden is a nurturing bilingual school for children aged 3 to 12, where learning is rooted in discovery. We offer an immersive environment in the subjects English, German,French, Math, Science, General Knowledge, Visual learning, Art and craft, and after-school activities, blending global academic standards with hands-on exploration. Inspired by the transformation of a butterfly, we believe that every child deserves the freedom to learn, express, and grow in a multilingual, multicultural world.",
//     src: img13,
//     link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//     color: "#c89606",
//     showPopup: true,
//     popupType: "butterfly",
//   },
//   {
//     title:
//       "3. Tagline, Bi-lingual school – Nurturing your kids transformation!",
//     description:
//       "Discover the world of creativity and self-expression with our Art & Craft classes. Whether you're a beginner looking to explore a new hobby, an aspiring artist eager to develop your skills, or simply someone who enjoys working with their hands, our classes offer something for everyone. At our studio, creativity knows no limits—join us and let your imagination soar!",
//     src: language,
//     link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//     color: "#9f6c09",
//     showPopup: true,
//     popupType: "lingual",
//   },
// ];
