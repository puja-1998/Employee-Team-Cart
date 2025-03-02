import React from "react";

const TeamList = ({ teamMembers, dispatch }) => {
  return (
    <div className="team-list">
      <h2>Team Members</h2>
      {teamMembers.map((member) => (
        <div key={member.id}>
          {member.first_name} {member.last_name} - {member.age} years old
          <button
            onClick={() => dispatch({ type: "REMOVE_MEMBER", payload: member })}
          >
            REMOVE
          </button>
        </div>
      ))}
      <p>Average Age: {teamMembers.length > 0 ? teamMembers.averageAge : 0}</p>
      <button onClick={() => dispatch({ type: "CALCULATE_AVERAGE" })}>
        Calculate Average Age
      </button>
      <button onClick={() => dispatch({ type: "SORT_BY_AGE" })}>
        SORT BY AGE
      </button>
    </div>
  );
};

export default TeamList;