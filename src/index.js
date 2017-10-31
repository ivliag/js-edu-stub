import { multiplyNumbers } from './multiply-numbers';

function createElement(tagName, text) {
    let element = document.createElement(tagName);
    element.innerText = text;
    return element;
}

let h1 = createElement(
    'h1',
    'Результат умножения 12 на 46 и на 34 равен ' + multiplyNumbers(12, 46, 34)
);

h1.style.fontFamily = 'sans-serif';

document.body.append(h1);
