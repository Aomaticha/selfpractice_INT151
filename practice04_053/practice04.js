//26.08.2025
//prompt 1 เขียนฟังก์ชันใน JavaScript ชื่อ greet ที่รับค่าพารามิเตอร์หนึ่งตัว นั่นคือ name ซึ่งเป็นสตริง (string) ที่แทนชื่อของบุคคล
//ฟังก์ชันนี้ควรจะ: คืนค่าสตริง ที่เป็นข้อความทักทาย ข้อความทักทายควรมีรูปแบบว่า: "Hello [name]! nice to meet you" ถ้าไม่มีการป้อนชื่อมา หรือป้อนค่าที่ไม่ใช่สตริง (เช่น null, undefined, หรือตัวเลข) ให้ return "Visitors" แทน
function greet(name){
    if(typeof name !=='string' || name.trim() === '' ){
        return "Visitors"
    }else{
        return `Hello ${name}! nice to meet you`
    }
}
console.log(greet(""))
console.log(greet("Aom"))
//prompt 2 เขียนฟังก์ชันใน JavaScript ชื่อ findMax ที่รับค่าพารามิเตอร์หนึ่งตัว นั่นคือ numbers ซึ่งเป็นอาเรย์ของตัวเลข
// ฟังก์ชันนี้ควรจะ: คืนค่าตัวเลข ที่เป็นค่ามากที่สุดในอาเรย์ถ้าอาเรย์ที่ป้อนมา เป็นอาเรย์ว่างเปล่า ([]) ให้คืนค่าเป็น undefined
function findMax(numbers){
        if(numbers.length === 0 ){
            return "undifined"
        }
        return Math.max(...numbers);
    }

console.log(findMax([2,3,4,5,6,7]));



//27.08.2025
//prompt 1 สร้างออบเจกต์ (Object) แต่ละออบเจกต์จะแทนข้อมูลของนักเรียนหนึ่งคนและมีคุณสมบัติ (properties) name: ชื่อของนักเรียน (string)score: คะแนนของนักเรียน (number)
//ใช้ Array method กรองนักเรียนที่มีคะแนน score มากกว่าหรือเท่ากับ 70แปลง ข้อมูลของนักเรียนที่ผ่านการกรองแล้ว ให้กลายเป็น อาเรย์ของชื่อ ของนักเรียนเหล่านั้น
const studentsData = [
  { name: 'aom', score: 85 },
  { name: 'ing', score: 60 },
  { name: 'BB', score: 92 },
  { name: 'mac', score: 68 },
  { name: 'prim', score: 75 }
];
const honorStudents = studentsData.filter((str) => str.score >= 70).map((st) => st.name);
console.log(honorStudents);


//prompt 2 ใช้ filter() เพื่อเลือกสินค้าที่มีราคา ไม่เกิน 15000 และใช้ reduce() เพื่อหาผลรวมราคาของสินค้าทั้งหมด
const products = [
  { id: 1, name: "Laptop", price: 25000 },
  { id: 2, name: "Phone", price: 15000 },
  { id: 3, name: "Tablet", price: 12000 },
  { id: 4, name: "Monitor", price: 8000 }
];
 
const price = products.filter((p) => p.price < 15000);
console.log(price);
const totals = products.reduce((sum,products) => sum + products.price,0);
console.log(totals);

//prompt 3 คำนวณ total ทั้งหมดของ productList ต่อไปนี้โดยใช้และนำไปลบ cost (ต้นทุน) ว่าเหลือเงินกี่บาท
const cost = 300000;
const productList = [
  { name: 'หูฟัง', price: 1500, amount: 5},
  { name: 'เมาส์', price: 800,amount: 8 },
  { name: 'คีย์บอร์ด', price: 2500,amount: 20 },
  { name: 'จอภาพ', price: 4000,amount: 10 }
];
const total = (price,amount) => (price * amount);
const totalSum = cost - productList.reduce((sum,item) => sum + total(item.price,item.amount),0);
console.log(totalSum);



//28.08.2025
//prompt 1 เขียนโค้ดที่ใช้ find() เพื่อหาคนที่มี id = 2 และใช้ filter() และ includes() เพื่อหาคนที่ชอบ swimming
// และ .map() ชื่อคนที่ชอบ swimming ออกมา
const users = [
  { id: 1, name: "Alice", hobbies: ["reading", "swimming"] },
  { id: 2, name: "Bob", hobbies: ["gaming", "cooking"] },
  { id: 3, name: "Charlie", hobbies: ["swimming", "cycling"] }
];
 
const find = users.find((f) => f.id === 2);
console.log(find); // หา id:2
 
const like = users.filter((l) => l.hobbies.includes("swimming"))
const swimName = like.map((u) => u.name);
console.log(swimName);// หาคนที่งานชอบ swimming



//30.08.2025
//prompt 1  ใช้ forEach() ในการรวมผลคะแนนทั้งหมด
const scores = [80, 90, 70, 60];
let totalScore = 0;
 scores.forEach(num => {totalScore += num;});
console.log(totalScore);



