# Тестовое задание 66 bit v2

### [Ознакомиться можно по ссылке](https://waaliad.github.io/test-task-66bit-v2/)

### UPD
Не знал можно ли использовать ui библиотеки, но для экономии времени взял select из ant design
###### TODO?: заменить select из ant-design на самописный
Некоторые моменте в представленном макете мне показались незаконченными и я позволил себе их переделать (например хлебные крошки на мобильных устройствах или пропажа половины номера телефона из таблицы при узком экране)

### Stack
##### Main: React + typescript + redux toolkit
Additionally: ant-design + axios + styled-components + react-router-dom + react-intersection-observer + normalize.css

### Техническое задание
Необходимо написать SPA приложение на React, которое будет отображать список сотрудников компании и их профили. В приложении должно быть реализовано переключение тем (темная и светлая).

Приложение должно содержать 2 экрана:
- На первом экране должен быть представлен список сотрудников. Необходимо реализовать поиск работников по ФИО и фильтр с настройками: по полу, стеку технологий и должности. При достижении конца списка необходимо подгружать новых сотрудников и добавлять их на текущую страницу (infinite scroll).
- На втором экране должен отображаться профиль сотрудника со всей имеющейся информацией.

Дизайн приложения вы можете посмотреть [здесь](https://www.figma.com/file/jBoVdJcufXi7WFnTvZFjrK/66.%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-Frontend-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?type=design&node-id=0%3A1&mode=design&t=AvdSj02DyWmZ1Z0r-1). 
Также при выполнении тестового задания используйте [swagger](https://frontend-test-api.stk8s.66bit.ru/swagger/index.html).