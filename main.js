// const obj = {
//     all: {
//         a: 0,
//         b: 0,
//     },
//     calculate() {
//        this.all.result = this.all.a + this.all.b;

//     },
//     set a(param) {
//         if (typeof param !== 'number') {
//             console.log('Мы принимаем только числа');
//             return;
//         } else {
//             this.all.a = param;
//         }
//         this.calculate();
//     },
//     set b(param) {
//         this.all.b = param;
//         this.calculate();
//     },
//     get a(){
//         return 'Значение a: ' +  this.all.a;

//     },
//     get result(){
//         this.calculate();
//         return this.all.result;
//     }

// };
// sum.a = 3;
// sum.b = 13;
// sum.a = 'Hello';
// console.log(sum);
// const obj = {
   
//         x: 0,
//         by: 0,
    
//     calculate() {
//        this.sum = this.x + this.y;

//     },
//     set a(param) {
//         if (typeof param !== 'number') {
//             console.log('Мы принимаем только числа');
//             return;
//         } else {
//             this.x = param;
//         }
//         this.calculate();
//     },
//     set b(param) {
//         this.y = param;
//         this.calculate();
//     },
//     get a(){
//         return 'Значение a: ' +  this.all.x;

//     },
//     get result(){
//         this.calculate();
//         return this.sum;
//     }

// };
// obj.a = 'hello';
// obj.b = 10;
// obj.a = 3;
// console.log(obj.result);

// диструктуризация
// const obj = {
//     firstname: 'Arya',
//     surname: 'Slark',
//     age: 17,
//     set kill(victum) {
//         console.log(victum + 'dead!');
        
//     },
//     arr: ['React', 'Vue', 'Angular', 'GraphqL']
// };
// const { firstname: lady, arr: [fram1,,, fram2],  ...newObj} = obj;

// console.log('lady: ', lady);

// // kill('Night King');
// console.log(fram1);
// console.log(fram2);
// console.log('newObj', newObj);
// // obj.kill = 'Night King '

// class Class{
//     constructor(options){
//         const {a, b} = options;
//         this.a = a; 
//         this.b =b;
//         this.sum = this.a + this.b;
//     }
// }
// const obj = new Class ({a: 4, b: 3 });
// console.log(obj);

// const allLi = document.querySelectorAll('li');
// console.log('allLi: ', allLi);
// const   newLi = [...allLi];
// console.log('newLi: ', newLi);

// for (const elem of allLi) {
//     console.log(elem);
//     elem.textContent = 'Hello';
    

// }
// for( const index in allLi) {
//     console.log(newLi[index]);
    
// }
const allLi = document.querySelectorAll('li');
console.log('allLi: ', allLi);
const   newLi = [...allLi];
console.log('newLi: ', newLi);
const foo =  (elem, index, arr) =>{
    console.log('elem', elem);
    console.log('index', index);
    console.log('arr: ', arr);  
};
allLi.forEach(
    foo
    
);






