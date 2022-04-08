const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

const student = {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
}

function avgStudent(students) {
    return students.map((student) => {
        const avrg = student.marks.reduce((acc, value) => {
            return acc += value;
        });

        return {
            name: student.name,
            avrg: +(avrg / student.marks.length).toFixed(2)
        };
    })
}


function avrgStudents(students) {
    const sudentsData = {
        sumStudentsMarks: 0,
        count: 0
    }

    students.forEach(student => {
        student.marks.forEach(mark => {
            sudentsData.sumStudentsMarks += mark;
            sudentsData.count++;
        });
    });

    return +(sudentsData.sumStudentsMarks / sudentsData.count).toFixed(2);
}

const avrgStudentReth = avgStudent(students);
console.log(avrgStudentReth);

const avrgStudentsReth = avrgStudents(students);
console.log(avrgStudentsReth)