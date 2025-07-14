import React from "react";

interface CourseProps {
  course: {
    id: number;
    image: string;
    title: string;
    author: string;
    date: string;
  };
}

const CardImage: React.FC<CourseProps> = ({ course }) => {
  return (
    <div className="cardss">
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
          <img
            src={course.image}
            alt={course.title}
            className="aspect-video w-full classImages"
          />
        </figure>
        <div className="p-2">
          <header>
            <h3 className="text-l flex flex-col items-center justify-center font-medium text-slate-700">
              {course.title}
            </h3>
            {/* <p className="text-sm text-slate-400">
              By {course.author}, {course.date}
            </p> */}
          </header>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
