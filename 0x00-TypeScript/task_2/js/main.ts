/************************* Teacher interface *****************************/
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/************************* Director interface ****************************/
interface Directors extends Teacher {
  numberOfReports: number;
}

/************************* Printing teachers *****************************/
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function teachersName(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = teachersName;

/************************** Student class ********************************/
export interface sClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements sClass {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
