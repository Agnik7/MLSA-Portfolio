import React from "react";

const Education = () => {
  const educationList = [
    {
      title: "Salt Lake School (English Medium)",
      standard: "Secondary",
      description:
        "Successfully completed secondary standard studies and secured 94% in ICSE examination.",
    },
    {
      title: "Salt Lake School (English Medium)",
      standard: "Higher Secondary",
      description:
        "Successfully completed higher secondary standard studies in PCM (Physics, Chemistry, Mathematics) and secured 95% in ISC examination.",
    },
    {
      title: "University of Engineering and Management, Kolkata",
      standard: "B.Tech in Computer Science and Engineering",
      description:
        "Currently on the path of becoming a software engineer and learn new technologies everyday.",
    },
  ];

  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="project-wrapper">
        <div className="container">
          {educationList.map((education) => (
            <div className="box" key={education.title}>
              <h3 style={{ flexBasis: "40px" }}>{education.title}</h3>
              <h3 style={{ flexBasis: "40px" }}>{education.standard}</h3>
              <p className="small">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
