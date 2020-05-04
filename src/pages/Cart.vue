<template>
<div>
  <Breadcrumb></Breadcrumb>
  <section class="table center">
    <div class="table_caption table_row">
      <div class="table_left">Product Details</div>
      <div class="table_right">
        <span>unite Price</span>
        <span>Quantity</span>
        <span>shipping</span>
        <span>Subtotal</span>
        <span>ACTION</span>
      </div>
    </div>
    <CartRow></CartRow>
    <div class="table_row">
      <div class="table_left">
        <a href="/single.html">
          <img src="../assets/img/cat/cart2.png" alt="Mango People T-shirt" class="table_img"></a>
        <div class="table_desc">
          <h3><a href="/single.html">Mango People T-shirt</a></h3>
          <div class="table_product_specs">
            <p><b>Color:</b> Red</p>
            <p><b>Size:</b> XXL</p>
          </div>
        </div>
      </div>
      <div class="table_right table_spec">
        <span>150$</span>
        <span><input type="number" required min="1" value="2"></span>
        <span>FREE</span>
        <span>300$</span>
        <span><i class="fas fa-times-circle"></i></span>
      </div>
    </div>
    <div class="table_row">
      <div class="table_left">
        <a href="#">
          <img src="../assets/img/cat/cart3.png" alt="Mango People T-shirt" class="table_img"></a>
        <div class="table_desc">
          <h3><a href="#">Mango People T-shirt</a></h3>
          <div class="table_product_specs">
            <p><b>Color:</b> Red</p>
            <p><b>Size:</b> XXL</p>
          </div>
        </div>
      </div>
      <div class="table_right table_spec">
        <span>150$</span>
        <span><input type="number" required min="1" value="2"></span>
        <span>FREE</span>
        <span>300$</span>
        <span><i class="fas fa-times-circle"></i></span>
      </div>
    </div>
    <div class="table_row table_buttons">
      <button>cLEAR SHOPPING CART</button>
      <button>cONTINUE sHOPPING</button>
    </div>
    <div class="table_row table_service">
      <div class="service_div">
        <h3>Shipping Address</h3>
        <select class="country" >
          <option value="female">Австралия</option>
          <option value="male">Австрия</option>
          <option value="female">Азербайджан</option>
          <option value="male" selected>Bangladesh</option>
        </select>
        <input type="text" class="service_input" placeholder="State">
        <input type="text" class="service_input" placeholder="Postcode / Zip">
        <button>get a quote</button>
      </div>
      <div class="service_div">
        <h3>coupon discount</h3>
        <p>Enter your coupon code if you have one</p>
        <input type="text" class="service_input" placeholder="State">
        <button>Apply coupon</button>
      </div>
      <div class="table_total">
        <p>Sub total <span>$900</span></p>
        <h3>GRAND TOTAL <span class="color">$900</span></h3>
        <div class="line"></div>
        <router-link to="/checkout"><button>proceed to checkout</button></router-link>
      </div>
    </div>
  </section>

</div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import CartRow from '../components/CartRow.vue';

export default {
  name: 'Cart',
  components: {
    CartRow,
    Breadcrumb,
  },
};
</script>

<style lang="sass">
.table
  position: relative
  margin-top: 65px
  margin-bottom: 80px
  &_caption
    line-height: 12px
    font-size: 13px
    font-weight: bold
    color: #222222
    letter-spacing: -0.01em
    text-transform: uppercase
  &_buttons
    padding-top: 20px
    border-bottom: none!important
    & button
      cursor: pointer
      height: 50px
      background-color: $bgColor
      border: 1px solid #eaeaea
      padding: 19px 39px
      font-size: 14px
      font-weight: bold
      color: #4a4a4a
      text-transform: uppercase
      +trans(all, .3s)
      &:hover
        background-color: #b2b2b2
  &_service
    margin-top: 38px
    margin-bottom: -45px !important
    display: flex
    flex-wrap: wrap
    border-bottom: none!important
    & h3
      font-size: 16px
      font-weight: bold
      color: $darkColor
      text-transform: uppercase
      padding-bottom: 22px
  &_total
    text-align: right
    height: 214px
    width: 360px
    background-color: #f5f3f3
    padding: 40px 43px
    & p
      font-size: 11px
      color: #4a4a4a
      text-transform: uppercase
      padding-bottom: 14px
      display: block
    & span
      padding-left: 20px
    & button
      height: 50px
      width: 100%
      background-color: $selectColor
      margin-top: 17px
      border: none
      font-size: 16px
      font-weight: bold
      color: $bgColor
      text-transform: uppercase
      cursor: pointer
      &:hover
        background-color: #656565
        border: 1px solid #e2e2e2

.service_div
  flex-grow: 1
  display: flex
  flex-direction: column
  align-items: flex-start
  margin-right: 35px
  & button
    height: 35px
    background-color: $bgColor
    padding: 12px 15px
    border: 1px solid #eaeaea
    font-size: 11px
    font-weight: bold
    color: #4a4a4a
    text-transform: uppercase
    margin-top: 5px
    margin-bottom: 20px
    cursor: pointer
    +trans(all, .3s)
    &:hover
      background-color: #b2b2b2
  & p
    display: block
    padding-bottom: 24px
    font-size: 14px
    font-weight: 300
    color: $darkColor
    text-align: left

.line
  height: 1px
  width: 100%
  background-color: #e2e2e2

.country
  @extend .service_input
  display: block
  position: relative
</style>
