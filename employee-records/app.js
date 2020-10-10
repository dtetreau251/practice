function Employee(name, jobTitle, salary, workStatus = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.workStatus = workStatus;
}

var employees = []
for (var i = 0; i < 1; i++) {
    var newEmployee = new Employee("David", "Student", "$0")
    var printEmployeeForm = console.log(newEmployee)
    employees.push(newEmployee)
    
    var nextEmployee = new Employee("Mike", "Instructor", "$150k", "Contract")
    var printEmployeeForm = console.log(nextEmployee)
    employees.push(nextEmployee)
    
    var lastEmployee = new Employee("Susan", "Dean", "$200k")
    var printEmployeeForm = console.log(lastEmployee)
    employees.push(lastEmployee)
}

