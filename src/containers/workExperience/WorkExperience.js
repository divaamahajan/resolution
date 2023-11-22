import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ConflictManagementImage from "./Conflict_Management.jpeg";
import ConflictResolutionStrategies from "./ConflictResolutionStrategies";

export default function WorkExperience() {
  // const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="conflictResolution">
            <div>
              <h1 className="experience-heading">
                Conflict Resolution Approaches using Gender Competencies
              </h1>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <div style={{ flex: 1, marginRight: '20px' }}>
  <p>
      Conflicts in the workplace are commonly resolved using five strategies known as the Thomas-Kilmann model. These methods vary based on individuals' personalities and inclinations.
    </p>    <p>
    The TKI test assesses conflict management styles, highlighting preferred approaches. Conflict doesn't always mean negative actions; it's about incompatible interests. This knowledge is valuable for personal and professional contexts, especially for managers handling conflicts frequently.    </p><p>
The assessment helps understand your conflict management style and provides practical tips to guide conflicts toward positive outcomes.
    </p>
    <ul>
      <li>{"Low importance of relationship =>"} <strong>Individualistic Competencies</strong></li>
      <br/>
      <ul><strong>Assertiveness:</strong>The degree to which you try to satisfy your own concerns during a conflict. This is related to how you might try to meet your needs or receive support for your ideas. </ul>
      <br/><br/>
      <li>{"High importance of relationship =>"} <strong>Relational Competencies</strong></li>
      <br/>
      <ul><strong>Cooperativeness:</strong>The degree to which you try to satisfy the other individuals’ concerns. It is related to how you might try to help the other individual meet his or her needs or how you can be receptive to the other individuals’ ideas</ul>
    </ul>
  </div>
  <div style={{ flex: 1 }}>
    <Fade left duration={1000} distance="100px">
      <div className="image-container" style={{ justifyContent: "center" }}>
        <img
          src="https://images.ctfassets.net/pdf29us7flmy/3d9OPmQHZzkruB9f3vnWwo/dfe23ea143faff68e74aa860e08a3a20/-IND-001-019-_What_is_Conflict_Management__Final.jpg?w=720&q=100&fm=avif"
          alt="Conflict Management"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Fade>
  </div>
</div>


              {/* <div style={{display: "flex", justifyContent: "center"}}> */}
                {/* <div style={{display: "flex"}}> */}
                  {/* <Fade right duration={1000} distance="100px"> */}
                    <div style={{flex: 2}}>
                      <ConflictResolutionStrategies />
                    </div>
{/* 
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
              </div> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
