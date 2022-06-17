import React from "react";

const Courses = ({ courses }) => {
    return(
        <div>
            {courses.map(course =>
                <div key={course.id}>
                    <Course course={course} />
                </div>
            )}
        </div>
    )
}

const Course = ({course}) => {
    return(
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => {
    return(
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part}/>)}
            <Stats parts={parts}/>
        </div>
    )
}

const Part = ({part}) => <p>{part.name} : {part.exercises}</p>

const Stats = ({parts}) => {
    //Todo: Continue here
    console.log(parts)

    const total = parts.reduce((s,p) => {
        console.log('s=', s, 'p=', p.exercises)
        return (s + p.exercises)
      }, 0)
    return(
        <p><strong>Total of {total} exercises</strong></p>
    )
}

export default Courses