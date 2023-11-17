import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ConflictManagementImage from "./Conflict_Management.avif";
import ConflictResolutionStrategies from "./ConflictResolutionStrategies";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="conflictResolution">
            <div>
              <h1 className="experience-heading">
                Conflict Resolution Approaches using Gender Competencies
              </h1>
              <div>
                {
                  "Conflicts in the workplace are commonly resolved using five strategies known as the Thomas-Kilmann model. These methods vary based on individuals' personalities and inclinations:"
                }
              </div>
              <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex"}}>
                  <Fade right duration={1000} distance="100px">
                    <div style={{flex: 1}}>
                      <ConflictResolutionStrategies />
                    </div>
                  </Fade>
                  <Fade left duration={1000} distance="100px">
                    <div className="image-container" style={{flex: 1}}>
                      <img
                        src={ConflictManagementImage}
                        alt="Conflict Management"
                        style={{width: "75%", height: "auto"}}
                      />
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        link: card.link,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
