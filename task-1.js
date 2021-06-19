let auto = {
  nissan: "skyline",
  mazda: "rx-7",
  honda: "prelude",
};

function output() {
  for (let key in auto) {
    if (auto.hasOwnProperty(key)) {
      console.log(key, auto[key]);
    }
  }
}
output(auto);
