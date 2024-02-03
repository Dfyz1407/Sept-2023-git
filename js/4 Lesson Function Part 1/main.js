// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b){
//     return a*b;
// }
//
// console.log(square(2,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(r){
//     return Math.PI*r*r;
// }
//
// console.log(squareCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(r,h){
//     sCircle = Math.PI * r*r;
//     sH= Math.PI*2*r*h;
//     return 2*sCircle+sH;
// }
//
// console.log(squareCylinder(5,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrView(arr){
//     for (const element of arr){
//         console.log(element);
//     }
// }
//
// arrView([1,23,3455,'dfgsgsd','zfh',{a:123,b:'fgh'}])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textGraff(text){
//     document.write(`<div> ${text} </div>`)
// }
//
// textGraff('abcdefg');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulPlusLi(str){
//     document.write(`<div><ul>`);
//     for(let i =0; i<3;i++){
//         document.write(`<p><li>${str}</li>`)
//     }
//     document.write(`</ul></div>`);
// }
//
// ulPlusLi('adfgh');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulPlusLi(str,n){
//     document.write(`<div><ul>`);
//     for(let i =0; i<n;i++){
//         document.write(`<p><li>${str}</li>`)
//     }
//     document.write(`</ul></div>`);
// }
//
// ulPlusLi('adfgh',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrDiv(arr){
//     for(const element in arr){
//         document.write(`<div>${element}</div>`)
//     }
// }
// arrDiv({id:2, name: 'asd', age: 123})

// - створити функцію яка повертає найменьше число з масиву

// function minArr(arr){
//     let res = arr[0];
//     for(const num of arr){
//         if(res>num){
//             res = num;
//         }
//     }
//     return res;
// }
//
// console.log(minArr([1,2,3,4,5,6,-2,10]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sumArr(arr){
//     let res = 0;
//     for(const num of arr){
//         res += num;
//     }
//     return res;
// }
//
// console.log(sumArr([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swapByIndex(arr,indx1,indx2){
//     let firstNum=arr[indx1];
//     let secondNum=arr[indx2];
//     let res = arr;
//     res[indx1] = secondNum;
//     res[indx2] = firstNum;
//     return res;
// }
//
// console.log(swapByIndex([1,2,3,4,5,6,7,8,9,10],2,8));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function moneyConvertor(sumUAH,currencyValues,exchangeCurrency){

}