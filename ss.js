function multiply(a, b) {
  return a * b;
}

const multiply =(a,b)=>  a*b;

const person = {
  name: "Ram",
  age: 25
};

console.log(person.name);
console.log(person.age);

//using destructing

const person = {
    name: "Ram",
    age: 25
};
const { name , age} = person;