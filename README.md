# Array - Массив

## Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив

![Массив](./src/array.svg)

## Для создание массив существует два способа

1. let nameArr = [1,'hello', true]; --> рекомендуется
2. let nameArr = new Array(1, "hello", true)

## Добавление элемент массив без исползование метод

![добавление массив](./src/bezm.PNG)

# Методи для работа с массивом

![добавление массив](./src/methods.PNG)

## Методи для добавление новое элемент в массив

1. push() - Этот метод принимает один или несколько параметр(через пробел) и добавляет в конца массива

![добавление массив](./src/push.PNG)

2. unshift() - работает как push() просто добавляет не в конца а в началле массива

![добавление массив](./src/unshift.PNG)

## Метод для удаление элементи массив

1. pop() - не принимает параметр удаляет последный элемент массива

![добавление массив](./src/pop.PNG)

2. shift() - не принимает параметр удаляет первыйэлемент массив

![добавление массив](./src/shift.PNG)

## reverse() - Метод reverse() переворачивает массив

![добавление массив](./src/revers.PNG)

## concat() -Метод concat()используется для объединения двух или более массивов. Этот метод не изменяет существующие массивы, а вместо этого возвращает новый массив.

![добавление массив](./src/concat.PNG)

## indexOf(n) Метод indexOf()возвращает первый индекс, по которому данный элемент (n) может быть найден в массиве, или -1, если он отсутствует.

![добавление массив](./src/indexOf.PNG)

## includes(n) - Метод includes()определяет, содержит ли массив определенное значение(n) среди своих записей, возвращая trueили falseпри необходимости.

![добавление массив](./src/includes.PNG)

## slice(start, end) - Метод slice()возвращает неглубокую копию части массива в новый объект массива, выбранный из start до end ( end не включенный), где start и end представляет индекс элементов в этом массиве. Исходный массив не будет изменен.

![добавление массив](./src/slice.PNG)

## splice() -Метод splice() изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы

![добавление массив](./src/splice.PNG)

> Все методи высще изменяет главный массив

# Методи callback

> Callback это функция которые принимается как параметр внутри другово функция

## map() -Метод создает новый массив , заполненный результатами вызова предоставленной функции для каждого элемента в вызывающем массиве map().Принимает три параметр 1. текущий элемент 2.текущий индекс 3.полный массив

![добавление массив](./src/map.PNG)

## forEach() -Метод forEach()выполняет предоставленную функцию один раз для каждого элемента массива. Принимает три параметр 1. текущий элемент 2.текущий индекс 3.полный массив. Ни чего не возрашает.

![добавление массив](./src/each.PNG)

## find() - Принимает три параметр 1. текущий элемент 2.текущий индекс 3.полный массив. return мы пишем условые и этот метод возврашает элемент( только один первый попалщийся ) которые равняется в этый условыя

![добавление массив](./src/find.PNG)

## filter() - Принимает три параметр 1. текущий элемент 2.текущий индекс 3.полный массив. return мы пишем условые и этот метод возврашает элементы ( все элементы ) которые равняется в этый условыя

![добавление массив](./src/filter.PNG)

## reduce() - Принимает четыре параметр 1. предидущий значение 2.текущий значение 3. индекс эдемента 4.массив. Служить для редукции масивов. Например для сложение все элементов массиве

![добавление массив](./src/reduce.PNG)

## sort() - Принимает два параметр 1. предидущий 2.текущий. Служить для сортировка чисел или алфавить по возрастанию

![добавление массив](./src/sort.PNG)
