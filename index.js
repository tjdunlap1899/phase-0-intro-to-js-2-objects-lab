// Write your solution in this file!
const employee = {
    name: "Sam", 
    streetAddress: "2001 Jupiter Street",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    };

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}

