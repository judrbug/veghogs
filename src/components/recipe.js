import React from "react"


const Recipe = ({ title, description, ingredients, steps }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <ul>
      {ingredients.map(({ name }, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <ol>
    {steps.map(({ stepinfo }, index) => (
        <li key={index}>{stepinfo}</li>
      ))}
    </ol>
  </div>
);

export default Recipe