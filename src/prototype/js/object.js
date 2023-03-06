const personPrototype = {
  firstName: 'Albert',
  lastName: 'Rocha',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'ShadowName';
console.log(anotherPerson);
console.log(anotherPerson.fullName());
