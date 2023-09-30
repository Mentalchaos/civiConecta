import './EditEstablishment.css';

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
    <div className='gradelist-container'>
      { list.map(el => (
        <div className="gradelist-element" key={el.id}>
          {`${el.course} ${el.grade}`}
        </div>
      ))}
    </div>
  )
};

GradeList.displayName = 'GradeList';

export default GradeList;
