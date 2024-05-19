import React,{useEffect, useState} from 'react'
import StudentContext from './student-context'


// const initalState = {
//   students:[]
// }

// const studentReducer = (state,action) =>{
//  if(action.type==='ADD'){
//   //  const students = [...state.students];
//   //  return students;
//   console.log('ADDs');
//   return
//   // return {
//   //   ...state,
//   //   students: [...state.students, action.student]
//   // };
//  }
// }



const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);


  // const [studentState,dispatcher] = useReducer(studentReducer,initalState);

  // const addStudentHandler = (student)=>{
  //   console.log('students----------->',student)
  //    dispatcher({type:'ADD',student:student})
  // }

  // const removeStudentHandler = (id)=>{

  // }

  const addStudentHandler = (student)=>{
    setStudents((prevState)=>[...prevState,student]);
  }

  useEffect(()=>{
    console.log("students",students)
  },[students,addStudentHandler])

    const context = {
        students:students,
        addStudent:addStudentHandler,
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
