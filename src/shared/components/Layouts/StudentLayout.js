import { Link, Outlet } from 'react-router-dom'

const StudentLayout = () => {
    return (

      <div className="student-main">
         <div> This is the student header </div>

         <Link to="/students">Students Page</Link> &nbsp;
        <Link to="/student/1">Student 1</Link> &nbsp;
        <Link to="/student/add">Add Student</Link> &nbsp;
          

            <br />

            <Outlet />

            <br />
            
        <div> This is the Student footer </div>
      </div>

    );
  }
  
  export default StudentLayout;
  