import React from 'react'

const StudentCard = (props) => {
    let Student = props.singleStudent
  return (
    <div>
        <h1>{Student.name}</h1>
        <h3>{Student.grade}</h3>
    </div>
  )
}

export default StudentCard