//19.08.2025
//prompt 1 เขียน function รับค่า parametor มา 2 ตัวต้องเป็นตัวเลขและค่าต้องไม่ติดลบให้แสดงเกรดทั้ง 2 ค่าแล้วหาค่าเฉลี่ยของเกรดนั้นถ้าเกรดเฉลี่ยเกิน 3.5 ให้ return Very Good นอกนั้นให้ return Normal
function Getgrade(grade1,grade2){
    if (typeof grade1 !== 'number' || typeof grade2 !== 'number' || grade1 < 0 || grade2 < 0) {
    return 'not found';
 }    
    if((grade1 + grade2) / 2 > 3.5){
        return 'Very Good'
}
    if((grade1 + grade2) / 2 < 3.5){
        return 'Normal'
 }
}
console.log(Getgrade(4,4));
console.log(Getgrade(2.5,3.5));
console.log(Getgrade(-1.5,3));


//20.08.2025
//prompt 1 ( โจทย์ในห้องที่ทำไม่ได้ )
//Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase and values representing the frequency of occurrences of each word (ignore case) in the sentence.
//If the input string is null or undefined, return undefined.
function getFreqOfWords(sentence) {
  if (typeof sentence === null || sentence === undefined) {
    return undefined;
  }

  let words = sentence.toLowerCase().split(" ");
  let freq = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}
console.log(getFreqOfWords());
console.log(getFreqOfWords("aom happy aom 053"));
//prompt 2 เขียน function countPositive(numbers) ที่รับค่าเป็น array ของตัวเลขนับจำนวนตัวเลขที่ มากกว่า 0 
// คืนค่าเป็นตัวเลขทั้งหมดว่ามีกี่ตัวที่มากกว่า 0
function countPositive(numbers){
  let count = 0;
  for(let nums of numbers){
    if(nums > 0){
      count++
    }
  }
  return count;
}
console.log(countPositive([12,34,56,-1,-3]))


//21.08.2025
// prompt 1 เขียน function sumArray ที่รับ array ของตัวเลข แล้ว return ผลรวมทั้งหมด
function sumArray(array){
  if(!Array.isArray(array)){
    return 'is not array'
  }
  let sum = 0;
  for(i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumArray([12,'Aom',23,333,435,'aticha']));


//22.08.2025
//prompt 1 เขียนฟังก์ชันชื่อ containsNumber ที่รับ array และ number แล้ว return"Found" ถ้ามี number ใน array "Not found" ถ้าไม่มี number อยู่ใน array นั้น
function containsNumber(array,number){
  if(!Array.isArray(array)){
    return "is not array"
  }
  for(let i = 0; i < array.length; i++){
    if( number === array[i]){
      return "Found"
    }
  }
  return "Not Found"
}
console.log(containsNumber([1,2,3,4],2));
console.log(containsNumber([22,7,8,12],0));


//24.08.2025
//prompt 1 สร้าง class Person   Constructor รับ name  เก็บใน this.name Method getName() → return this.name
// class Student (extends Person) Constructor รับ name และ studentId → ใช้ super(name) เก็บ name เก็บ studentId ใน this.studentId
// Method introduce() → return "Hi, my name is <name> and my student ID is <studentId>"

class Person {
  constructor(name){
    this.name = name;
  }
  getName(){return this.name;}
}
class Student extends Person{
  constructor(name,studentId){
    super(name)
    this.studentId = studentId;
  }
  introduce(){
    return `jv,kdHi, my name is ${this.name} and my student ID is ${this.studentId}`;
  }
}
let s1 = new Student("Aom", "67130500053");
let s2 = new Student("Mac","67130500000")
console.log(s1.introduce());
console.log(s2.introduce());
console.log(s1.getName());

//prompt 2 สร้าง class Animal ที่มี property: name และ method: makeSound() สร้าง class Dog ที่สืบทอดจาก Animalเพิ่ม property: breed
//เพิ่ม method: bark() สร้าง class Cat ที่สืบทอดจาก Animal เพิ่ม property: color เพิ่ม method: meow()

class Animal {
  constructor(name){
    this.name = name;
  }
  makeSound(){return `${this.name} makes a sound`; }
}
class Dog extends Animal{
  constructor(name,breed){
    super(name);
    this.breed = breed;
  }
  bark(){return `${this.name} bark`; }
}

class Cat extends Animal{
  constructor(name,color){
    super(name);
    this.color = color;
  }
  meow(){return `${this.name} meow`; }
}
let dog1 = new Dog("Buddy", "Labrador");
let cat1 = new Cat("Kitty", "White");

console.log(dog1.makeSound());
console.log(dog1.bark());
console.log(cat1.makeSound());
console.log(cat1.meow());

    


