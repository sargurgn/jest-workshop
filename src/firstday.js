function sum(number1, number2) {
    return number1 + number2
}

function getFullName(firstName, lastName) {
    var fullName = firstName;
    if (lastName) {
        fullName += ' '  + lastName
    }
    return fullName
}
module.exports= {sum, getFullName}