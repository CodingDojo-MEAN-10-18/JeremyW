let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

function showStudents(array){
    const arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++){  // need to rename x variable to something more verbose
        // print Name: name, Cohort: Month
        const student = array[index]
        console.log(`Name: ${student.name} Cohort: ${student.cohort}`);
    }  
    return array; // will need this is I want to return some value
}
// showStudents(students);

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

function showEmployees1(array) {
    for (const type in users) {
        let employeeCount = 1;
        console.log(type.toUpperCase());
        for(let person in users[type]){
            // let name = users[type][person].first_name.toUpperCase() + ', ' + users[type][person].last_name.toUpperCase();
            const fname = users[type][person].first_name;
            const lname = users[type][person].last_name;
            const name = (lname + ', ' + fname).toUpperCase();
            const length = fname.length + lname.length;
            console.log((`${employeeCount} - ${name} - ${length}`));
            employeeCount++
        }
    }
    // return type;
}
showEmployees1(users);

function showEmployees2(array){
    const arrayLength = array.length;
    let employeeCount = 0;
    for(let index = 0; index < arrayLength; i++){
        // loop through employees
        if(array[index] == 'employees'){ // array value is equal to employees 
            // define employee variable
            const employee = array[index];
            // increment the employee count
            employeeCount++
            console.log(`EMPLOYEES\n`);
            console.log(toUpperCase(`${employeeCount} - ${employees.last_name}, ${employees.first_name}`));
        } else {  // else array values are equal to managers 
            // define manager variable
            const manager = array[index];
            // increment the employee count
            employeeCount++
            console.log(`MANAGERS\n`);
            console.log(toUpperCase(`${employeeCount} -  ${managers.last_name}, ${managers.first_name}`));
        }
    }
    return array;
}