// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function Device(type, power) {
  this.type = type;
  this.power = power;

  this.powerOnOff = function () {
    let powerOnOff = prompt("Пожалуйста, ВКЛ/ВЫКЛ прибор в/из сети");
    console.log(`Прибор ${this.type} ${powerOnOff} `);
  };
}

function Tv(type, power, noise, size, screenResolution) {
  this.type = type;
  this.power = power;
  this.noise = noise;
  this.size = size;
  this.screenResolution = screenResolution;
  this.description = function () {
    console.log(`Тeлeвизор:
    - название: ${this.type}
    - мощность: ${this.power} Вт
    - Уровень шума: ${this.noise} ДБ
    - Размер: ${this.size} См
    -Разрешение экрана: ${this.screenResolution} Px`);
  };
}

function VacuumCleaner(type, power, noise, color) {
  this.type = type;
  this.power = power;
  this.noise = noise;
  this.color = color;
  this.description = function () {
    console.log(`Пылесос:
    - название: ${this.type}
    - мощность: ${this.power} Вт
    - Уровень шума: ${this.noise} ДБ
    - Цвет: ${this.color} `);
  };
}

Tv.prototype = new Device();
VacuumCleaner.prototype = new Device();

let hdTv = new Tv("Телевизор SONY", 80, 120, 150, "4K");
let homeVacuumCleaner = new VacuumCleaner("Пылесос Филлипс", 30, 60, "зеленый");

hdTv.powerOnOff();
hdTv.description();
homeVacuumCleaner.powerOnOff();
homeVacuumCleaner.description();
