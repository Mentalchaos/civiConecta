import Establishment from '../Establishment.js';

describe('entities/establishment.js', () => {
  let initialData;

  beforeEach(() => {
    initialData = {
      "number": 1,
      "name": "College 1",
      "active": true,
      "courses": [
        {
          "letters": [
            {
              "character": "A",
              "teachers": [],
              "students": [
                {
                  "name": "Tina Soto",
                  "run": "33608548-9",
                  "surveys": []
                }
              ]
            }
          ],
          "level": "5º",
          "createdAt": "2022-12-01T15:05:14.000Z",
          "updatedAt": "2022-12-01T15:05:14.000Z"
        }
      ],
      "createdAt": "2022-12-04T10:02:51.853Z",
      "updatedAt": "2022-12-22T20:40:14.563Z"
    };
  });

  test('load and map 1 establishment', () => {
    const entity = new Establishment(initialData);
    expect(entity.grades.length).toBe(1);
    expect(entity.grades[0].level).toBe('5º');
    expect(entity.grades[0].letters[0].character).toBe('A');
    expect(entity.grades[0].letters[0].students[0].name).toBe('Tina Soto');
  });

  test('using a previous establishment and adding 1 student into previous set grade|letter', () => {
    const entity = new Establishment(initialData);

    entity
      .addGrade('5º')
      .addLetter('A')
      .addStudent({
        name: 'James Johnson',
        run: '31641352-8'
      });

    expect(entity.grades[0].letters[0].students[0].name).toBe('Tina Soto');
    expect(entity.grades[0].letters[0].students[1].name).toBe('James Johnson');
  });

  test('using a previous establishment and adding 2 student into different grades and|or letters', () => {
    const entity = new Establishment(initialData);

    entity
      .addGrade('5º')
      .addLetter('A')
      .addStudent({
        name: 'Denise Weber',
        run: '31641352-8'
      });

    entity
      .addGrade('6º')
      .addLetter('C')
      .addStudent({
        name: 'Robert Carson',
        run: '26691573-k'
      });

    entity
      .addGrade('6º')
      .addLetter('D')
      .addStudent({
        name: 'Taylor Baker',
        run: '70666762-8'
      });

    expect(entity.grades[0].letters[0].students[0].name).toBe('Tina Soto');
    expect(entity.grades[0].letters[0].students[1].name).toBe('Denise Weber');
    expect(entity.grades[1].letters[0].students[0].name).toBe('Robert Carson');
    expect(entity.grades[1].letters[1].students[0].name).toBe('Taylor Baker');
  });

  test('using the same object reference vs a clone with different reference', () => {
    const entity = new Establishment(initialData);
    const cloneEntity = entity.clone();
    expect(entity).toBe(entity);
    expect(entity).not.toBe(cloneEntity);
    expect(entity).toEqual(cloneEntity);
  });

  test('check how many students are in a class', () => {
    const entity = new Establishment(initialData);
    entity
      .addGrade('5º')
      .addLetter('D')
      .addStudent({
        name: 'John Doe',
        run: '34036753-7'
    });

    expect(entity.calculateStudentsInGradeLetter('5º', 'D')).toBe(1);
  });

  test('retrieve all students with their grade and letter', () => {
    const entity = new Establishment(initialData);

    entity
      .addGrade('6º')
      .addLetter('C')
      .addStudent({ name: 'Alfonso', run: '39520737-7' });

    const students = entity.students;
    const tina = students[0];
    const alfonso = students[1];

    expect(tina.name).toBe('Tina Soto');
    expect(tina.run).toBe('33608548-9');
    expect(tina.grade).toBe('5º');
    expect(tina.letter).toBe('A');

    expect(alfonso.name).toBe('Alfonso');
    expect(alfonso.run).toBe('39520737-7');
    expect(alfonso.grade).toBe('6º');
    expect(alfonso.letter).toBe('C');
  });

  test('delete a previous student from a grade will be done correctly', () => {
    const entity = new Establishment(initialData);

    entity
      .addGrade('8')
      .addLetter('F')
      .addStudent({ name: 'Daniel Walker', run: '25139190-4' });

    expect(entity.grades[0].letters[0].students[0].name).toBe('Tina Soto');
    expect(entity.grades[1].letters[0].students[0].name).toBe('Daniel Walker');

    entity
      .addGrade('8')
      .addLetter('F')
      .deleteStudent({ run: '25139190-4' });

    expect(entity.grades[1].letters[0].students.length).toBe(0);
  });
});
