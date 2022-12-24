import Student from './Student.js';

class Letter {
  constructor(data) {
    this.character = data.character;
    this.teachers = (data.teachers ?? []);
    this.students = (data.students ?? []).map(s => new Student(s));
  }

  addStudent({ name, run }) {
    const entity = new Student({ name, run });
    this.students.push(entity);
    return entity;
  }

  toJSON() {
    return {
      character: this.character,
      students: this.students.map(s => s.toJSON())
    };
  }
}

export default Letter;
