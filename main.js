
const miasta = ["Zabrze", "Katowice", "Ełk"];
const tekst = [12,"Tekst", false, [], 1];

// forEach, map, filter

miasta.forEach(function (x) {
    console.log( "Miasto to" + x)
})

const nowaTablica = miasta.map( function (x) {
    return"Miasto: " + x;
})

console.log(nowaTablica);
console.log(miasta);

const przefiltrowana = miasta.filter( function (x) {
    return x.length > 4
})


// const zmianna1 = "tekst"; //zmienna typu string
// const zmienna2 = 34;
// const zmienna3 = true;


// // typy złożone
// // obiekty (document, math, date, nasze obiekty)
// // i tablice
// function fn1() {
//     console.log(1)
// }

// function fn2() {
//     console.log(2)
// }

// const element = [7,4,2,]; //tablica
// const imiona = ["Anna","Jan","Dawid", "Piotrek"];

// imiona.push("Paweł");
// // imiona.push("kolejny")

// imiona.pop();
// imiona.pop();
// imiona.pop();
// imiona.pop();

// const najnowszy = imiona.length -1;

// const powitania = "Przywitaj urzytkownika " + imiona[najnowszy];
// console.log(powitania);

// console.log( imiona);

// const tablicaZfunkcjami = [fn1,fn2]


// const citi = ["Zabrze" , "Katowice" , "Gliwice"]

// const zmienna1 = citi[0]
// console.log(zmienna1)
// const zmienna3 = citi[2]
// console.log(zmienna3)
// citi.pop();
// console.log(citi)


// const users = ["Jan" , "Anna"];

// const deleteUsers = users.shift();

// console.log("usunięty użytkownik to " + deleteUsers);

// users.unshift("Dagmara")
// users.shift()
// users.unshift("Michał" , "Paweł");
// users.shift()
// console.log(users)

// const car = ["Audi" , "BMW" , "Peugeot"];

// car.unshift("WV")
// car.shift()
// console.log(car)



// const lista = document.getElementById("Lista")
// const miasta = ["Rzeszów" , "Kraków" , "Ełk" , "Wrocław" , "Bytom"];

// //forEach , map, filter, reduce

// const nowaTablica =  miasta.map( function(x) {
//     return "Miasto:" + x
// })

// console.log(nowaTablica)
// console.log(miasta)

// const cyfry = [1,2,3,4];
// const dzialanie = cyfry.map( function(x) {
//     return x * 2
// })
// console.log(cyfry)
// console.log(dzialanie)

// const filtrowanie = miasta.filter(function(a){
//     return a.length > 6 // wywali wszystkie miasta gdzie jest mniej niż 6 liter
// })

// console.log(filtrowanie)




// miasta.forEach(function(x, index) {
//     console.log(index + ":" + x)
// })



// miasta.forEach( function (miasto) {
//     console.log(miasto);
//     const nowyElementListy = document.createElement("li");
//     nowyElementListy.textContent = "To jest "+ miasto;
//     nowyElementListy.classList.add("nazwa")

//     lista.append(nowyElementListy);

// })


