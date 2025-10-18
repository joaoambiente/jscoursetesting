const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: "JS" },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: "Python"},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "Java"},
      //... More employee records can be added here
    ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} — ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} — ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById() {
    const input = prompt("Enter the employee ID:");
    if (!input) {
      alert("You must enter an ID.");
      return;
    }
  
    // Convert safely to number
    const employeeId = Number.parseInt(input, 10);
    if (Number.isNaN(employeeId)) {
      alert("Invalid ID. Please enter a number.");
      return;
    }
  
    // Find the employee
    const foundEmployee = employees.find(e => e.id === employeeId);
    const output = document.getElementById('employeesDetails');
    output.textContent = ""; // clear safely
  
    if (foundEmployee) {
      const p = document.createElement("p");
      p.textContent = `${foundEmployee.id}: ${foundEmployee.name} — ${foundEmployee.department} — $${foundEmployee.salary} — ${foundEmployee.specialization}`;
      output.appendChild(p);
    } else {
      output.textContent = "No employee has been found with this ID.";
    }
  }
  
  function findEmployeeBySpecialization() {
    const input = prompt("Enter the employee specialization (programming language):");
    if (!input) {
      alert("You must enter a specialization.");
      return;
    }
  
    // Normalize input safely (case-insensitive, trimmed)
    const specialization = input.trim().toLowerCase();
  
    // Find all employees whose department matches
    const matchedEmployees = employees.filter(
      e => e.specialization.toLowerCase() === specialization
    );
  
    const output = document.getElementById("employeesDetails");
    output.textContent = ""; // clear safely
  
    if (matchedEmployees.length > 0) {
      const ul = document.createElement("ul");
      for (const emp of matchedEmployees) {
        const li = document.createElement("li");
        li.textContent = `${emp.id}: ${emp.name} — ${emp.department} — $${emp.salary} — ${emp.specialization}`;
        ul.appendChild(li);
      }
      output.appendChild(ul);
    } else {
      output.textContent = "No employees found with that specialization.";
    }
  }
  
