/**
 * @param cart - содержимое файла userCart.json
 * @param req - запрос, содержащий объект добавляемого товара
 * @return {string} - объект с новым содержимым корзины
 */
const add = (cart, req) => {
  console.log('cart.add');
  cart.push(req.body);
  // cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};

/**
 *
 * @param cart - array from userCart.json
 * @param req {Object} - req.body.quantity
 * @return {string} - changed cart
 */
const change = (cart, req) => {
  console.log('cart.change', req.body);
  const find = cart.find(el => el.id === +req.params.id);
  find.quantity = req.body.quantity;
  return JSON.stringify(cart, null, 4);
};


const del = (cart, req) => {
  console.log('cart.del');
  const find = cart.find(el => el.id === +req.params.id);
  cart.splice(cart.indexOf(find), 1);
  return JSON.stringify(cart, null, 4);
};

module.exports = {
  add,
  change,
  del,
};
