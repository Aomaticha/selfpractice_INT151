// 08.09.2025
//prompt 1 การใช้ .length && .push กับ Array
let value = ["aom",1,true,22]
console.log(value.length) // จะเป็นการนับสมาชิกทั้งหมดใน array มี 3 ตัว
console.log(value[0]) // ดูสมาชิกตัวแรก index เริ่มนับที่ 0 ต่างจากถ้าเราใช้ .length มันจะเริ่มนับที่ 1 ก็จะ return ตัวแรกออกมา
console.log(value[value.length-1]) // return ตัวท้ายออกมาเพราะ index เริ่มที่ 0 ทำให้ตำแหน่งสุดท้ายมีค่าต่ำกว่า length อยู่ 1 เลยต้องลบ 1 เพื่อให้ได้ index ของตัวสุดท้าย
// ใช้ .push  เพิ่มค่าท้าย object with array 
value.push({id:53,Name:'Aomati',phone:563938})
console.log(value)
value[value.length]=['cake','pepsi',53]  //ใช้แบบนี้ก็ได้เหมือนกันเพราะ .length เป็นค่าท้ายเราก็เอาไปต่อท้าย ถ้าเป็น -1 มันมีค่าอยู่เราก็ต้องเอามันออก
console.log(value)


// 09.09.2025
//prompt 1 การเขียน loop print ข้อมูลทั้งหมดใน array ใช้ทั้ง for i,for of
let my = ['home','you',true,10]
for(i = 0; i < my.length; i++){
    console.log(my[i]) /// เหมาะกับการที่เราต้องการ edit ข้อมูล
}
for(const input of my){
    console.log(input); /// เหมาะกับการอ่านข้อมูลเฉยๆและสั้น
}

//prompt 2 ต้องการให้ข้อมูลใน value ที่เป็น numder ออกมา ( ลองใช้ typeof ในการเช็คว่าข้อมูลนั้นเป็น number มั้ยถ้าเป็นให้ return ออกมา )
for (const item of value) {
    if (typeof item === "number") {
        console.log(item);
    }
}


// 11.09.2025
//prompt 1 เปลี่ยน string เป็น array แบบแยกตัวอักษรแต่ละตัว (...spread ใช้ได้กับทั้ง string และ array)
let str = "sunday happy"
const strCh=[...str]
console.log(strCh) /// ใช้กับ string จะเป็นการแยกตัวอักษร ถ้า array จะเป๋นการกระจายเข้าไปในตัวแปรที่เรากำหนด

//prompt 2 สร้างตัวแปร array ขึ้นมาและ copy มาอีกตัวนึงโดยให้เป็นตัวแปรใหม่และเพิ่มคำว่า "Love cat" เข้าไปในตัวแปรที่ copy
let cute = ["cat", "candy", "pink"];
let copy = [...cute];
copy.push("Love cat");
console.log(cute); /// จะได้เป็นค่าเดิมออกมาไม่เปลี่ยนแปลง immutable
console.log(copy); /// ได้ค่าใหม่เพราะเรา push เข้าไป



