import Letter from './Letter.js';

class Grade {
  constructor(data) {
    this.level = data.level;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.letters = data.letters.map(l => new Letter(l));
  }

  static fromJSON({ name, run, grade, letter }) {
    const entity = new Grade({ level: grade, letters: [] });
    entity.addStudent({ letter, name, run });

    return entity;
  }

  addStudent({ letter, name, run }) {
    let entity = this.letters.find(l => l.character === letter);

    if (entity) {
      entity.addStudent({ name, run });
      return;
    }

    entity = Letter.fromJSON({ letter, name, run });
    this.letters.push(entity);
  }

  toJSON() {
    return {
      grade: this.level,
      letters: this.letters.map(l => l.toJSON())
    };
  }
}

export default Grade;
