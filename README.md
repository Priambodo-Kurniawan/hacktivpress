# hacktivpress
blogging system sederhana dengan menggunakan framework Express JS, dan juga work database MongoDB.
Dalam blogging sistem ini setiap orang bisa melihat daftar keseluruhan artikel atau daftar artikel berdasar kategori. Namun hanya user yang ter-autentifikasi yang bisa membuat, mengedit, dan menghapus artikel.

Terdiri dari 2 folder yakni server side and client side.

## Getting Started

run server side
```
> start local mongoose server: "$ sudo mongod start service"
> npm install --save
> npm start
```

run client side:
```
> npm install
> npm run dev
```

## REST API Users
List of basic routes users:

Route | HTTP | Description
------------ | ------------- | -------------
/api/signup | POST | Sign up with new user info
/api/signin | POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users (admin only)
/api/users/:id | GET | Get single users (admin and authenticated user)
/api/users | POST | Create a user (admin only)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticated user)

## REST API Articles
List of basic routes articles:

Route | HTTP | Description
------------ | ------------- | -------------
/api/articles | GET | Get all articles
/api/articles/:id | GET | Get single articles
/api/articles | POST | Create New articles (login user only)
/api/articles/:id | PUT | Edit one article (auth user only)
/api/articles/:authorid | GET | Get articles by author (auth user only)
/api/articles/:category | GET | Get articles by category
/api/articles/:id | REMOVE | remove one article (auth user only)
