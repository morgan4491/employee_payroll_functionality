// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let firstName = '';
let lastName = '';
let salary;
let addAnotherEmployee = true;
let employeesArray = [];

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  employeesArray = [];
  const notANumber = ['firstName:"John"', 'lastName:"Smith"', 'salary: 12345'];

  while (addAnotherEmployee) {
    firstName = prompt('Enter first name');
    lastName = prompt('Enter last name');
    let salary;

    while (true) {
      salary = prompt('Enter salary');
      if (!isNaN(salary)) {
        salary = parseFloat(salary);
        break;
      }
      else {
        return alert(notANumber);
      }
    };

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    addAnotherEmployee = confirm('Would you like to add another employee?');
  }

  return employeesArray;
};

// Display the average salary

let totalSalary;
let numberOfEmployees;
let averageSalary;

const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  totalSalary = 0;
  numberOfEmployees = employeesArray.length;
  for (let index = 0; index < numberOfEmployees; index++) {
    totalSalary += employeesArray[index].salary;
  }

  let averageSalary = totalSalary / numberOfEmployees;

  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary}.`);

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
