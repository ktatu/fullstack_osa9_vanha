import React from 'react';

interface HeaderProps {
  courseName: string;
}

interface ContentProps {
  content: Array<CoursePart>
}

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface TotalProps {
  exerciseArray: Array<number>;
}

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const Header = (props: HeaderProps) => {
    return <h1>{props.courseName}</h1>
  };

  const Content = (props: ContentProps) => {
    return (
      <div>
        {props.content.map(part => <p key={part.name}>{part.name} {part.exerciseCount}</p>)}
      </div>
    )
  };

  const Total = (props: TotalProps) => {
    const total = props.exerciseArray.reduce((prev, curr) => (prev + curr), 0);
    return <p>Number of exercises: {total}</p>
  };

  return (
    <div>
      <Header courseName={courseName} />
      <Content content={courseParts} />
      <Total exerciseArray={courseParts.map(part => part.exerciseCount)} />
    </div>
  );
};

export default App;