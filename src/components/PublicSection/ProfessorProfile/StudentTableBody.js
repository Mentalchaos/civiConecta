import './professor-profile.css';


const StudentTableBody = ({ data, id }) => {

  const status = () => {
    let statusObj = {
      state: "",
      background: "",
      color: ""
    };

    switch (data.percentage) {
      case 0:
        statusObj.state = "Pendiente";
        statusObj.background = "#deeed6";
        statusObj.color = "#e17c86";
        break;
      case 100:
        statusObj.state = "Completado";
        statusObj.background = "#dfeed7";
        statusObj.color = "#a7d392";
        break;
      default:
        statusObj.state = "Incompleto";
        statusObj.background = "#faf0cd";
        statusObj.color = "#d2a251";
        break;
    };

    return statusObj;
  };
  
  const { state, background, color } = status();

  return (
    <div className="student-tablebody">
      <p className="student-tablebody-values"> {id} </p>
      <p className="student-tablebody-values"> {data.name} </p>
      <p className="student-tablebody-values"> {data.run} </p>
      <p className="student-tablebody-values" style={{ background, color }}> {state} </p>
      <p className="student-tablebody-values"> 02/02/22 </p>
    </div>
  )
};

StudentTableBody.displayName = "StudentTableBody";

export default StudentTableBody;
