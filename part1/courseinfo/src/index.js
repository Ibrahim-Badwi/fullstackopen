import React from 'react';
import ReactDOM from 'react-dom';

  
const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
    <>
    {parts.map(part => <Part part={part.name} exercise={part.exercises} />)}
     {/* <Part part={parts[0].name} exercise={parts[0].exercises} />
     <Part part={parts[1].name} exercise={parts[1].exercises} />
     <Part part={parts[2].name} exercise={parts[2].exercises} /> */}
    </>
  )
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
};

const Total = ({ parts }) => {
  let length = 0;
  parts.forEach(element => length += element.exercises)
  
  return (
    <p>Number of exercises {length} </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundemental of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
