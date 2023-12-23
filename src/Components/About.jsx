/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a software developer studying at University of Engineering and Management,Kolkata. I enjoy creating unique, simplistic and efficient user websites.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Responsive Web Design",
  "User Experience",
  "UI Design",
  "Logic Building",
  "Programming",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in innovative ways. By leveraging my knowledge of web development I try to solve real world problems to make life simple for all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
