'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const cartRouter = require('./cartRouter');
const app = express();
const categoriesJSONPath = path.resolve(__dirname, './db/categories.json');
const goodsJSONPath = path.resolve(__dirname, './db/goods.json');

// по умолчанию объект request не умеет работать с json'ом,
// поэтому используем middleware, которые включают эту функцию
app.use(express.json());
/* роутеры */
app.use('/api/cart', cartRouter);
app.get('/api/categories', (req, res) => {
  console.log('GET /api/categories');
  fs.readFile(categoriesJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/goods', (req, res) => {
  console.log('GET /api/goods');
  fs.readFile(goodsJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

/* Следующие 3 запроса должны отрабатывать последними */
app.use(express.static(path.resolve(__dirname, 'client')));
// при любых гет-запросах
app.get('*', (req, res) => {
  // отправить файл index.html
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started at port ${port}`));

// // const cartRouter = require('./cartRouter');
//
//

//
// //app.use('/', express.static(path.resolve(__dirname, '../public')));
// //app.use('/api/cart', cartRouter);
// app.get('/api/catalog', (req, res) => {
//   res.status(200).json({result: 1});
// });
// /**
//  * Используем path дабы избежать проблем с относительными путями до файлов. Делаем их абсолютными.
//  */
// const catalogJSONPath = path.resolve(__dirname, './db/products.json');
//
// app.get('/api/products', (req, res) => {
//   fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
//     if (err) {
//       res.send(JSON.stringify({result: 0, text: err}));
//       // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
//     } else {
//       res.send(data);
//     }
//   });
// });
//
//
//
// // app.get(); // READ
// // app.post(); // CREATE
// // app.put(); // UPDATE
// // app.delete(); // DELETE
