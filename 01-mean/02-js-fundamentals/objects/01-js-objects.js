let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

function showStudents1(array){
    const array_length = array.length;
    for (let index = 0; index < array_length; index++){  // need to rename x variable to something more verbose
        // define student as current array value through each loop
        const student = array[index]
        // print Name: name, Cohort: Month
        console.log(`Name: ${student.name} Cohort: ${student.cohort}`);
    }  
    return array; // will need this is I want to return some value
}
// showStudents1(students);

function showStudents2(array){
    let count = 1;
    for(const student of students){
        console.log(`${count++} - Name: ${student.name}, Cohort: ${student.cohort}`)
    }
    return array; // will need this is I want to return some value
}
// showStudents2(students);

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
        console.log(type.toUpperCase());  // Will print EMPLOYEES and MANAGERS for each respective loop
        for(let person in users[type]){   // now loop through the individual names in each array index or users[type][person]
            // let name = users[type][person].first_name.toUpperCase() + ', ' + users[type][person].last_name.toUpperCase();
            const fname = users[type][person].first_name;
            const lname = users[type][person].last_name;
            const name = (lname + ', ' + fname).toUpperCase();
            const length = fname.length + lname.length;
            console.log(`${employeeCount} - ${name} - ${length}`);
            employeeCount++
        }
    }
    // return type;
}
// showEmployees1(users);

function showEmployees2(array){
    for(const type in users){ // loop through employees
        let employeeCount = 1;
        console.log(type.toUpperCase());    // Will print EMPLOYEES and MANAGERS for each respective loop
        for (let person in users[type]) {   // now loop through the individual names in each array index or users[type][person]
            fname = users[type][person].first_name;
            lname = users[type][person].last_name;
            name = (lname + ', ' + fname).toUpperCase();
            name_length = (fname + lname).length;
            console.log(`${employeeCount} - ${name} - ${name_length}`);
            employeeCount++;
        }
    }
    // return array;
}
showEmployees2(users);