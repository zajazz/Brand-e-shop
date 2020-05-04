'use strict';
const categories = [
  { id: 1, name: 'Home', },
  { id: 2, name: 'Man', },
  { id: 3, name: 'Woman', },
  { id: 4, name: 'Kids', },
  { id: 5, name: 'Accessories', },
  { id: 6, name: 'Featured', }, // popular
  { id: 7, name: 'Hot Deals', }, // special price
];

const subcategories = [
  { id: 1, name: 'Dresses', },
  { id: 2, name: 'Sweaters/Knits', },
  { id: 3, name: 'Tops', },
  { id: 4, name: 'Skirts/Shorts', },
  { id: 5, name: 'Jackets/Coats', },
  { id: 6, name: 'Blazers', },
  { id: 7, name: 'Denim', },
  { id: 8, name: 'Leggings/Pants', },
];

const brands = [
  { id: 1, brand: 'Zara', },
  { id: 2, brand: 'Mango', },
  { id: 3, brand: 'Kenzo', },
  { id: 4, brand: 'Lacoste', },
  { id: 5, brand: 'Marc Jacobs', },
  { id: 6, brand: 'MOSCHINO', },
];

const designers = [
  { id: 1, name: 'BINBURHAN', },
  { id: 2, name: 'Marc Jacobs', },
  { id: 3, name: 'Cherutti', },
];

const sizes = [
  {id: 1, size: 'XS'},
  {id: 2, size: 'S'},
  {id: 3, size: 'M'},
  {id: 4, size: 'L'},
  {id: 5, size: 'XL'},
  {id: 6, size: 'XXL'},
];

const colors = [
  {id: 1, color: 'red', code: '#ef5b70'},
  {id: 2, color: 'grey', code: '#5e5e5e'},
  {id: 3, color: 'black', code: '#222'},
  {id: 4, color: 'white', code: '#fff'},
];

const materials = [
  {id: 1, material: 'cotton', },
  {id: 2, material: 'Cashmere', },
  {id: 3, material: 'Fur', },
  {id: 4, material: 'Leather', },
  {id: 5, material: 'Viscose', },

];

const goods = [
  { id: 123, category: 2, subcategory: 1, brand: 1, name: 'PEOPLE Dress',
    price: 52, sold: 0, hotdeal: 0, rating: 5,
    description: "Compellingly actualize fully researched processes before proactive outsourcing. " +
    "Progressively syndicate collaborative architectures before cutting-edge services. " +
    "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 1, sizes: [2,3,4,5,6], colors: [1,2,3,4], materials: [1] },

  { id: 124, category: 3, subcategory: 2, brand: 2, name: 'PEOPLE sweater',
    price: 34, sold: 0, hotdeal: 1, rating: 5,
    description: "Compellingly actualize fully researched processes before proactive outsourcing. ",
    designer: 2, sizes: [1,3,4,6], colors: [1,2,4], materials: [2] },

  { id: 125, category: 4, subcategory: 0, brand: 3, name: 'boy\'s t-shirt',
    price: 55, sold: 0, hotdeal: 0, rating: 5,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 3, sizes: [1], colors: [2], materials: [1] },

  { id: 126, category: 5, subcategory: 0, brand: 4, name: 'summer bag',
    price: 43, sold: 0, hotdeal: 0, rating: 5,
    description: "Progressively syndicate collaborative architectures before cutting-edge services. " +
      "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 1, sizes: [2,3,4], colors: [2,3], materials: [4] },

  { id: 127, category: 2, subcategory: 3, brand: 5, name: 'asymmetrical t-shirt',
    price: 12, sold: 0, hotdeal: 1, rating: 5,
    description: "Progressively syndicate collaborative architectures before cutting-edge services.",
    designer: 2, sizes: [2,3,4,6], colors: [2,3,4], materials: [5] },

  { id: 128, category: 3, subcategory: 4, brand: 6, name: 'PEOPLE skirt',
    price: 22, sold: 0, hotdeal: 0, rating: 3.5,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 3, sizes: [2,3,4], colors: [1,2], materials: [1] },

  { id: 129, category: 4, subcategory: 0, brand: 1, name: 'warm dress',
    price: 55, sold: 0, hotdeal: 0, rating: 4,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 1, sizes: [1], colors: [1,4], materials: [1] },

  { id: 130, category: 5, subcategory: 0, brand: 2, name: 'metal buckle belt',
    price: 105, sold: 0, hotdeal: 1, rating: 4.5,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 2, sizes: [3], colors: [4], materials: [4] },

  { id: 131, category: 2, subcategory: 5, brand: 3, name: 'PEOPLE jacket',
    price: 112, sold: 0, hotdeal: 1, rating: 3.5,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 3, sizes: [2,3,4,5], colors: [1,2,3], materials: [4] },

  { id: 132, category: 3, subcategory: 6, brand: 4, name: 'old-fashion blazer',
    price: 98, sold: 0, hotdeal: 0, rating: 3,
    description: "Completely visualize parallel core competencies rather than exceptional portals.",
    designer: 1, sizes: [2,4], colors: [2,3], materials: [1,3] },

];

let categoriesJson = JSON.stringify({categories, subcategories, brands, designers, colors, sizes, materials}, null, 4);
const fs = require('fs');
fs.writeFile('categories.json', categoriesJson, err => console.log(err));
fs.writeFile('goods.json', JSON.stringify(goods, null, 4), err => console.log(err));
