/* ---------------------- Teacher interface ------------------------- */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/* ---------------------- Director interface ------------------------- */

interface Directors extends Teacher {
  numberOfReports: number;
}

/* ---------------------- Printing teachers ------------------------- */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function teachersName(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = teachersName;
