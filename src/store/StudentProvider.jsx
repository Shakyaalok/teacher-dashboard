import React from 'react'
import StudentContext from './student-context'

const StudentProvider = (props) => {

    const context = {
        students:[],
        addStudent:(student)=>{},
        removeStudent:(id)=>{},
        message:'this is working or not'

    }
  return (
    <StudentContext.Provider value={context}>
         {props.children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
