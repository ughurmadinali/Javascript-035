1
//как расшифровывается DOM?
//Document Object Model - Объектная модель документа

2
//для чего нужен DOM?
//Для создании Документа тоесть, браузер создаёт Документ

3
//измените содержимое тега 'p' на 'Новый текст'
//<p id="txt">Some text</p>
let p = 'Some text'

p.innerHtml = 'Новый текст'

4
//выведите в консоли содержимое тега 'p'
//<p id="txt">Some text</p>
let p = 'Some text'

console.log(p);

5
//получите доступ к элементу с помощью (get...)
//<div class="master"></div>
document.getElementsByClassName('.master')

6
//получите доступ к элементу с помощью (get...)
//<div id="master"></div>
document.getElementById('master')

7
//получите доступ к элементу с помощью (get...)
//<div></div>
document.getElementsByTagName('div')

8
//получите доступ к элементу с помощью (query...) через имя атрибута
//<div title="someText"></div>
const element1 = document.querySelector('.someText')

9
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
//<div title="someText"></div>
const element2 = document.querySelector('.someText')

10
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
//<div title="someText"></div>
const element3 = document.querySelector('.someText')

11
//получите доступ к элементу с помощью (query...) через имя класса
//<div class="someText"></div>
const element4 = document.querySelector('.someText')

12
//получите доступ к элементу с помощью (query...) через имя идентификатора
//<div id="someText"></div>
const element5 = document.querySelector('#someText')

13
//получите доступ к элементу с помощью (query...) через тег
//<div></div>
const element6 = document.querySelector('div')

14
//измените значение атрибута 'type' на 'number' с помощью DOM метода
//<input type="text">

15
//измените фоновый цвет блока div на красный с помощью DOM метода
//<div id='block'></div>

16
//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
//<div></div>

17
//с помощью какого метода DOM можно создать элемент в javascript?
document.createElement(element)

18
//с помощью какого метода DOM можно удалить элемент в javascript?
document.removeChild(element)

19
//с помощью какого метода DOM можно добавить элемент в javascript?
document.appendChild(element)	

20
//с помощью какого метода DOM можно заменить элемент в javascript?
document.replaceChild(new, old)	

21
//с помощью какого метода DOM можно записать текст в элемент в javascript?
document.write(text)	
