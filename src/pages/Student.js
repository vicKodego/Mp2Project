import { useParams } from "react-router-dom";

const Student = () => {

  const { id, hello } = useParams();

    return (
      <div className="Student">
        <br />
       This is the Student {id} {hello}
       <br />
      </div>
    );
  }
  
export default Student;
  