ECO EDU STUB
------------

Минимальная конфигурация для разработки и написания тестов.

## Как сделать самому с нуля
1. Инициализируем проект
```npm init```

2. Устанавливаем зависимости
```npm i babel-core babel-jest babel-loader babel-preset-env jest webpack --save-dev```

3. Добавляем в package.json секцию с настройками для `jest`. Здесь мы указываем, что наш код надо отдельно прекомпилить, в частности поменять инструкции `import` на `require`
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

5. Создаём в корень проекта файлик .babelrc с инструкциями для babel (https://babeljs.io/)
```
{
    "presets": ["env"]
}
```

6. Создаём в корне проекта файл webpack.config.js с настройками для сборки проекта:
```
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};
```

## Как запускать
1. Тесты `npm test`
2. Сборка `npm build`
3. Сборка c риалтайм-обновлением `npm run watch`
