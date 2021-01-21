## About project
Author: Ivanova Zoya <mailto:ivanova.zoya.r@gmail.com>
This website is made on Vue.js for study and portfolio purposes 
and shows some basic e-shop functional, such as dynamic catalog, 
products filtering and cart handling.

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Start backend server
```
nodemon server/server
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Using Popup window
```
<Popup ref="popup" [btnTitle="Add to cart" @popupBtnAction="addTocart"] >
Custom text here...
</Popup>

methods: {
    showPopup(time) {
          this.$refs.popup.showPopup(time);
        },
    }
```
