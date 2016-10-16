var Student = (function () {
    function Student(firstName, nickName, lastName) {
        this.firstName = firstName;
        this.nickName = nickName;
        this.lastName = lastName;
        this.fullName = firstName + " " + nickName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + "  " + person.lastName;
}
var user = new Student("Pramuk", "Pik", "Thumsiraruk");
document.body.innerHTML = greeter(user);
