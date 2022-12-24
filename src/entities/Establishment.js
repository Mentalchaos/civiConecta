import Grade from './Grade.js';

class Establishment {
  constructor(data) {
    this.number = data.number;
    this.name = data.name;
    this.active = data.active;
    this.grades = (data.courses || data.grades).map(c => new Grade(c));
  }

  addStudent({ name, run, grade, letter }) {
    let entity = this.grades.find(g => g.level === grade);

    if (entity) {
      entity.addStudent({ letter, name, run });
      return;
    }

    entity = Grade.fromJSON({ name, run, grade, letter });
    this.grades.push(entity);
  }

  clone() {
    return new Establishment(this);
  }

  toJSON() {
    return {
      courses: this.grades.map(g => g.toJSON())
    };
  }
}

export default Establishment;
