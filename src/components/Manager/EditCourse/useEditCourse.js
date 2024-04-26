import { useEffect, useState, createContext } from 'react';
import service from './editCourse.service';

const useEditCourse = (courseId) => {
  const [course, setCourse] = useState({});
  const [students, setStudents] = useState([]);
  const [assignedTeacher, setAssignedTeacher] = useState({});

  useEffect(() => {
    async function fn() {
      const [studentsResponse, courseResponse, teacherResponse] = await Promise.all([
        service.fetchStudentsByCourse(courseId),
        service.fetchCourse(courseId),
        service.fetchAssignedTeacher(courseId)
      ]);

      setStudents(studentsResponse.students);
      setCourse(courseResponse.course);

      if (teacherResponse.ok) {
        setAssignedTeacher(teacherResponse.teacher);
      }
    }

    fn();
  }, [courseId])

  return {
    states: {
      students,
      course,
      assignedTeacher
    },
    actions: {
      async addStudent(name, lastname, run) {
        const formattedName = name.trim();
        const formattedRun = run.trim();
        const formattedLastname = lastname.trim();

        const coincidences = students
          .filter(s => s.name === formattedName)
          .filter(s => s.run === formattedRun)
          .filter(s => s.lastname === formattedLastname);

        if (coincidences.length) {
          return Promise.reject('Ya existe este estudiante');
        }

        const response = await service.addStudent(courseId, formattedName, formattedLastname, formattedRun);
        const newStudents = [...students, response.student];
        setStudents(newStudents);

        return Promise.resolve();
      },
      async assignTeacher(name, email) {
        const formattedName = name.trim();
        const formattedEmail = email.trim();
        const teacher = await service.assignTeacher(
          courseId, formattedName, formattedEmail
        );

        setAssignedTeacher(teacher);
      },
      async removeStudentFromCourse(studentId){
        await service.removeStudent(studentId);
        const newStudents = students.filter(data => data.id !== studentId);
        setStudents(newStudents);
      },
      async editStudentFromCourse(studentId, name, lastname, run){
        await service.editStudent(studentId, name, lastname, run);
      }
    }
  };
};

const EditCourseContext = createContext({});

export { useEditCourse, EditCourseContext };
