// Write your solution in this file!
const employee = {
    name: "Frank Smith",
    streetAddress: "800 Amazon Drive"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value})

}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value})
}
function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign(employee)
    delete newObject[key]
    return newObject
}
