class Student {
  constructor(data) {
    this.name = data.name;
    this.run = data.run;
    this.surveys = data.surveys ?? [];
  }

  toJSON() {
    return {
      name: this.name,
      run: this.run
    }
  }
}

export default Student;
