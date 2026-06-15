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

const fruits =["apple" , "banana" , "mango"];
const inc = fruits.map(fr=>{
  <li>{fr}</li>
}
)

const nums = [2, 4, 6];
const inc = nums.map(num=>num+1);

const numsx = [1, 2, 3];
const newx = numsx.map(n=>n*10);