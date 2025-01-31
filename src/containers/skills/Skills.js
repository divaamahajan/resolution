import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import YouTubeEmbed from "../../components/videoThumbnail/YouTubeEmbed";
import VideoThumbnail from "../../components/videoThumbnail/VideoThumbnail";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="problem">
      <div className="skills-main-div">
        {/* <Fade left duration={1000}>
          <YouTubeEmbed videoId="_1ZyNsKvkhQ"/> */}
        {/* <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div> */}

        {/* </Fade> */}
        <div className="skills-text-div">
          <Fade right duration={1000}>
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </Fade>
          {/* <SoftwareSkill /> */}
          <Fade left duration={1000}>
            <YouTubeEmbed videoId="_1ZyNsKvkhQ" />
          </Fade>
          <Fade right duration={1000}>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={isDark ? "dark-mode skills-text" : "skills-text"}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
