
const express = require('express');
const fs = require('fs');
const path = require('path');
const cartRouter = require('./cartRouter');

const app = express();
const categoriesJSONPath = path.resolve(__dirname, './db/categories.json');
const goodsJSONPath = path.resolve(__dirname, './db/goods.json');

// by default request object cannot work with json format,
// therefore use middleware to enable it
app.use(express.json());

/* routes */
app.use('/api/cart', cartRouter);
app.get('/api/categories', (req, res) => {
  fs.readFile(categoriesJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});
app.get('/api/goods', (req, res) => {
  fs.readFile(goodsJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});


app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started at port ${port}`));
