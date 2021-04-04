# se3-web-lab4
### Frameworks
![Spring](https://img.shields.io/badge/spring-090909?style=for-the-badge&logo=spring)
![Vue](https://img.shields.io/badge/vue-090909?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADUAAAAuCAMAAAC%2FKaEaAAACEFBMVEUAAAA4eXA9eW9Av4BBtoNCuYRHuICAgIBBuINBuIRBuIM2WGM2WWNBuINBuINBuIM1VWJBuINBuINBuIM1UGBBuIM1UGBBuINBuINBuINBuINBuINBuINBuINBuINBuINBuIM0TWBBuIM0TV9BuINBuINBuINBuINBuINBuINBuINBuIM0TF80TV9BuINBuINBuIM0TF9BuINBuINBuINBuINBuINBuINBuINBuINBuIM0S19BuINBuINBuINBuINBuINBuINBuINBuINBuINBuINBuIM0S19BuINBuINBuINBuINBuINBuINBuINBuINBuIM0S19BuIM0S19BuINBuINBuIM0Sl5BuINBuINBuINBuINBuIM0S19BuINBuINBuINBuIM0Sl5BuINBuINBuINBuIM0Sl5BuINBuINBuINBuINBuIM0Sl5BuIM0Sl5BuINBuINBuINBuINBuINBuINBuIM0SV5BuINBuINBuINBuIM%2FqH4%2FqX5BuIM0Sl40TV9BuIM0SV40Sl40S180TV81TmA1T2A1UGA1U2E1VWI2WGM2WmQ2W2Q3X2U3YmY3Zmc3Zmg4aWk4b2s5c2w5dm05d206fG86gHA7g3E7hHI7h3M7iHM8jXU8kXY9lHc9lXc9mHg%2BnXo%2Bnno%2BoXs%2FpHw%2Fp30%2Fq39ArX9Ar4BAsoFAs4FBtYJBtoJBt4NBuIONaFfwAAAAgnRSTlMAAAAAAAAAAAEBAgMDAwQHCgoLDQ8PEBETFxgdHyAiIyUmJicpLDIzOjs9Pj9AQkNGSE5PV1hbXGBhZGZpbXV2fn%2BCg4eIi42OkJOUnJ2lpqmqqquusrO0tLq7wsPIysvNzs%2FR0tTV1tvh4%2Bbo6enq6%2B3x9fb3%2BPn5%2Bvv8%2Ff39%2Fv7%2BHNwGGQAAAiJJREFUeNpiiABQQg%2FckUVBEIBrvbG93mRt27at2LZt2zbvTwzeTtd5Gc93dLu7KpmZQlFUVmrwHoSPsiwrZvILQvOV6K0QpyBOc9fLXH4o8JzTQr0kIlwNJZcIWdUvMPccQEAax%2BEKcdPQusnNMFNpAVh3i%2FNKi2SSfbWSf6osWlaYuqWd3KO4mKgQT7XTU86TzES6QXNWUaekcg8COJwrY6eiM%2Fhv1yeuZqsl93ULtn6VoXqWiU8Q%2B3O47KsQ53Ge7z7es%2FeBHnO72CDJWM9YeTYs8v4IIJ9ErkcqxG%2B%2BRnhN9IHOdUWtFcZaFV2DnvNfHqYqjUqVU7z9ccYmx8t56jJqdfFSfgxG3vI2V7upVDvHyxsYC8nksX9Ta4D7zBCYuM%2FrUqOu1LjE%2FT0QecXzPKprjXEb7wUzLitqY6ld0SWYs%2FsXA9Py61dNc%2FfTCWYdLWGk29Dq4abkCCx4zcx8nVaqm%2BfmFSwJzmBoUGsNcc4IgkV3mVpuWi81L3O%2BA8s84hgbX2%2BNc4rzgBUXFXVUdCi6AGu2%2F2BwpmaG7%2B87YFVYAaNTfBWEwYaXiugFbAlMV8bSA2HTbWXsNmxzjzEqRbvDDueMWudgj52fld7nbbDLoTxdKe8A7PRE13oCe%2FmlsJTkB7vdYOsG7OcWbij9c4MDTpZrpfITcMgHrfUOjtmbtV7K2gMHPVxvPYCjvBNUgjccdlWtzYyBdMDhwYFTDgCmfsTD%2FmMSGwAAAABJRU5ErkJggg%3D%3D)
![Bootstrap](https://img.shields.io/badge/bootstrap-090909?style=for-the-badge&logo=bootstrap)

### Переписать приложение из [предыдущей лабораторной работы](https://github.com/Vsev0l0d/se3-web-lab3) с использованием следующих технологий:
* Уровень back-end должен быть основан на Spring.
* Уровень front-end должен быть построен на Vue.js с использованием обычных полей ввода HTML
* Взаимодействие между уровнями back-end и front-end должно быть организовано посредством REST API.

### Приложение по-прежнему должно включать в себя 2 страницы - стартовую и основную страницу приложения. Обе страницы приложения должны быть адаптированы для отображения в 3 режимах:
* "Десктопный" - для устройств, ширина экрана которых равна или превышает 1052 пикселей.
* "Планшетный" - для устройств, ширина экрана которых равна или превышает 879, но меньше 1052 пикселей.
* "Мобильный"- для устройств, ширина экрана которых меньше 879 пикселей.

### Стартовая страница должна содержать следующие элементы:
* "Шапку", содержащую ФИО студента, номер группы и номер варианта.
* Форму для ввода логина и пароля. Информация о зарегистрированных в системе пользователях должна храниться в отдельной таблице БД (пароль должен храниться в виде хэш-суммы). Доступ неавторизованных пользователей к основной странице приложения должен быть запрещён.

### Основная страница приложения должна содержать следующие элементы:
* Набор полей ввода для задания координат точки и радиуса области в соответствии с вариантом задания: Checkbox {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'} для координаты по оси X, Text (-3 ... 3) для координаты по оси Y, и Checkbox {'-2','-1.5','-1','-0.5','0','0.5','1','1.5','2'} для задания радиуса области. Если поле ввода допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки или отрицательный радиус), то приложение должно осуществлять их валидацию.
* Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. Клик по картинке должен инициировать сценарий, осуществляющий определение координат новой точки и отправку их на сервер для проверки её попадания в область. Цвет точек должен зависить от факта попадания / непопадания в область. Смена радиуса также должна инициировать перерисовку картинки.
* Таблицу со списком результатов предыдущих проверок.
* Ссылку, по которой аутентифицированный пользователь может закрыть свою сессию и вернуться на стартовую страницу приложения.

### Дополнительные требования к приложению:
* Все результаты проверки должны сохраняться в базе данных под управлением СУБД PostgreSQL.
* Для доступа к БД необходимо использовать Spring Data.

> ### Реализовано дополнительно
> + 2 темы отбражения фронтенда (темная, лиловая)
> + Пагинация для таблицы
> + Модальное окно с настройками (возможность менять цвета на графике, количество строк в таблице)
> + Возможность удалять отдельные точки из таблицы