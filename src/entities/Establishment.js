/*
    {
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
                  "name": "eaea vera",
                  "run": "17.857.233-4",
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
    },
*/

class Letter {
  constructor() {

  }
}

class Student {
  constructor() {

  }
}

class Teacher {

}


class Grade {
  constructor(data) {
    this.level = data.level;
  }
}

class Establishment {
  constructor(data) {
    this.number = data.number;
    this.name = data.name;
    this.active = data.active;
    this.grades = this._createGrades(data.courses);
  }

  _createGrades(courseList) {
    return courseList.map(c => new Grade(c));
  }

  toJSON() {
    return {
      number: this.number,
      grades: this.grades.map(g => g.toJSON())
    };
  }
}

export default Establishment;
