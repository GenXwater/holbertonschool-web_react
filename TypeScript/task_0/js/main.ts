interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student= {
  firstName: "Alice",
  lastName: "Dupont",
  age: 22,
  location: "Paris"
};

const student2: Student= {
  firstName: "Jean",
  lastName: "Martin",
  age: 24,
  location: "Lyon"
};

// array :
const studentList: Student[] = [student1, student2];
