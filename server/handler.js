const fs = require('fs');
const cart = require('./cart');

const actions = {
  add: cart.add,
  change: cart.change,
  del: cart.del,
};

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: `Handler readFile error (${err})`}));
    }
    // если корзина пуста
    if (!data) {
        data = JSON.stringify([]);
    }
    const newCart = actions[action](JSON.parse(data), req); //data: содержимое корзины
    fs.writeFile(file, newCart, (err) => {
      if (err) {
        console.log('Ошибка записи в файл');
        res.send('{"result": 0}');
      } else {
        res.send('{"result": 1}');
      }
    });
  });
};

module.exports = handler;
