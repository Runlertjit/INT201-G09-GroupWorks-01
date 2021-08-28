function StringWay (num){
    const text = 'Hello World';
    let Vowals = /[aeiou]/gi; // regulation expression 
    //g ย่อมาจาก global คือ ต้องการจับคู่ String ทุกตัวที่มีค่าที่เราต้องการหา 
    //i ย่อมาจาก ignore คือ ไม่สนว่า String ที่เราต้องการหาจะเป็นตัว LowerCase หรือ UpperCase
    if (num == 1){
      console.log(text.split('').reverse().join('')); 
   //***split ใช้สำหรับแยกแยกข้อความออกเป็น Array โดย  split('') 
   //จะแยกข้อความทีละตัวอักษร ตัวอย่างเช่น  ['H', 'e', 'l', 'l', 'o',…]
   //***reverse นำข้อความใน Array มาสลับกัน Function นี้จะสามารถใช้งานได้ก็ต่อเมื่อ   ข้อความอยู่ในรูปแบบของ Array
   //***join นำข้อความใน Array มาต่อกันให้อยู่ในรูปของ String แล้วนำค่าออกมาแสดงผล
  
    }else if(num == 2){
      console.log(text.replace(Vowals,'*')); 
  //***replace() จะเป็นฟังก์ชันในการค้นหาคำที่เราต้องการและแทนที่คำลงไป
  
    }else if(num == 3){
      console.log(text.match(Vowals).length);
  //***match() เป็นฟังก์ชันที่ใช้สำหรับจับคู่หรือสำหรับเปรียบเทียบ โดยจะ Return ออกมาเป็น String นั้นๆ เช่น  'Hello' ก็จะ  return  'e' ออกมา
        }
      }
  