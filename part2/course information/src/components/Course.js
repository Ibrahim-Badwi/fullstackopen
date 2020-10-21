import React from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const listOfExcercises = parts.map((part) => part.exercises);
  return (
    <p>
      total of{" "}
      {listOfExcercises.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )}{" "}
      excercises
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
