// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// let firstName = '';
// let lastName = '';
// let salary;
const employeesArray = [];

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  let firstName;
  let lastName;
  let salary;
  let addAnotherEmployee = true;
  // employeesArray = [];
  

  while (addAnotherEmployee) {

    firstName = prompt('Enter first name');
    lastName = prompt('Enter last name');

    let validSalary = false;
    while (!validSalary) {    // Using !validSalary here makes the while loop 'true'

      const notANumber = ['firstName: "John", lastName: "Smith", salary: 12345'];
      salary = prompt('Enter salary');
      if (!isNaN(salary)) {
        salary = parseFloat(salary);
        validSalary = true;   // setting validSalary = true here ends this inner 'if' conditional loop (does not need to continue onto the 'else' statement)
      }
      else {
        alert(notANumber);
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

// let totalSalary;
// let numberOfEmployees;
// let averageSalary;

const displayAverageSalary = function (employeesArray) {  // 'employeesArray' is a new parameter that holds the value of the const collectEmployees, which is equal to the const employeesArray (defined on line 8)
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  numberOfEmployees = employeesArray.length;
  // for (let index = 0; index < numberOfEmployees; index++) {
  //   totalSalary += employeesArray[index].salary;
  // }

  for (let employee of employeesArray) {  // here we define the the for-of loop. In this case, we are asking the newly defined variable 'employee' to loop over the 'employeesArray' (array full of objects)
    totalSalary += employee.salary;       // More specifically, we are now asking the loop to create a new variable 'totalSalary' and set it equal to all of the salaries within the 'employee' array
  }

  let averageSalary = totalSalary / numberOfEmployees;

  console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary}.`);

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  const randomNumber = Math.random();
  const rangeNum = randomNumber * employeesArray.length;
  const index = Math.floor(rangeNum);

  console.log(employeesArray[index]);
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
