import React, {useReducer } from "react";
import StudentContext from "./student-context";

const initalState = {
  students: [],
};

const studentReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingStudentIndex = state.students.findIndex(
      (student) => student.id === action.student.id
    );

    let updatedStudents;
    if (existingStudentIndex !== -1) {
      updatedStudents = state.students.map((student, index) =>
        index === existingStudentIndex
          ? { ...student, marks: action.student.marks }
          : student
      );
    } else {
      updatedStudents = [...state.students, action.student];
    }


    return {
      ...state,
      students: updatedStudents,
    };
  }


  // remove the student handle
  if(action.type==='REMOVE'){
    const updatedStudents = state.students.filter((student)=>student.id!==action.id);
    return {
      ...state,
      students:updatedStudents
    }
  }

 


  return initalState;
};

const StudentProvider = (props) => {

  const [studentState, dispatcher] = useReducer(studentReducer, initalState);

  const addStudentHandler = (student) => {
    dispatcher({ type: "ADD", student: student });
  };

  const removeStudentHandler = (id)=>{
        dispatcher({type:'REMOVE',id:id})
  }



  const context = {
    students: studentState.students,
    addStudent: addStudentHandler,
    removeStudent: removeStudentHandler,
    message: "this is working or not",
  };


  return (
    <StudentContext.Provider value={context}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
