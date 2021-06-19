// Написать функцию, которая создает пустой объект, но без прототипа

function createEmp() {
  const emptyObj = Object.create(null);
}
createEmp();
