import Grade from './Grade.js';

class Establishment {
  constructor(data) {
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
