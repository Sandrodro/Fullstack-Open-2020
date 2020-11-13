import React from "react";

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(item => {
                return (
                    <Part part={item.name}
                        exercises={item.exercises}
                        key={item.id} />)
            })}
            <Total course={course} />
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Total = ({ course }) => {

    const total = course.parts.reduce((sum, x) => sum + x.exercises, 0)

    return (
        <p><strong>
            Number of exercises {total}
        </strong>
        </p>
    )
}

export default Course;