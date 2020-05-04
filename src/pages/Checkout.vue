<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <section class="checkout center">
      <div class="checkout_caption">01. Shipping Address</div>
      <div class="checkout_section">
        <div class="checkout_block">
          <div class="checkout_block_height">
            <h3>Check as a guest or register</h3>
            <p>Register with us for future convenience</p>
            <label class="radio">
              <input type="radio" name="checkout">
              <span class="checkout_input">checkout as guest</span>
            </label><br>
            <label class="radio">
              <input type="radio" name="checkout" checked>
              <span class="checkout_input">register</span>
            </label>
            <h3>register and save time!</h3>
            <p>Register with us for future convenience</p>
            <p>
              <i class="fas fa-angle-double-right"></i>
              Fast and easy checkout<br>
              <i class="fas fa-angle-double-right"></i>
              Easy access to your order history and status</p>
          </div>
          <button>Continue</button>
        </div>
        <div class="checkout_block">
          <div class="checkout_block_height">
            <h3>Already registed?</h3>
            <p>Please log in below</p>
            <form action="#">
              <label>EMAIL ADDRESS<sup class="required_field">*</sup>
                <input type="email" class="login_field" required>
              </label>
              <label>PASSWORD<sup class="required_field">*</sup>
                <input type="password" class="login_field" required>
              </label>
              <p class="required_field">* Required Fields</p>
              <button>Log in</button>
          <span class="forgot_pass"><a href="#">Forgot Password?</a></span>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="checkout center">
      <div class="checkout_caption">02. BILLING INFORMATION </div>
      <div class="checkout_section"></div>
    </section>
    <section class="checkout center">
      <div class="checkout_caption">03. SHIPPING INFORMATION </div>
      <div class="checkout_section"></div>
    </section>
    <section class="checkout center">
      <div class="checkout_caption">04. SHIPPING METHOD </div>
      <div class="checkout_section"></div>
    </section>
    <section class="checkout center">
      <div class="checkout_caption">05. PAYMENT METHOD </div>
      <div class="checkout_section"></div>
    </section>
    <section class="checkout center">
      <div class="checkout_caption">06. ORDER REVIEW</div>
      <div class="checkout_section"></div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  name: 'Checkout',
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="sass">
.checkout
  padding-bottom: 30px!important
  &:first-of-type
    margin-top: 96px
  &:last-of-type
    margin-bottom: 89px
  &_caption
    font-size: 16px
    font-weight: bold
    color: #222222
    text-align: left
    text-transform: uppercase
  &_section
    display: flex
    padding-top: 6px
    padding-bottom: 25px
    border-bottom: 1px solid #e8e8e8
  &_block
    padding-left: 35px
    width: 50%
    padding-bottom: 44px
    &_height
      //padding-top: 32px
      height: 340px
    & h3
      font-size: 13px
      color: #222222
      text-transform: uppercase
      padding-bottom: 8px
      padding-top: 30px
    & p
      font-size: 13px
      color: #b3b2b2
      padding-bottom: 23px
      display: block
      line-height: 24px
    & label
      font-size: 12px
      color: #222222
      text-transform: uppercase
    & button
      padding: 19px 54px
      cursor: pointer
      height: 50px
      background-color: $bgColor
      border: 1px solid #eaeaea
      font-size: 14px
      font-weight: bold
      color: #4a4a4a
      text-transform: uppercase
      +trans(all, .3s)
      &:hover
        background-color: #b2b2b2
  &_input
    position: relative
    display: block
    padding: 0 0 0 27px
    cursor: pointer
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 14px
      height: 14px
      border: 2px solid #555555
      box-sizing: border-box
      border-radius: 14px
      background: $bgColor
    &:after
      content: ''
      position: absolute
      top: 4px
      left: 4px
      width: 6px
      height: 6px
      border-radius: 50%
      background: $darkColor
      box-shadow: inset 0 1px 1px rgba(0,0,0,.5)
      opacity: 0
      transition: .2s
    &:hover
      @extend .color

.radio input
  position: absolute
  z-index: -1
  opacity: 0
  margin: 10px 0 0 7px
  &:checked + .checkout_input:after
    opacity: 1
    outline: none

.required_field
  color: #ff0d0d!important

.login_field
  @extend .service_input
  margin-top: 10px

.forgot_pass a
  font-size: 14px
  color: $darkColor
  padding-left: 32px
  &:hover
    color: $selectColor
</style>
