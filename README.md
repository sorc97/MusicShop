# MusicShop

## About

### en

This project is divided into Front-end and Back-end. Front-end is Single Page Application, created with React, Redux and CSS. App is loading data from API server, requests to the server depends in which page user loads. For instance, user was loaded on the product page, App is loading data of this particular product, then if user goes to the product category page, App is loading data of this particular category, so this approach helps to decrease amount of unnecessary requests. In this application you can sort and search products, which separated by pages and categories. Also you can add products to the cart, directly from the cart you can increase an amount of the particular product. Data from cart storing into LocalStorage, so data will be not lose by page refreshing. Elements aligned by using CSS Grid and Flexbox. Responsive version created with CSS media queries.
Back-end is REST API application which connected with MongoDB using Mongoose. API responding with data based on the request.

### ru

Данный проект разделен на Front-end и Back-end. Front-end представляет из себя одностраничное приложение, созданное с помощью React, Redux и CSS. Приложение загружает данные с сервера в зависимости от того, в какой секции загрузился пользователь. Допустим, пользователь загрузился на странице конкретного товара, приложение запрашивает данные только этого товара, затем если пользователь переходит на страницу категории товара, запрашиваются только товары из этой категории, таким образом минимизируется объем ненужных данных, загружаемых пользователем. В приложении присутствует возможность сортировки и поиска товаров, все товары разделены на страницы и категории. Также можно добавить товар в корзину, непосредственно из корзины можно увеличить количество отдельно взятого товара, данные из корзины хранятся в LocalStorage, таким образом при перезагрузке страницы они не будут утеряны. Элементы позиционировались при помощи CSS Grid и Flexbox. Адаптивная версия реализована при помощи медиа запросов CSS.
Back-end представляет из себя REST API приложение, которое связанно с базой данных MongoDB посредством Mongoose. API отвечает данными основываясь на поступающем запросе.