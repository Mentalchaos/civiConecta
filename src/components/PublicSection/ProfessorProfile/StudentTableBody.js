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
        statusObj.background = "#f8cfd7";
        statusObj.color = "#e95f7b";
        break;
      case 100:
        statusObj.state = "Completa";
        statusObj.background = "#deeed6";
        statusObj.color = "#94c878";
        break;
      default:
        statusObj.state = "Incompleta";
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
      <p style={{textAlign: 'center'}}className="student-tablebody-values"> {data.name} </p>
      <p className="student-tablebody-values"> {data.run} </p>
      <p className="student-tablebody-values" style={{ background, color }}> {state} </p>
      <p className="student-tablebody-values"> {data.percentage}% </p>
    </div>
  )
};

StudentTableBody.displayName = "StudentTableBody";

export default StudentTableBody;
