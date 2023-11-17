import React from "react";

function ConflictResolutionStrategies() {
  const style = {
    marginLeft: "20px" // Adjust the value as needed
  };

  return (
    <div>
      <h2>Individualistic Competencies</h2>
      <h3 style={style}>Avoiding</h3>
      {/* <p style={style}>
        This strategy involves disregarding conflict, often chosen when
        individuals seek to steer clear of engagement or when there's no
        immediate resolution. It can lead to unresolved issues and potential
        friction between parties.
      </p> */}
      <ul>
        <li>
          <strong>Self-reliance and Directive Decision-making:</strong> Choosing
          to avoid conflict independently without engaging in immediate
          resolution.
        </li>
        <li>
          <strong>Narrow Focus and Goal-driven Results:</strong> The focus is on
          steering clear of engagement or immediate resolution to achieve
          personal goals.
        </li>
      </ul>

      <h3 style={style}>Competing</h3>
      {/* <p style={style}>
        An assertive and uncooperative method where winning becomes the
        priority. It tends to lead to an unsatisfactory resolution without room
        for collaboration.
      </p> */}
      <ul>
        <li>
          <strong>An assertive and uncooperative method:</strong> This resonates
          with the competitive and win/lose mindset associated with
          "Transactors" who view work as transactional, often adopting a
          competitive approach to conflicts where winning becomes a priority.
        </li>
        <li>
          <strong>
            Tends to lead to an unsatisfactory resolution without room for
            collaboration:
          </strong>{" "}
          This description reflects the trait of prioritizing singular tasks and
          lacking collaboration, which is akin to the behavior of "Firefighters"
          who prioritize individual tasks and may overlook collaborative
          approaches.
        </li>
      </ul>
      <h2>Relational Competencies</h2>

      <h3 style={style}>Accommodating</h3>
      {/* <p style={style}>
        Also known as smoothing, this involves conceding to resolve the
        immediate problem, though it might not address long-term solutions.
      </p> */}
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
      {/* <p style={style}>
        Requires working together to find mutually agreeable solutions,
        fostering a win-win scenario. It involves both parties in
        problem-solving.
      </p> */}
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
            Emphasizing cross-functix onal collaboration and information-sharing:
          </strong>{" "}
          Collaborative approaches, like "Collaborating," are aligned with the
          emphasis on cross-functional collaboration and inclusive
          decision-making, which are traits of relational competencies focusing
          on collective intelligence and integration within teams.
        </li>
      </ul>
      <h2>
        <h2>Individualistic-Relational Competencies</h2>
      </h2>
      <h3 style={style}>Compromising</h3>
      <p style={style}>
        A lose-lose strategy where both parties sacrifice some needs to reach an
        agreement swiftly. It's a temporary fix to avoid further conflict until
        a more permanent solution can be implemented.
      </p>
    </div>
  );
}

export default ConflictResolutionStrategies;
