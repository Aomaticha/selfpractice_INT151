//12.09.2025
//prompt 1 เขียน loop นับสระตัว "a" ว่ามีทั้งหมดที่ตัวใน string ที่กำหนด
let Str = "Happy birthday my rabbit";
let Choose = "a";
let Count = 0;

for(let i = 0; i <= Str.length; i++){
    if(Choose.includes(Str[i])){
        Count++;
    }
}
console.log(Count);


//13.09.2025
//prompt 1  เปลี่ยน key ใน object เป็นตัวพิมพ์ใหญ่
const User = {name:'kitty',age:20,myfav:'doll'}
let newObj = {};
for(let [key,value] of Object.entries(User)){
    newObj[key.toUpperCase()] = value;
}
console.log(newObj);

//prompt 2 (ข้อบังคับ) shallow Equality
/* code example
function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false; 
    }
  }
  return true;
}
 let book1 = {
 isbn: 123456789,
 title: "JavaScript",
 }
 let book2 = {
 isbn: 123456789,
 title:"JavaScript",
 }
console.log(shallowEquality(book1,book2));
*/
// code 
function shallowEquality(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => obj1[key] === obj2[key]);
}

 let book1 = {
 isbn: 123456789,
 title: "JavaScript",
 }
 let book2 = {
 isbn: 123456789,
 title:"JavaScript",
 }

console.log(shallowEquality(book1, book2)); 


//15.09.2025  
//prompt 1 ให้เช็คว่า students_id มีเลข 2 อยู่ในชื่อใครมั้ยถ้ามีให้ return 'YES' ถ้าไม่มีให้ return 'NO'
const students_id = {Aom:22288, Ing:34362, BB:45660}
const studentNames = Object.keys(students_id);
for(let name of studentNames ){
    let result = students_id[name].toString();
    if (result.includes('2')){
        console.log('Yes')
    }else {
        console.log('NO')
    }
}

//16.09.2025
//prompt 1 คำนวณเกรดใน object โดยใช้ Object.key() ถ้าคะแนนมากกว่าหรือเท่ากับ 85 ให้ return Grade A ถ้าคะแนนมากกว่าหรือเท่ากับ 80 ให้ return Grade B
//ถ้าคะแนน มากกว่าหรือเท่ากับ 75 ให้ returun Grade C นอกเหนือจากนั้น return Grade D 
const students_score = {
  Aom: { math: 90, eng: 82 },
  Ing: { math: 77, eng: 85 },
  BB: { math: 88, eng: 91 },
  Grace: { math: 72, eng: 79 }
};
const studentname = Object.keys(students_score); 
for (let names of studentname){
    let score = students_score[names].eng ;
    if(score >= 85){
        console.log('Grade A')
    }else if(score >= 80){
        console.log('Grade B')
    }else if(score >= 75){
        console.log('Grade C')
    }else{
        console.log('Grade D')
    }
}

//17.09.2025
//prompt 1 คำนวณองศาของแต่ละวันใน object โดยใช้ Object.key() และให้เอาแต่ละวันมาบวกกันและถ้าองศามากกว่าหรือเท่ากับ 55 ให้ return So hot ถ้าองศามากกว่าหรือเท่ากับ 50 ให้ return Hot 
// ถ้าองศามากกว่าหรือเท่ากับ 45 ให้ return Normal และถ้านอกเหลือจากนั้นให้ return cool
const Weathertoday = {
  mondey: { moning: 20, dinner:16 },
  wednesday: {moning: 30, dinner:20 },
  friday: { moning: 15, dinner:30 },
  sunday: { moning: 30, dinner:25 }
};
const today = Object.keys(Weathertoday); 
for (let weather of today){
    let degree = Weathertoday[weather].moning + Weathertoday[weather].dinner ;
    if(degree >= 55){
        console.log('So hot')
    }else if(degree >= 50){
        console.log('Hot')
    }else if(degree >= 45){
        console.log('Normal')
    }else{
        console.log('Cool')
    }
}