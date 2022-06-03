const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
  
  return(
    <div>
      <Header name={course.name}/>

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App

const Header = (course) => {
  console.log(course)
  return(
    <div>
      <h1> {course.name} </h1>
    </div>
  )
}

const Content = (course) => {
  return(
    <div>
      <Part parts={course.parts} number={0}/>
      <Part parts={course.parts} number={1}/>
      <Part parts={course.parts} number={2}/>
    </div>
  )
}

const Part = (course) => {
  return(
    <div>
      <p>{course.parts[course.number].name} : {course.parts[course.number].exercises}</p>
    </div>
  )
}

const Total = (course) => {
  let ntotal = 0

  for (let i = 0; i < course.parts.length; i++){
    ntotal = course.parts[i].exercises + ntotal
  }

  return(
    <div>
      <p>Number of exercises: {ntotal}</p>
    </div>
  )
}