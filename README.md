ECO EDU STUB
============

Минимальная конфигурация для разработки и написания тестов.

# Как сделать самому с нуля
1. Инициализируем проект
`npm init`

2. Устанавливаем зависимости
`npm i babel-core babel-jest babel-loader babel-preset-env jest webpack -SD`

3. Доваляем в package.json секцию с настройками для `jest`
```
"jest": {
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
}
```

4. Добавляем в package.json секцию скриптов, которые понадобятся для тестирования и запуска приложения
```
"scripts": {
  "test": "jest",
  "build": "webpack",
  "watch": "webpack --watch"
}
```

5. Добавляем в корень проекта файлик babel.rc с таким текстом
```
{
    "presets": ["env"]
}
```
