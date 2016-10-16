class Student {
  fullName: string;
  constructor(public firstName, public nickName, public lastName) {
    this.fullName = firstName + " " + nickName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + "  " + person.lastName;
}

var user = new Student("Pramuk", "Pik", "Thumsiraruk");

document.body.innerHTML = greeter(user);
