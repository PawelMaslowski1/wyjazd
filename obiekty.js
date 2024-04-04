// const firstname = "Jan";

// const osoba = {
//     imie: "Jan",
//     nazwisko: "Kowalski",
//     wiek: 30,
//     miasto: "Wrocław",
//     informacje() {
//         console.log("informacje o osobie")
//     },
//     dodaj(a,b) {
//         return a + b
//     }

// };

// osoba.informacje();

// const wynikDodawania = osoba.dodaj(5,7);
// console.log(wynikDodawania);

// console.log(osoba);

// console.log(osoba.wiek);

const uzytkownicy = [
  {
    id: 1,
    imie: "Dawid",
    wiek: 27,
    miasto: "Cynków",
    kraj: "PL",
  },
  {
    id: 2,
    imie: "Paweł",
    wiek: 10,
    miasto: "Zabrze",
    kraj: "PL",
  },
  {
    id: 3,
    imie: "Michał",
    wiek: 30,
    miasto: "Katowice",
    kraj: "UK",
  },
];

// const pelnoletni = uzytkownicy.filter( function (uzytkownik) {
//     return uzytkownik.wiek >= 18
// })
// console.log(pelnoletni);

// pelnoletni.forEach(function (x) {
//     console.log("Imię to " + x.imie);
//     console.log("wiek " + x.wiek);
// })

// const polacy = uzytkownicy.filter(function (uzytkownik) {
//     return uzytkownik.kraj === "PL"
// })
// console.log(polacy)

const produkty = {
  nazwa: "Mandarynki",
  cena: 12.99,
  producent: {
    nazwa: "ZOO",
    nip: "6452548403",
    adres: {
      miasto: "Warszawa",
      ulica: "Długa",
    },
  },
};


console.log(produkty.producent.nazwa);
console.log(produkty.producent.adres.miasto);