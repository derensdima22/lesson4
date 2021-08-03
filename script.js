//1.Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
const task1 = () => {
  const arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
  let sum = 0;
  arr.forEach((elem) => {
    isNaN(+elem) ? sum : (sum += +elem);
  });
  alert(sum);
};

task1();

//2.Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//•	Добавьте в начало массива значение ‘Backbone.js’
//•	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//•	Добавьте в массив значение ‘CommonJS’ вторым элементом
//•	Найдите и удалите из массива значение ‘jQuery’, выведите
//его в alert со словами “Это здесь лишнее”
const task2 = () => {
  const arr = ["AngularJS", "jQuery"];
  arr.unshift("Backbone.js");
  arr.push("ReactJS", "Vue.js");
  arr.splice(2, 0, "CommonJS");
  let index = arr.indexOf("jQuery");
  console.log(`это сдесь лишнее: ${arr.splice(index, 1)}`);
};
task2();

//3.Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке
// ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива
// (indexOf, splice ...). Затем объедините элементы массива в строку
//и выведите в alert исходный и итоговый варианты.
const task3 = () => {
  let arr = "Как однажды Жак звонарь сломал фонарь головой".split(" ");
  let index = arr.indexOf("однажды");
  arr.splice(4, 0, arr[index]);
  arr.splice(index, 1);
  [arr[5], arr[6]] = [arr[6], arr[5]];
  console.log(arr);
};
task3();

//4.Создайте ассоциативный массив person, описывающий персону,
// с произвольным количеством произвольных полей. С помощью
//оператора in или typeof проверьте наличие в объекте свойства,
// прочитанного из prompt, и выведите его на экран. Если свойства нет,
//то добавляйте его в объект со значением, которое также запрашивается из prompt.
const task4And5 = () => {
  const person = {
    name: "Ivan",
    age: "19",
  };
  let personKey = prompt("Введите свойство");
  personKey in person
    ? alert("alolollo")
    : (person[personKey] = prompt("введи значение"));

  //5.Сгенерируйте объект, описывающий модель телефона,
  // заполнив все свойства значениями, прочитанными из
  // prompt (например: brand, model, resolution, color...),
  // не используя вспомогательные переменные. Добавьте этот
  // гаджет персоне, созданной ранее.

  const mobile = {
    brand: prompt("brand"),
    model: prompt("model"),
    resolution: prompt("resolution"),
    color: prompt("color"),
  };
  person.mobile = mobile;
  //person.mobile = {...mobile}; - не ссылка а копирование.
};
task4And5();

//6.Создайте пустой массив. В цикле до n на каждой итерации
// запускайте prompt для ввода любых символов, полученное значение
//добавляйте в конец созданного массива. После выхода из цикла
// посчитайте сумму всех чисел массива и выведите в alert полученный результат.
const task6 = () => {
  const arr = [];
  let promPoPom;
  let sum = 0;
  while (promPoPom !== null) {
    promPoPom = prompt("введите любой символ");
    arr.push(promPoPom);
  }
  arr.pop(promPoPom);
  arr.forEach((elem) => {
    isNaN(+elem) ? sum : (sum += +elem);
  });
  alert(sum);
};

//7.Используя вложенные циклы, сформируйте двумерный массив,
// содержащий таблицу умножения

const task7 = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = [];
    for (let j = 0; j < 10; j++) {
      arr[i][j] = i * j;
    }
  }
  console.log(arr[2][3]); // = 6
  console.log(arr[6][6]); // = 36
};

//Доп задание  "aabbbc" = "2a3b1c"
let additionalTask = (str) => {
  let str = "aabbbc";
  let num = 1;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i + 1] ? num++ : ((result += num + str[i]), (num = 1));
  }
  console.log(result);
};
additionalTask("aabbbc");
