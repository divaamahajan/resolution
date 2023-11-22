import React, {useContext} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import {workExperiences} from "../../portfolio";

function ConflictResolutionStrategies() {
  const {isDark} = useContext(StyleContext);
  const style = {
    marginLeft: "20px" // Adjust the value as needed
  };
  const style2 = {
    lineHeight: "1.5" // Adjust the value as needed
  };

  return (
    <div>
    <Fade right duration={1000} distance="100px">
      <h2 style={style2}>Individualistic Competencies</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
  <div style={{ flex: 1 }}>
    <h3 style={style}>Avoiding</h3>
    <p style={style}>Is both unassertive and uncooperative. In this mode, you work to sidestep the conflict without attempting to satisfy either individual’s concerns. </p>
    <ul>
      <li>
        <strong>Self-reliance and Directive Decision-making:</strong> Choosing to avoid conflict independently without engaging in immediate resolution.
      </li>
      <li>
        <strong>Narrow Focus and Goal-driven Results:</strong> The focus is on steering clear of engagement or immediate resolution to achieve personal goals.
      </li>
    </ul>
    <h3 style={style}>Competing</h3>
    <p style={style}>Is assertive and uncooperative. In this mode, you try to satisfy your own concerns at the other person’s expense. </p>
    <ul>
      <li>
        <strong>An assertive and uncooperative method:</strong> This resonates with the competitive and win/lose mindset associated with "Transactors" who view work as transactional, often adopting a competitive approach to conflicts where winning becomes a priority.
      </li>
      <li>
        <strong>Tends to lead to an unsatisfactory resolution without room for collaboration:</strong> This description reflects the trait of prioritizing singular tasks and lacking collaboration, which is akin to the behavior of "Firefighters" who prioritize individual tasks and may overlook collaborative approaches.
      </li>
    </ul>
  </div>
  <div className="experience-cards-div" style={{ flex: 2 }}>
    {workExperiences.experience.slice(0, 2).map((card, i) => (
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
    ))}
  </div>
</div>

</Fade>
<Fade left duration={1000} distance="100px">

      <h2 style={style2}>Relational Competencies</h2>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
  <div className="experience-cards-div"style={{ flex: 1 }}>
  {workExperiences.experience.slice(2, 4).map((card, i) => (
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
  ))}
</div>
  <div style={{ flex: 1 }}>
      <h3 style={style}>Accommodating</h3>
      <p style={style}>Is unassertive and cooperative. In this mode, you try to satisfy the other person’s concerns at the expense of your own concerns. </p>
      <ul>
        <li>
          <strong>
            Acquiescing and giving the opposing party what it needs:
          </strong>{" "}
          his resonates with the approach of "Fire-preventers" who prioritize
          listening, empathizing, and engaging in customer-centric improvements.
          Accommodating involves prioritizing the needs of others, akin to the
          empathetic nature of those with relational competencies.
        </li>
        <li>
          This method allows you to resolve a problem in the short-term while
          working toward a long-term solution.
        </li>
      </ul>

      <h3 style={style}>Collaborating</h3>
      <p style={style}>Is both assertive and cooperative. In this mode, you try to find a win-win solution that completely satisfies the concerns of both individuals involved. </p>
      <ul>
        <li>
          <strong>
            Working with the other party to find a mutually agreeable solution:
          </strong>
          This reflects the focus of "Interactors/Transformers" who prioritize
          aligning individual interests with group objectives, emphasizing
          shared power, and nurturing collective excellence. They believe in a
          win/win mindset, emphasizing collective synergy over individual
          contributions, which is evident in collaborative problem-solving.
        </li>
        <li>
          <strong>Negotiating for mutually beneficial outcomes:</strong> This
          mirrors the emphasis on negotiation for mutual wins and connections, a
          characteristic of "Fire-preventers" who prioritize listening,
          empathizing, and engaging in customer-centric improvements, fostering
          innovation through flexible, process-oriented continuous improvements.
        </li>
        <li>
          <strong>
            Emphasizing cross-functix onal collaboration and
            information-sharing:
          </strong>{" "}
          Collaborative approaches, like "Collaborating," are aligned with the
          emphasis on cross-functional collaboration and inclusive
          decision-making, which are traits of relational competencies focusing
          on collective intelligence and integration within teams.
        </li>
      </ul>
</div>
</div>

</Fade>

<Fade bottom duration={1000} distance="100px">

      <h2 style={style2}>Individualistic-Relational Competencies</h2>
      <h3 style={style}>Compromising</h3>
      <p style={style}>
      Is intermediate in both assertiveness and cooperativeness. In this mode, you try to find an acceptable solution that only partially satisfies both individual’s concerns. 
        A lose-lose strategy where both parties sacrifice some needs to reach an
        agreement swiftly. It's a temporary fix to avoid further conflict until
        a more permanent solution can be implemented.
      </p>
</Fade>
    </div>
  );
}

export default ConflictResolutionStrategies;
