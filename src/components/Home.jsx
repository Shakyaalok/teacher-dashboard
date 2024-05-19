import React, { useContext, useEffect, useState } from "react";
import NavbarDashBoard from "./NavbarDashBoard";
import { Button } from "react-bootstrap";
import StudentContext from "../store/student-context";
import axios from "axios";

const Home = (props) => {
  const studentCtx = useContext(StudentContext);

  //show the add form
  const AddHandler = () => {
    props.onAdd(true);
  };

  const EditHandler = () => {
    props.onEdit(true);
  };

  //all records fetched
  useEffect(() => {
    const fetchedSutudents = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(
          "http://localhost:8000/student/all/records",
          {
            headers: { Authorization: token },
          }
        );
        if(res.status===200){
          const newStudents = res.data.data.filter(newStudent => (
            !studentCtx.students.some(existingStudent => existingStudent.id === newStudent.id)
          ));
          newStudents.forEach(student => {
            studentCtx.addStudent(student);
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchedSutudents();


  }, []);


  return (
    <div>
      <NavbarDashBoard />
      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div class="row ">
            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Student"
                    aria-label="Search"
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
                  {studentCtx.students.map((student,index)=>(
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
                           <i class="material-icons" onClick={EditHandler}>
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
                           <i class="material-icons">&#xE872;</i>
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
