/*
Welcome to HIT-CS22115 移动互联网应用开发实践
*/
//-----------------------------------------------------------
/*
let name = 'Alice'
let age = 18
let hello = `My name is ${name},I am ${age + 1} years old`
console.log(hello)
*/
//-----------------------------------------------------------
/*
var a = 5
if (a > 0){
    var 棍斤拷 = 7
}
console.log(棍斤拷)
*/
//-----------------------------------------------------------
/*
let [a,b]=[5,7];
[a,b]=[b,a];
console.log(a);
console.log(b);
*/
//-----------------------------------------------------------
//console.log(~4)
//-----------------------------------------------------------
/*
let cname='Harbin Institute of Technology'
cname.replace('o','p')
console.log(cname.replace('o','p'));
*/
//-----------------------------------------------------------
/*
let ar1=[1,2,3,4,5,6,7,8,9,10];let sum=0;
let ar2=new Array();
//for(let i=0;i<ar1.length;i++){
//for(let i in ar1){
//    sum+=ar1[i];
//}
//console.log(sum);
for(let value of ar1)
    console.log(value);
*/
//-----------------------------------------------------------
/*
let student = {
    id: "101",
    name: "Alice",
    age: 18
}
//console.log(student['id']);
//console.log(student.name);
for(let key in student){
    console.log(key);
    console.log(student[key]);
}
*/
//-----------------------------------------------------------
/*
function add(a,b) {
    return a+b;    
}
console.log(add(1,2));
*/
//-----------------------------------------------------------
//闭包与内嵌函数
//所以js的function与C++的class有什么区别（？
/*
function counter() {
    let count=0;
    function addOne() {
        count++;
        return count;
    }
    return addOne;
}
let r=new counter;
//let r=counter();
console.log(r());
console.log(r());
console.log(r());
console.log(r());
*/
//-----------------------------------------------------------
