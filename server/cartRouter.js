const express = require('express');
const fs = require('fs');
const handler = require('./handler');

const router = express.Router();
const path = require('path');

const projectAddr = path.dirname(__dirname);

// /api/cart
router.get('/', (req, res) => {
  fs.readFile(`${projectAddr}/server/db/userCart.json`, 'utf-8', (err, data) => {
    // there is no cart file
    if (err) {
      // create cart file
      fs.writeFile(`${projectAddr}/server/db/userCart.json`, '', (err) => {
        if (err) {
          res.sendStatus(404, JSON.stringify({result: 0, text: `Unable to create cart file (${err})`}));
        } else {
          data = [];
        }
      });
    }
    // empty cart file
    if (!data) {
      data = [];
    }
    // returns cart data
    res.send(data);
  });
});

router.post('/', (req, res) => {
  handler(req, res, 'add', `${projectAddr}/server/db/userCart.json`);
});
// Request examples:
// localhost:3000/api/cart/123 - req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' - req.query
router.put('/:id', (req, res) => {
  handler(req, res, 'change', `${projectAddr}/server/db/userCart.json`);
});

router.delete('/:id', (req, res) => {
  handler(req, res, 'del', `${projectAddr}/server/db/userCart.json`);
});

module.exports = router;
