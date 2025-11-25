import React from 'react'
import StudentCard from './StudentCard';

const StudentList = (props) => {
    let studentsData = props.students;
  return (
    <div>
    {studentsData.map((singleStudent)=>{
        return <StudentCard singleStudent = {singleStudent}/>
    })}
    </div>
  )
}

export default StudentList