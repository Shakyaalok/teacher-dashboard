import React, { useContext, useEffect, useState } from "react";
import NavbarDashBoard from "./NavbarDashBoard";
import { Button } from "react-bootstrap";
import StudentContext from "../store/student-context";
import axios from "axios";

const Home = (props) => {
  const studentCtx = useContext(StudentContext);
  const [result, setResult]= useState([]);
  const [errorMessage,setErrorMessage] = useState('');
  const [searchedStudents,setSearchedStudents] = useState('')


  //show the add form
  const AddHandler = () => {
    props.onAdd(true);
  };

  const EditHandler = (id) => {
    const student = studentCtx.students.find((student)=>student.id===id);
    const {name,subject,marks} = student
     const data = {
      name,subject,marks,isEdit:true
     }
    props.onEdit(data);


  };

  const deleteHandler = async(id) =>{
    const token = localStorage.getItem('token');
   try {
    const res = await axios.delete(`http://localhost:8000/student/remove/${id}`,{headers:{Authorization:token}})
    if(res.status===200){
      studentCtx.removeStudent(id)
    }
   } catch (error) {
       setErrorMessage(error.data.response.message)
   }
  }

  //filter students
  const searchStudentHandler = (e)=>{
    setSearchedStudents(e.target.value);
  }

  const submitSearchHandler = async(e)=>{
    e.preventDefault();
    fetchedSutudents();
  }


  const fetchedSutudents = async () => {
    const token = localStorage.getItem("token");
    try {
      let endPoint = searchedStudents
      ? `http://localhost:8000/student/all/records?query=${searchedStudents}`
      : "http://localhost:8000/student/all/records";

      const res = await axios.get(endPoint, { headers: { Authorization: token } });
      console.log('resres',res)
      if(res.status===200){
          if(!res.data.data.length){
            setErrorMessage('No Match found')
          }else{
            setErrorMessage('')
            setResult(res.data.data)
          }
          
      }
    } catch (error) {
      setErrorMessage(error.data.response.message)
    }
  };
  //all records fetched
  useEffect(() => {
    fetchedSutudents();
  }, []);


  useEffect(()=>{
    result.forEach((student)=>{
      studentCtx.addStudent(student)
    })
    
  },[result])

  


  return (
    <div>
      <NavbarDashBoard />
      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div class="row ">
            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline" onSubmit={submitSearchHandler}>
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Student"
                    aria-label="Search"
                    onChange={searchStudentHandler}
                    value = {searchedStudents}
                  />
                </form>
              </div>
            </div>
            <div
              class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
              style={{ color: "green" }}
            >
              <h4>
                <b>Student Details</b>
              </h4>
            </div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={AddHandler}>
                + New Student
              </Button>
            </div>
          </div>
          <div class="row">
            <div class="table-responsive">
            <div className="error">{errorMessage}</div>
              <table class="table table-striped table-hover table-bordered">
      
                <thead className="table-header">
                  <tr>
                    <th>S.No</th>
                    <th>Name </th>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="border-color">
                  {result.map((student,index)=>(
                       <tr key={student.id}>
                       <td>{index+1}</td>
                       <td>{student.name}</td>
                       <td>{student.subject}</td>
                       <td>{student.marks}</td>
                       <td>
                         <a
                           href="#"
                           class="edit"
                           title="Edit"
                           data-toggle="tooltip"
                         >
                           <i class="material-icons" onClick={()=>EditHandler(student.id)}>
                             &#xE254;
                           </i>
                         </a>
                         <a
                           href="#"
                           class="delete"
                           title="Delete"
                           data-toggle="tooltip"
                           style={{ color: "red" }}
                         >
                           <i class="material-icons" onClick={()=>deleteHandler(student.id)}>&#xE872;</i>
                         </a>
                       </td>
                     </tr>
                  ))}
             
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
