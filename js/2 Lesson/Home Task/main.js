// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


// let arr = [1,'two',true, ['a','b'], 5, 'six', 7.7, 'eight', 'nine', 'last one'];
// console.log(arr);
// for(let i = 0; i< arr.length;i++){
//     console.log(arr[i]);
// }




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={
//     title:'unique book name: chapter one',
//     pageCount: 111,
//     genre: 'fantasy',
// }
// let book2 ={
//     title:'unique book name: chapter two',
//     pageCount: 222,
//     genre: 'science fiction',
// }
// let book3 ={
//     title:'unique book name: chapter three',
//     pageCount: 333,
//     genre: 'horror',
// }




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1={
//     title:'unique book name: chapter one',
//     pageCount: 111,
//     genre: 'fantasy',
//     authors: ['Oleg', 'Kage']
// }
// let book2 ={
//     title:'unique book name: chapter two',
//     pageCount: 222,
//     genre: 'science fiction',
//     authors: ['Igor', 'Kage']
// }
// let book3 ={
//     title:'unique book name: chapter three',
//     pageCount: 333,
//     genre: 'horror',
//     authors: ['Mark', 'Kage']
// }




// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let arr=[
//     {
//         name: 'Fabian Mach',
//         username:'Pace',
//         password: 'dfghg'
//     },
//     {
//         name: 'Matheo Lang',
//         username:'Link',
//         password:'kuy'
//     },
//     {
//         name:'Michael Webern',
//         username:'Thunder Boar',
//         password:'ed5rft6yug'
//     },
//     {
//         name:'Jonathan Galishoff',
//         username:'Pause',
//         password: 'pjoilkuj'
//     },
//     {
//         name:'Johannes Brendel',
//         username:'Virus Wildeboost',
//         password: 'EDRTFYGUH'
//     },
//     {
//         name:'Tim Senefelder',
//         username:'Script',
//         password: '@$#%^U'
//     },
//     {
//         name:'Finn Wach',
//         username:'Spell',
//         password: 'S#D%$RF^T%YVGH'
//     },
//     {
//         name:'Lorenz Schuster',
//         username:'Rusty Orcannon',
//         password: '%^T&guyhuhi'
//     },
//     {
//         name:'Matthias Gruber',
//         username:'Shock Elk',
//         password: 'SD%^TFYU'
//     },
//     {
//         name:'Leo Boltzmann',
//         username:'Photon Cariboost',
//         password: 'NJBHUTGYT'
//     }
// ]
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i].password);
// }





// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// function isZero(number){
//     let resault ='';
//     if (number == 0){
//         resault = 'Вірно';
//     }
//     else{
//         resault = 'Невірно';
//     }
//     return console.log(resault);
// }
//
// isZero(1);
// isZero(0);
// isZero(-3);





// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// function timeQuater(min){
//     if (min>=0 && min <=59){
//         if(min<15){
//             return console.log('Перша четверть години');
//         }
//         else if(min>=15 && min <30){
//             return console.log('Друга четверть години');
//         }
//         else if(min>=30 && min <45){
//             return console.log('Третя четверть години');
//         }
//         else if(min >=45 && min <60){
//             return console.log('Четверта четверть години');
//         }
//     }
//     else {
//         return console.log('Це не хвилини')
//     }
// }
// timeQuater(0);
// timeQuater(15);
// timeQuater(30);
// timeQuater(45);
// timeQuater(60);





// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// function monthDecade(day){
//     if(day>=0 && day <=31){
//         if(day<=10){
//             return console.log('Перша декада');
//         }
//         else if(day<=20){
//             return console.log('Друга декада');
//         }
//         else if(day<=31){
//             return console.log('Третя декада');
//         }
//     }
//     else{
//         return console.log('це не день');
//     }
// }
//
// monthDecade(7);
// monthDecade(14);
// monthDecade(21);
// monthDecade(28);
// monthDecade(35);





// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// function dayName(day){
//     let strDayName ={
//         monday: 'Monday',
//         tuesday: 'Tuesday',
//         wednesday: 'Wednesday',
//         thursday: 'Thursday',
//         friday: 'Friday',
//         saturday: 'Saturday',
//         sunday: 'Sunday'
//     }
//     switch (day){
//         case 1:
//             console.log(strDayName.monday);
//             break;
//         case 2:
//             console.log(strDayName.tuesday);
//             break;
//         case 3:
//             console.log(strDayName.wednesday);
//             break;
//         case 4:
//             console.log(strDayName.thursday);
//             break;
//         case 5:
//             console.log(strDayName.friday);
//             break;
//         case 6:
//             console.log(strDayName.saturday);
//             break;
//         case 7:
//             console.log(strDayName.sunday);
//             break;
//         default:
//             console.log('Це не тиждень')
//     }
// }
//
// dayName(1);
// dayName(2);
// dayName(3);
// dayName(4);
// dayName(5);
// dayName(6);
// dayName(7);
// dayName('sdfgh');


// - Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.
//
//
// function maxFromTwo(){
//     a = window.prompt('Введить перше число');
//     b = window.prompt('введить друге число');
//     let res;
//     if (a===b){
//         return console.log('Числа рiвнi');
//     }
//     else if(a>b){
//         return console.log('Перше число бiльше')
//     }
//     else {
//         return  console.log('Друге число бiльше')
//     }
// }
// maxFromTwo();



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".