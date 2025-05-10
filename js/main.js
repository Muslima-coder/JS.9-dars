// //Darsdagi Amaliyot

// let sanaYil = new Date
// console.log(`${sanaYil.getFullYear()}-${String(sanaYil.getMonth()).padStart(2, 0)}-${String(sanaYil.getDate()).padStart(2, 0)}`)

// (function nimadir (){
//     console.log("salom")
// }
// )


//Uy ishi
//1-vazifa
//1-misol
// let sonlar = [];
// let son = 0;
// let maxSon = 5;
// function sonlarFn (son, maxSon){
//     if(son === maxSon){
//         return
//     }
//     let sonKiriting = Number(prompt(`${son + 1} -sonni kiriting`))
//     sonlar.push(sonKiriting)
//     sonlarFn(son + 1, maxSon)
// }
// sonlarFn(son, maxSon)
// console.log("Kiritilgan sonlar", sonlar)


//2-misol
// const arr1 = [5, 6, true, null, 8]
// const arr2 = [0, 2, 5, false, 6]
// const arrIkkalasi = arr1.concat(arr2)

// let yigindi = 0
// for(let i = 0; i < arrIkkalasi.length; i++){
//     if (typeof arrIkkalasi[i] === 'number') {
//         yigindi += arrIkkalasi[i]
//     }
// }
// console.log(arrIkkalasi)
// console.log("Array sonlari yig'indisi:" ,yigindi)


//3-misol
// let sonlar = [87, 100, 54, 88, 57, 65, 43]
// let engKichikSon = Math.min(... sonlar)
// let index = sonlar.indexOf(engKichikSon)
// console.log("Mavjud sonlar:", sonlar)
// console.log("Eng kichik son:", engKichikSon )
// console.log("Eng kichik son indexi:", index)


//5-misol
// let arr1 = [5, 4, 3, 6, 3, 7, 1]
// let arr2 =  [22, 1, 42, 34, 55, 67, 11, 32]
// let ikkalaArray = arr1.concat(arr2)

// ikkalaArray.sort(function(a, b ){
//     return a - b
// })

// console.log(ikkalaArray)


//6-misol
// let carsArr = [
// {
//     name:"Lacetti",
//     price: 9000
// },
// {
//     name:"Damas",
//     price: 7000
// },
// {
//     name:"Cobalt",
//     price: 12500
// },
// {
//     name:"Gentra",
//     price: 14000
// },
// {
//     name:"Onix",
//     price: 15000
// }
// ]

// carsArr.sort(function (a, b){
//     return a.price - b.price;
// })
// console.log(carsArr)

//7-misol
// let arr = ["Salom", "Mushukcha", " Pahmoqcha", "Rahmat"]
// for( let i = 0; i < arr.length; i++ ){
//     if (i === 1 || i === 2) {
//         console.log(arr[i]);}
// }

//8-misol
// let soz = prompt("Ixtiyoriy so'z/son kiriting");

// function teskari(soz) {
//     return soz.split('').reverse().join('');
// }

// let natija = teskari(soz);
// console.log(natija);
// alert(natija);


//Vazifa 2
//1-misol
// let kiritilganSize = prompt("Size ni kiriting")
// let natija = []
// let sozObject = [
//     { 
//      id: 1,
//      name: "Lobar",
//      age: 15,
//      size: 45
//     },
//     { 
//      id: 2,
//      name: "Nodira",
//      age: 18,
//      size: 80
//     },
//     { 
//      id: 3,
//      name: "Sho'lponoy",
//      age: 17,
//      size: 90
//     },
// ];

// function objectFN() {
//     for (let i = 0; i < sozObject.length; i++) {
//         if (sozObject[i].size == kiritilganSize) {
//              natija.push(sozObject[i].name );
//              natija.push(sozObject[i].id)
//         }
//     }
//     return natija;
// }

// console.log(objectFN());


//2-misol
// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
// function takrorlanmaydiganArr (){
//      let natija = [...new Set(arr)]
//      return natija
// }
// console.log(takrorlanmaydiganArr ())

//3-misol
// let son = [88, 75, 342, 21, 45, 67];
// let kiritilganSon = Number(prompt("Ixtiyoriy son kiriting"));
// let index = son.indexOf(kiritilganSon);
// if (son.includes(kiritilganSon)) {
//     console.log("Bu son bor", index);
// }
//  else {
//     console.log("Bu son yo'q");
// }

//4-misol
// let son = [88, 75, 342, 21, 45, 67];
// let kiritilganSon = Number(prompt("Ixtiyoriy son kiriting"));
// if(son.includes(kiritilganSon)){
//     let index = son.indexOf(kiritilganSon);
//     son.splice(index, 1)
// }
// else{
//     console.log("Bu son yo'q")
// }
// console.log(son)

//5-misol
// let son = [1, 2, 3, 4, 5]
// function fn (){
//     let oxirgi = son[son.length-1]
//      let oxirgi1 = son[son.length-2]
//     let yigindi = oxirgi + oxirgi1
//     return yigindi
// }
// console.log(fn())

//Vazifa 3
//1-misol
// let sonlar = [55, 3, 2, 11, 3, 4, 6, 7, 12]
// let natija = sonlar.sort((a, b) => a - b)
// console.log(natija)

//2-misol
// let arr = [1, 6, 9, 5, 8, 10, 15]
// function rangeSum (arr){
//     let yigindi = 0
//      for(let i = 2 ; i < 5; i++){
//         yigindi += arr[i]
//      }
//      return yigindi
// }
// console.log(rangeSum(arr))

//3-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1]
// function natija (){
//     let yangi = []
//     for(let i = 0; i < sonlar.length; i++){
//         if(!yangi.includes(sonlar[i])){
//             yangi.push(sonlar[i])
//         }
//     }
//     return yangi
// }
// console.log(natija())

//4-misol
// let sonlar = [2, 4, 5, 6, 6, 3, 2, 1];
// let sonMax = Math.max(... sonlar.map(item => item))
// let sonMin = Math.min(... sonlar.map(item => item))
// console.log("Berilgan sonlar:", sonlar)
// console.log("Berilganlar ichida eng katta son:", sonMax);
// console.log("Berilganlar ichida eng kichik son:", sonMin);


//6-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let array = []
// for(let i = 1; i <= son ; i++){
//     array.push(i)
// }
// array.reverse()
// console.log(array)


//7-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// let natija = son.filter(item => item % 2 === 0)
// console.log(natija)
// console.log("Juft sonlar miqdori:" ,natija.length)

//8-misol
// let son = [2, 3, 4, 5, 7]
// let natija = son.filter((item, index) => index % 2 != 0)
// console.log(natija)

//9-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     return res
// }
// console.log( "Toq indexli sonlar:",natija())
// res = natija()
// let maxRes = Math.max(...res)
// console.log( "Toq indexlilar ichida eng kattasi:",maxRes)


//10-misol
// let son =  [5, 4, 36, 7, 8, 3, 2, 9, 6, 1,]
// function natija (){
//     let res = son.filter((item, index) => index % 2 != 0)
//     let maxRes = Math.max(...res)
//     let minRes = Math.min(...res)

//     res = res.map(item => {
//     if(item === maxRes) return 0
//     if(item === minRes) return 0
//     return item
//     })

//     return res
// }

// console.log( natija())


//11-misol
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// let natija = []
// for(let i = 1; i <= son ; i++){
//     natija.push(i)
// }
// let toqSonlar = natija.filter(item => item % 2 != 0)
// console.log(toqSonlar)


//12-misol
// let sonlar = [22, 3, 5, 6, 3, 2, 3];
// let teskariSonlar = [];
// for (let i = sonlar.length - 1; i >= 0; i--) {
//     teskariSonlar.push(sonlar[i]);
// }
// console.log(teskariSonlar);


//13-misol
// let son = [3, 5, 6, 3, 2, 3];
// function fn() {
//     let natija = [...new Set(son)]
//     natija.sort((a , b) => a - b)
//     return natija;
// }
// console.log(fn());


//14-misol
// let son = [3, 5, 6, 3, 2, 3, 4, 5, 8, 9, 1];
// function fn (){
//     let juftSonlar = son.filter(item => item % 2 === 0)
//     let juftlarniKichigi = Math.min(...juftSonlar)
//     return juftlarniKichigi
// }
// console.log(fn())

//100 ballga
//IIFE fn - Afzallilari: Darhol bajariladi,Global namespace-ni toza saqlash uchun foydalidir.
// (function(){
//      console.log("Bu IIFE funksiyasi, bu funksiyaga nom bermasdan anonim holatda yozsak boladi va u birdaniga ishlaydi");
// })();

//Generator fn -Generator bu — JavaScript’dagi maxsus funksiya bo‘lib, u bajarilishini to‘xtatib turish (pause) va keyin davom ettirish (resume) imkonini beradi. Oddiy funksiya bir marta chaqirilganda oxirigacha bajariladi, lekin generator bu jarayonni boshqarishga imkon beradi.
// function* sonlar() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = sonlar();
// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next()); 
// console.log(gen.next());  

//Currying fn - Currying — bu funksiyani ketma-ket argumentlar qabul qiladigan ko‘rinishga aylantirish texnikasi.
// function qushish(a) {
//   return function(b) {
//     return a + b;
//   }
// }
// console.log(qushish(2)(3)); 

//Recursion fn -Recursion — bu funksiya o‘zi o‘zini chaqiradigan funksiya. Ya'ni, funksiya ichida yana o‘sha funksiyani chaqirib, masalani kichikroq bo‘laklarga bo‘lib yechadi. 
// function faktorial(n) {
//   if (n === 1) {
//     return 1; 
//   }
//   return n * faktorial(n - 1);
// }

// console.log(faktorial(5)); 

//Pure fn - Pure function — bu faqat kiruvchi ma’lumotga (input) qarab bir xil natija qaytaradigan va tashqi holatni o‘zgartirmaydigan funksiya.
// function qushish(a, b) {
//   return a + b;
// }

// console.log(qushish(2, 3)); 
// console.log(qushish(2, 3)); //tekshirish uchun aslida oddiy fn kabi yoziladi ya'ni bitta konsol bilan


//Impure fn - Impure function — bu tashqi holatga tayanadigan yoki tashqi holatni o‘zgartiradigan funksiya.
// let x = 10;

// function qushishImpure(a) {
//   return a + x;
// }

// console.log(qushishImpure(5)); //aslida  15
// x = 20;
// console.log(qushishImpure(5)); // 25 Natija o‘zgardi

//Construktor fn - Konstruktor funksiyasi — bu yangi obyekt yaratish uchun ishlatiladigan maxsus funksiya.Konstruktor funksiyasi oddiy funksiya bo‘lib, u yangi obyektni yaratish va uni sozlash uchun ishlatiladi. new operatori yordamida chaqiriladi. Konstruktor funksiyasining nomi odatda katta harf bilan boshlanadi (PascalCase).
// function Avto(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const myCar = new Avto('Toyota', 'Camry', 2020);

// console.log(myCar.make); 
// console.log(myCar.model); 
// console.log(myCar.year); 


//Callback fn - bu boshqa funksiyaga argument sifatida berilgan va o‘sha funksiya bajarilgach, chaqiriladigan funksiya.
// function salomlashish(name, callback) {
//   console.log(`Salom, ${name}!`);
//   callback(); 
// }

// function goodbye() {
//   console.log("Xayr!");
// }

// salomlashish("Laylo", goodbye);


//Eval fn - eval() — bu JavaScriptdagi maxsus funksiya bo‘lib, u o‘ziga uzatilgan matnni (string) kod sifatida bajaradi.
// let x = 10;
// let y = 20;
// const result = eval("x + y");
// console.log(result); 

