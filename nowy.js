// const imie = document.getElementById ("name")
// const wzrost = document.getElementById ("wzrost")

// const pobierzDane = async () => {
//     const odpowiedz = await fetch("https://swapi.dev/api/people/1");
//     const dane = await odpowiedz.json();

//     console.log(dane);
//     console.log(dane.name);
//     console.log(dane.mass);
//     console.log(dane.height)
//     imie.textContent = dane.name
//     wzrost.textContent = dane.height
// }

// pobierzDane();

const latInput = document.getElementById("lat");
const lonInput = document.getElementById("lon");
const pobierzBtn = document.getElementById("btn");
const pobierzMiasto = document.getElementById("Miasto");
const pobierzTemperatura = document.getElementById("Temperatura");
const pobierzWiatr = document.getElementById("Wiatr");
const pobierzOdczuwalna = document.getElementById("Odczuwalna");
const Kulka = document.getElementById("Kulka");
const zegarGodzina = document.getElementById("zegar1");
const zegarMinuta = document.getElementById("zegar2");
const zegarSekunda = document.getElementById("zegar3");
const loader = document.getElementById("Loader");
const odliczanie = document.getElementById("odliczanie");

// function pokazWspolrzedne () {
//     console.log("lat:" + latInput.value);
//     console.log("lon:" + lonInput.value);

// }

// pobierzBtn.addEventListener("click", pokazWspolrzedne);

const klucz = "912c622485ebcccfe6e75ebb3dc2de10";

async function danePogodowe() {

  loader.textContent = "Wczytywanie..."

  try {
    const lat = latInput.value;
    const lon = lonInput.value;
    if (lat >= 80 || lon >= 80) {
      console.log("Przerywam funkcje");
      return;
    }
    const odpowiedz = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${klucz}&lang=PL`
    );
    const dane = await odpowiedz.json();

    pobierzMiasto.textContent = dane.name;
    

    pobierzTemperatura.textContent =
      "Temperatura: " + konwertujStopnie(dane.main.temp);
    pobierzWiatr.textContent = "Wiatr: " + dane.wind.speed;
    pobierzOdczuwalna.textContent =
      "Odczuwalna: " + konwertujStopnie(dane.main.feels_like);
    wybierzKolor(dane.main.temp);
  } catch (error) {
    console.log(error);
  } finally {
    loader.textContent = "";
  }
}

function konwertujStopnie(temp) {
  const result = Math.round(temp - 273.15);
  return result;
}

function wybierzKolor(temp) {
  const C = konwertujStopnie(temp);
  if (C >= 30) {
    Kulka.style.backgroundColor = "red";
  } else if (C > 10 && C < 30) {
    Kulka.style.backgroundColor = "yellow";
  } else if (C <= 10) {
    Kulka.style.backgroundColor = "blue";
  }
}
danePogodowe()
pobierzBtn.addEventListener("click", danePogodowe);

function zegar() {
  const czas = new Date();
  const godziny = czas.getHours();
  const minuty = czas.getMinutes();
  const sekundy = czas.getSeconds();
  zegarGodzina.textContent = godziny;
  zegarMinuta.textContent = minuty;
  zegarSekunda.textContent = sekundy;
  zegarGodzina.textContent = godziny >= 10 ? godziny : "0" + godziny;
  zegarMinuta.textContent = minuty >= 10 ? minuty : "0" + minuty;
  zegarSekunda.textContent = sekundy >= 10 ? sekundy : "0" + sekundy;

  const zegar = `${godziny}:${minuty}:${sekundy}`;
  // console.log(zegar);
}
zegar();
setInterval(function czas() {
  zegar();
}, 1000);


function odliczanieDoWyjazdu () {
  const czasWyjazdu = new Date("April 9, 2024 22:30:00").getTime();

  const obecnyCzas = new Date().getTime();
  
  
  const licznik = czasWyjazdu - obecnyCzas;
  const dni = Math.floor(licznik / (1000 * 60 * 60 * 24));
  const godziny = Math.floor((licznik % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
  const minuty = Math.floor((licznik & (1000 * 60 * 60)) / (1000 * 60));
  const sekundy = Math.floor((licznik % (1000 * 60)) / 1000);
  
  console.log(sekundy);
  
  odliczanie.textContent = `${dni} dni ${godziny} godziny ${minuty} minut ${sekundy} sekund`

}

odliczanieDoWyjazdu()

setInterval(odliczanieDoWyjazdu, 1000);