import React, { useContext, useEffect, useState } from "react";
import NavbarDashBoard from "./NavbarDashBoard";
import { Button } from "react-bootstrap";
import StudentContext from "../store/student-context";
import axios from "axios";

const Home = (props) => {
  const studentCtx = useContext(StudentContext);
  const [errorMessage,setErrorMessage] = useState('');
  const [searchedStudents,setSearchedStudents] = useState('')


  //show the add form
  const AddHandler = () => {

    props.onAdd({isAdd:true,fetchedSutudents});
  };

  const EditHandler = (id) => {
    const student = studentCtx.students.find((student)=>student.id===id);
    const {name,subject,marks} = student
     const data = {
      name,subject,marks,isEdit:true,fetchedSutudents
     }
    props.onEdit(data);


  };

  const deleteHandler = async(id) =>{
    const token = localStorage.getItem('token');
   try {
    const res = await axios.delete(`http://localhost:8000/student/remove/${id}`,{headers:{Authorization:token}})
    if(res.status===200){
      studentCtx.removeStudent(id);
      
     fetchedSutudents();
    }
   } catch (error) {
       setErrorMessage('No record found')
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
      if(res.status===200){
          if(!res.data.data.length){
            setErrorMessage('Nothing to search');
           studentCtx.searchStudents([]);
          }else{
            setErrorMessage('')
            studentCtx.searchStudents(res.data.data);
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



  


  return (
    <div>
      <NavbarDashBoard />
      <div className="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div className="row ">
            <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form className="form-inline" onSubmit={submitSearchHandler}>
                  <input
                    className="form-control mr-sm-2"
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
              className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
              style={{ color: "green" }}
            >
              <h4>
                <b>Student Details</b>
              </h4>
            </div>
            <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={AddHandler}>
                + New Student
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
            <div className="error">{errorMessage}</div>
              <table className="table table-striped table-hover table-bordered">
      
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
                  {studentCtx.students.map((student,index)=>(
                       <tr key={student.id}>
                       <td>{index+1}</td>
                       <td>{student.name}</td>
                       <td>{student.subject}</td>
                       <td>{student.marks}</td>
                       <td>
                         <a
                           href="#"
                           className="edit"
                           title="Edit"
                           data-toggle="tooltip"
                         >
                           <i className="material-icons" onClick={()=>EditHandler(student.id)}>
                             &#xE254;
                           </i>
                         </a>
                         <a
                           href="#"
                           className="delete"
                           title="Delete"
                           data-toggle="tooltip"
                           style={{ color: "red" }}
                         >
                           <i className="material-icons" onClick={()=>deleteHandler(student.id)}>&#xE872;</i>
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
