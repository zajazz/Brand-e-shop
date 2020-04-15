<template>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<div>
<Promo></Promo>
<Offer></Offer>
<section>
  <div class="title center">
    <h4 class="title__h4">Fetured Items</h4>
    <p class="subtitle">Shop for items based on what we featured in this week</p>
  </div>
  <div class="product-box center">
    <Item></Item>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/2.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/3.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/4.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/5.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/6.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html">
        <img alt="item" class="product__img" src=  "../assets/img/cat/7.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
    <div class="product">
      <a href="/single.html  ">
        <img alt="item" class="product__img" src=  "../assets/img/cat/8.png">
      </a>
      <div class="product__content">
        <a class="product__title" href="/single.html">Mango People T-shirt</a>
        <p class="product__price">$52.00</p>
      </div>
      <!-- Кнопка Add to cart -->
      <a class="add_to_cart" href="#">
        <img alt="cart" class="cart_img" src=  "../assets/img/cart_wh.svg">
        <span class="atc_text">Add to Cart</span>
      </a>
    </div>
  </div>
  <div class="action center">
    <a class="action__button" href="/product.html">
      <span class="action_button__text">Browse All Product</span>
      <img alt="my account" class="action_button__point" src="../assets/img/arrow_right.png">
    </a>

  </div>
</section>
<Special></Special>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue';

import Promo from '../components/Promo.vue';
import Offer from '../components/Offer.vue';
import Special from '../components/Special.vue';
import Item from '../components/ProductItem.vue';

export default {
  name: 'Home',
  components: {
    Item,
    Special,
    Offer,
    Promo,
    // HelloWorld,
  },
};
</script>

<style lang="sass">
.title
  padding-top: 100px
  padding-bottom: 52px
  &__h4
    font-size: 30px
    font-weight: bold
    color: #222222
    text-align: center
    letter-spacing: 0.03em
    padding-bottom: 14px

.subtitle
  font-size: 14px
  color: #9f9f9f
  text-align: center
  letter-spacing: 0.03em

.product-box
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-content: flex-start

.action
  margin-top: 79px
  margin-bottom: 113px
  display: flex
  justify-content: center
  &__button
    height: 48px
    background-color: $selectColor
    display: flex
    align-items: center
    &:hover
      background-color: $darkSelect
  &_button__text
    font-size: 16px
    font-weight: bold
    color: $bgColor
    letter-spacing: 0.03em
    margin-left: 24px
    line-height: 14px
  &_button__point
    height: 7px
    width: 15px
    margin-right: 19px
    margin-left: 9px

</style>
