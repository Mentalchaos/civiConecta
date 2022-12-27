import Grade from './Grade.js';

class Establishment {
  constructor(data = {}) {
    this.number = data.number;
    this.name = data.name;
    this.active = data.active;
    this.grades = (data.courses ?? data.grades).map(c => new Grade(c));
  }

  addGrade(grade) {
    let entity = this.grades.find(g => g.level === grade);

    if (entity) {
      return entity;
    }

    entity = new Grade({ level: grade });
    this.grades.push(entity);
    return entity;
  }

  calculateStudentsInGradeLetter(grade, letter) {
    if (grade === 'Seleccionar' || letter === 'Seleccionar') {
      return 0;
    }

    const results = this.grades
      .filter(g => g.level === grade)
      .map(g => g.letters)
      .flat()
      .filter(l => l.character === letter);

    return results.length ? results[0].students.length : 0;
  }

  clone() {
    return new Establishment(this);
  }

  toJSON() {
    return {
      courses: this.grades.map(g => g.toJSON())
    };
  }

  get students() {
    return this.grades.map(grade =>
      grade.letters.map(letter =>
        letter.students.map(student => ({
          name: student.name,
          run: student.run,
          grade: grade.level,
          letter: letter.character
        }))
    )).flat(2);
  }
}

export default Establishment;
