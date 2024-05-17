import React, { createContext } from 'react'

const StudentContext = createContext({
    students:[],
    addStudent:(student)=>{},
    removeStudent:(id)=>{}
})


export default StudentContext
