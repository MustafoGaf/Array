let arr = [1, 2, 3, "hi"];
// удалить элементи от индекси 1 до 3
let newArr = arr.splice(1, 3);
console.log(arr);


let arr2 = [2, 3, 4, 7, 8, 9];
// добавить элементи от индекси 2 и не удаляет не каких ( 0) и добавить "1", true, 25
let newArr2 = arr2.splice(2, 0, "1", true, 25);
console.log(arr2);



// let arr3 = [2, 3, 4, 7, 8, 9];
// // вырезать элементи последный
// let newArr3 = arr.slice(-1);
// console.log(newArr3);


// let arr2 = [1, 2, 3, "hi"];
// // если не найдот то возвращает false
// console.log(arr.includes(10));

// можно и несколько масивов
// let arr3 = [1,2,3]
// let arr4 = [4, 5, 6];
// let arr5 = [7, 8, 9, 10];

// let newArr2 = arr3.concat(arr3, arr4, arr5)

// console.log(newArr2);
