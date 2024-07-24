import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CareerTimeline = () => {
  return (
    <div className="pt-16 md:pt-32 pb-20 bg-[#09101a] " id="skills">
      <h1 className="heading">CAREER TIMELINE</h1>
      <div className="w-full">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2026"
            contentStyle={{
              background: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)",
              color: "#fff",
              boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #8e44ad",
            }}
            iconStyle={{
              background: "#8e44ad",
              color: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hanoi Mining and Geology University
            </h4>
            <p>
              Studying Information Technology at Hanoi Mining and Geology
              University.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2021 - Present"
            contentStyle={{
              background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
              color: "#fff",
              boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #e74c3c",
            }}
            iconStyle={{
              background: "#e74c3c",
              color: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Part-Time Lecturer/Teacher
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MindX Technology School
            </h4>
            <p>
              Teaching programming courses to students and ensuring they
              complete practical projects. Courses include complete Scratch,
              GameMaker, Python App Development, Web Development, and Computer
              Science.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 - 01/2024"
            contentStyle={{
              background: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
              color: "#fff",
              boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #2ecc71",
            }}
            iconStyle={{
              background: "#2ecc71",
              color: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Game, Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TEKMATE Software Solutions Ltd
            </h4>
            <p>
              Developed user-friendly interfaces, collaborated on game features,
              optimized performance, and ensured seamless user experiences using
              ReactJS, Game Engines, and other technologies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2024 - Present"
            contentStyle={{
              background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
              color: "#fff",
              boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #3498db",
            }}
            iconStyle={{
              background: "#3498db",
              color: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              TEKMATE Software Solutions Ltd
            </h4>
            <p>
              Developing and maintaining web applications, collaborating with
              designers, and ensuring seamless user experiences using ReactJS,
              NodeJS, and other technologies.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default CareerTimeline;
