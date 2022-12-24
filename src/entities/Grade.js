import Letter from './Letter.js';

class Grade {
  constructor(data) {
    this.level = data.level;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.letters = (data.letters ?? []).map(l => new Letter(l));
  }

  addLetter(letter) {
    let entity = this.letters.find(l => l.character === letter);

    if (entity) {
      return entity;
    }

    entity = new Letter({ character: letter });
    this.letters.push(entity);
    return entity;
  }

  toJSON() {
    return {
      grade: this.level,
      letters: this.letters.map(l => l.toJSON())
    };
  }
}

export default Grade;
