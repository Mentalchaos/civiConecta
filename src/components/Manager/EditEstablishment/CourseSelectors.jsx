const data = {
  grades: [
    '1º Basico',
    '2º Basico',
    '3º Basico',
    '4º Basico',
    '5º Basico',
    '6º Basico',
    '7º Basico',
    '8º Basico',
    '1º Medio',
    '2º Medio',
    '3º Medio',
    '4º Medio'
  ],
  letters: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
  ]
};

const CourseSelectors = () => {
  return (
    <div>
      <select name="grades">
        <option value={null} selected>Selecciona un curso</option>
        {data.grades.map(val => <option value={val}>{val}</option>)}
      </select>

      <select name="letters">
        <option value={null} selected>Selecciona una letra</option>
        {data.letters.map(val => <option value={val}>{val}</option>)}
      </select>
    </div>
  )
}

CourseSelectors.displayName = 'CourseSelectors';

export default CourseSelectors;
