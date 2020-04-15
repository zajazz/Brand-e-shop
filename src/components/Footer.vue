<template>
  <footer>
  <div class="footer center">
    <div class="footer_left">
      <a class="logo" href="/temlate.html">
        <img alt="logo" class="logo__img" src="../assets/img/logo.png">
        BRAN<span class="logo__color">D</span>
      </a>
      <div class="footer__text">
        <p class="footer_p">
          Objectively transition extensive data rather than cross functional solutions.
          Monotonectally syndicate multidisciplinary materials before go forward benefits.
          Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
        <p>Efficiently plagiarize 24/365 action items and focused infomediaries.
          Distinctively seize superior initiatives for wireless technologies.
          Dynamically optimize.</p>
      </div>
    </div>
    <nav class="footer_right">
      <div class="footer-menu">
        <h3 class="footer-menu__caption color">COMPANY</h3>
        <div class="footer-menu__items">
          <a href="/temlate.html">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">How It Works</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="footer-menu">
        <h3 class="footer-menu__caption color">INFORMATION</h3>
        <div class="footer-menu__items">
          <a href="#">Tearms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">How to Buy</a>
          <a href="#">How to Sell</a>
          <a href="#">Promotion</a>
        </div>
      </div>
      <div class="footer-menu">
        <h3 class="footer-menu__caption color">SHOP CATEGORY</h3>
        <div class="footer-menu__items">
          <a href="/product.html">Men</a>
          <a href="/product.html">Women</a>
          <a href="/product.html">Child</a>
          <a href="/product.html">Apparel</a>
          <a href="/product.html">Browse All</a>
        </div>
      </div>
    </nav>
  </div>
  <div class="copyright center">
    <div class="copyright-text">© 2017 Brand All Rights Reserved.</div>
    <div class="social">
      <div class="social__item">
        <a href="http://facebook.com" target="_blank" title="Facebook">
          <img alt="Facebook" src="../assets/img/social/facebook.png"></a>
      </div>
      <div class="social__item">
        <a href="http://twitter.com" target="_blank" title="Twitter">
          <img alt="Twitter" src="../assets/img/social/bird.png"></a>
      </div>
      <div class="social__item">
        <a href="https://www.linkedin.com" target="_blank" title="LinkedIn">
          <img alt="LinkedIn" src="../assets/img/social/in.png"></a>
      </div>
      <div class="social__item">
        <a href="https://pinterest.com/" target="_blank" title="Pinterest">
          <img alt="Pinterest" src="../assets/img/social/pint.png"></a>
      </div>
      <div class="social__item">
        <a href="https://plus.google.com/" target="_blank" title="Google+">
          <img alt="Google+" src="../assets/img/social/g.png"></a>
      </div>
    </div>
  </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="sass">

.footer
  justify-content: flex-start
  display: flex
  margin-bottom: 84px
  &_left
    width: 430px
    margin-right: 60px
  &_right
    display: flex
    justify-content: space-between
  &__text
    padding-top: 29px
    font-size: 14px
    font-weight: 300
    color: #898989
    text-align: left
    letter-spacing: 0.03em
    line-height: 24px
  &_p
    padding-bottom: 20px
    display: block
  &-menu
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-right: 80px
    &__caption
      font-size: 18px
      font-weight: bold
      text-align: right
      letter-spacing: 0.03em
      text-transform: uppercase
    &__items
      margin-top: 45px
      margin-bottom: 13px
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 179px
      & a
        font-size: 16px
        color: #898989
        text-align: left
        letter-spacing: 0.03em
        &:hover
          color: $selectColor

.copyright
  display: flex
  justify-content: space-between
  align-items: center
  height: 79px
  background-color: #e6e6e6
  &-text
    font-size: 16px
    color: #7a7a7a
    letter-spacing: 0.03em

.social
  display: flex
  justify-content: flex-end
  &-img
    align-self: center
  &__item
    height: 32px
    width: 32px
    background-color: $bgColor
    margin-left: 8px
    vertical-align: middle
    cursor: pointer
    +cc()
    &:hover
      background-color: $selectColor
      & img
        filter: brightness(2)
</style>
