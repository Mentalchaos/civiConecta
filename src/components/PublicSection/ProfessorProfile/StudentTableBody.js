import './professor-profile.css';

const StudentTableBody = ({ value }) => {
  return (
    <div className="student-tablebody">
      { value.map(data => <p key={data} className="student-tablebody-values"> {data} </p>)}
    </div>
  )
}

StudentTableBody.displayName = "StudentTableBody";

export default StudentTableBody;
