const mergeNewStateIntoPreviousState = (previous, current) => {
  const courses = previous.courses;

  current.forEach(course => {
    const _course = courses.find(c => c.grade === course.grade);

    if (!_course) {
      courses.push(course);
      return;
    }

    course.letters.forEach(letter => {
      const _letter = _course.letters.find(x => x.character === letter.character);

      if (!_letter) {
        _course.letters.push(letter);
        return;
      }

      letter.students.forEach(student => {
        const _student = _letter.students.find(x => x.run === student.run);

        if (!_student) {
          _letter.students.push(student);
        }
      });
    });
  });

  return {
    name: previous.name,
    active: previous.active,
    createdAt: previous.createdAt,
    updatedAt: previous.updatedAt,
    number: previous.number,
    courses
  };
};

export default mergeNewStateIntoPreviousState;
