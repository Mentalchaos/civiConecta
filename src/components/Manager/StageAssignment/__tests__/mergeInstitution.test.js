import InstitutionManager from '../institutionManager.js';
import mergeAll from '../mergeInstitutions.js';

describe('merge states', () => {
  let previousState = null;

  beforeEach(() => {
    previousState = {
      "number": 17,
      "name": "institucion nueva",
      "active": true,
      "courses": [
        {
          "letters": [
            {
              "character": "A",
              "teachers": [],
              "students": [
                {
                  "name": "sebareal",
                  "run": "57.828.197-5",
                  "surveys": []
                }]
            }],
            "grade": "5º", // se cambia level por grade para manter consistencia en las pruebas
            "createdAt": "2022-12-01T15:05:14.000Z",
            "updatedAt": "2022-12-01T15:05:14.000Z"
        }],
      "createdAt": "2022-12-23T15:43:09.276Z",
      "updatedAt": "2022-12-23T18:47:11.123Z"
    };
  });

  test('from previous code insert a student into same grade and letter', () => {
    const im = new InstitutionManager([]);
    im.saveStudent({ grade: '5º', letter: 'A', name: 'Juanito', run: '51337559-k' });
    const result = mergeAll(previousState, im.institution);

    expect(result.name).toBe('institucion nueva');
    expect(result.courses.length).toBe(1);
    expect(result.courses[0].letters.length).toBe(1);
    expect(result.courses[0].letters[0].students.length).toBe(2);
    expect(result.courses[0].letters[0].students[0].name).toBe('sebareal');
    expect(result.courses[0].letters[0].students[1].name).toBe('Juanito');
  });

  test('from previous code insert 2 students into different grades and letters', () => {
    const im = new InstitutionManager([]);
    im.saveStudent({ grade: '5º', letter: 'C', name: 'Juanito', run: '51337559-k' });
    im.saveStudent({ grade: '6º', letter: 'F', name: 'JP', run: '43022893-5' });
    const result = mergeAll(previousState, im.institution);

    expect(result.name).toBe('institucion nueva');
    expect(result.courses.length).toBe(2);
    expect(result.courses[0].letters.length).toBe(2);

    expect(result.courses[0].letters[0].character).toBe('A');
    expect(result.courses[0].letters[1].character).toBe('C');

    expect(result.courses[0].letters[0].students.length).toBe(1);
    expect(result.courses[0].letters[0].students[0].name).toBe('sebareal');

    expect(result.courses[0].letters[1].students.length).toBe(1);
    expect(result.courses[0].letters[1].students[0].name).toBe('Juanito');

    expect(result.courses[1].letters[0].students[0].name).toBe('JP');
  });
});
