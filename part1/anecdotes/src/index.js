import React from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdot =({ anecdote, point }) =>{
  return (
    <>
      {anecdote}
      <p>has {point} votes</p>
    </>
  )
};

const App = (props) => {
  const [points, setPoints] = React.useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = React.useState(0);
  const mostVotedPos = points.indexOf(Math.max(...points));

  const randomInt = (max, min=0) => {
    return Math.floor(Math.random() * (max-min) + min);
  };

  const handleNext = () => {
    setSelected(randomInt(anecdotes.length));
  };

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };
  
  return (
    <div>
      <h2>Anecdot of the day</h2>
      <Anecdot anecdote={anecdotes[selected]} point={points[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      
      <br />
      
      <h2>Anecdote with most views</h2>
      <Anecdot anecdote={anecdotes[mostVotedPos]} point={points[mostVotedPos]}/>
    </div>
  )
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
