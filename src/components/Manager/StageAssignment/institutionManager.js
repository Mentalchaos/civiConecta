class InstitutionManager {
  constructor(institution) {
    this.institution = institution ?? [];
  }

  saveStudent(data) {
    if (!this._hasGrade(data.grade)) {
      this._createGrade(data.grade);
    }

    if (!this._hasLetter(data.grade, data.letter)) {
      this._createLetter(data.grade, data.letter);
    }

    this._addStudent({
      grade: data.grade,
      letter: data.letter,
      name: data.name,
      run: data.run
    });
  }

  _hasGrade(grade) {
    return this.institution
      .filter(g => g.grade === grade)
      .length;
  }

  _hasLetter(grade, letter) {
    return this.institution
      .find(g => g.grade === grade).letters
      .filter(l => l.character === letter).length;
  }

  _createGrade(grade) {
    this.institution.push({
      grade: grade,
      letters: []
    });
  }

  _createLetter(grade, letter) {
    const _grade = this.institution.find(g => g.grade === grade);

    _grade.letters.push({
      character: letter,
      students: [],
      teachers: []
    });
  }

  _addStudent({ grade, letter, name, run }) {
    const _grade = this.institution.find(g => g.grade === grade);
    const section = _grade.letters.find(l => l.character === letter);
    section.students.push({ name, run, surveys: [] });
  }
}

export default InstitutionManager;
