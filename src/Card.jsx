// Card.jsx
import React from "react";
import List from "./List";

function Card() {
  const students = List();

  return (
    <>
      {students.map((student) => (
        <div className="card">
          <div key={student.id}>
            <img className="image" src={student.profile} alt={student.name} />
            <p className="textalign-center cardtext-primary mt-2">
              {student.name}
            </p>
            <p className="textalign-center">{student.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
