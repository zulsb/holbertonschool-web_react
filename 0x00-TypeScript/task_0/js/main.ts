interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Luz',
  lastName: 'Sanchez',
  age: 18,
  location: 'Colombia'
};

const studentTwo: Student = {
  firstName: 'Esmeralda',
  lastName: 'Martinez',
  age: 20,
  location: 'Suecia'
};

const studentsList: Array<Student> = [
  studentOne,
  studentTwo
];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trH: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';

table.append(thead);
table.append(tbody);
thead.append(trH);
trH.append(th1);
trH.append(th2);

studentsList.forEach((s) => {
  const row: HTMLTableRowElement = table.insertRow();
  tbody.append(row);
  const cOne: HTMLTableCellElement = row.insertCell();
  const txt: Text = document.createTextNode(s.firstName);
  cOne.appendChild(txt);
  const cTwo: HTMLTableCellElement = row.insertCell();
  const txt2: Text = document.createTextNode(s.location);
  cTwo.appendChild(txt2);
})
document.body.appendChild(table)
