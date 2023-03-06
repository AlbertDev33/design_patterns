function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Albert',
  lastName: 'Rocha',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person = new Person('PrimeiroNome', 'Sobrenome', 30);
console.log(person);
console.log(person.fullName());
