
const list = [
  {
    id: 1,
    course: '5º Basico',
    grade: 'A'
  },{
    id: 2,
    course: '5º Basico',
    grade: 'B'
  },{
    id: 3,
    course: '4º Basico',
    grade: 'A'
  }
];

const GradeList = () => {
  return (
    <div style={{display: 'flex'}}>
      { list.map(el => (
        <div key={el.id}>
          {`${el.course} ${el.grade}`}
        </div>
      ))}
    </div>
  )
};

GradeList.displayName = 'GradeList';

export default GradeList;
