interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;  // Permet d'ajouter n'importe quelle propriété supplémentaire
}

// Exemple d'utilisation avec une propriété supplémentaire
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  yearsOfExperience: 5,
  contract: false,  // Propriété supplémentaire
};

console.log(teacher3);