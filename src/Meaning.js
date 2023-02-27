import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br /> <br />
      <span>{props.meaning.definition}</span> <br />
      <em>{props.meaning.example}</em> <br /> <br />
    </div>
  );
}
