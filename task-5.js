// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
  constructor(type, power) {
    this.type = type;
    this.power = power;

    this.powerOnOff = function () {
      let powerOnOff = prompt("Пожалуйста, ВКЛ/ВЫКЛ прибор в/из сети");
      console.log(`Прибор ${this.type} ${powerOnOff} `);
    };
  }
}

class Tv {
  constructor(type, power, noise, size, screenResolution) {
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
}

class VacuumCleaner {
  constructor(type, power, noise, color) {
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
}

Tv.prototype = new Device();
VacuumCleaner.prototype = new Device();

let hdTv = new Tv("Телевизор SONY", 80, 120, 150, "4K");
let homeVacuumCleaner = new VacuumCleaner("Пылесос Филлипс", 30, 60, "зеленый");

hdTv.powerOnOff();
hdTv.description();
homeVacuumCleaner.powerOnOff();
homeVacuumCleaner.description();
