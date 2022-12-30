let constructor = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
  };

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const phone = document.querySelector('#phone');


function Person(firstName, lastName, age, email, phone) { //new person constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phone = phone;
};

const form = document.querySelector("#signUp");
form.addEventListener('submit',function(e){
  e.preventDefault()
  console.log(form.elements);
    let person = new Person (
    form.firstName.value,
    form.lastName.value,
    form.age.value,
    form.email.value,
    form.phone.value,
    )
    console.log(person);
  }
  )