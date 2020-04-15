<template>
  <div class="cart">
    <a href="/cart.html">
      <img alt="cart" class="header__cart" src="../assets/img/cart_black.svg">
      <!-- Корзина -->
      <div class="cart__drop">
        <div class="cart__items">
          <div class="cart__item">
            <a href="/single.html"><img src="../assets/img/cart2_s.png"
                                        alt="cart_item"></a>
            <div class="cart__item_desc">
              <h3><a href="/single.html">Rebox Zane</a></h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p>1 x $250</p>
            </div>
            <a href="#"><i class="fas fa-times-circle"></i></a>

          </div>
          <div class="cart__item">
            <a href="/single.html"><img src="../assets/img/cart1_s.png"
                                        alt="cart_item"></a>
            <div class="cart__item_desc">
              <h3><a href="/single.html">Rebox Zane</a></h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p>1 x $250</p>
            </div>
            <a href="#"><i class="fas fa-times-circle"></i></a>

          </div>
          <div class="cart__item">
            <a href="/single.html"><img src="../assets/img/cart1_s.png"
                                        alt="cart_item"></a>
            <div class="cart__item_desc">
              <h3><a href="/single.html">Rebox Zane</a></h3>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <p>1 x $250</p>
            </div>
            <a href="#"><i class="fas fa-times-circle"></i></a>

          </div>
        </div>
        <div class="cart__total">
          <div>TOTAL</div>
          <div>$500.00</div>
        </div>
        <a class="cart__checkout" href="/checkout.html">Checkout</a>
        <a class="cart__gtc" href="/cart.html">Go to cart</a>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DropCart',
};
</script>

<style lang="sass">
.cart
  position: relative
  z-index: 1
  &:hover &__drop
    display: flex
  &__items
    //overflow-y: scroll
    width: 100%
    //height: 240px
    display: flex
    align-items: center
    justify-content: flex-start
    flex-direction: column
  &__total
    width: 100%
    display: flex
    justify-content: space-between
    font-size: 16px
    font-weight: bold
    color: #222
    text-transform: uppercase
    margin-top: 19px
  &__checkout
    +cc()
    font-size: 14px
    font-weight: bold
    color: $selectColor
    text-transform: uppercase
    height: 50px
    width: 225px
    background-color: $bgColor
    border: 1px solid $selectColor
    margin-top: 32px
    +trans(all, .3s)
    &:hover
      color: $bgColor
      background-color: $selectColor
  &__gtc
    +cc()
    font-size: 14px
    font-weight: bold
    color: #4a4a4a
    text-transform: uppercase
    height: 50px
    width: 100%
    background-color: $bgColor
    border: 1px solid #eaeaea
    margin-top: 10px
    +trans(all, .3s)
    &:hover
      color: $bgColor
      background-color: #b2b2b2
  &__drop
    position: absolute
    left: -72px
    padding: 20px
    //height: 440px
    width: 262px
    background-color: $bgColor
    border-radius: 5px
    display: none
    flex-direction: column
    align-items: center
    justify-content: space-between
  &__item
    display: flex
    justify-content: flex-start
    width: 100%
    padding-bottom: 16px
    margin-bottom: 16px
    border-bottom: 1px solid rgba(237, 237, 237, 0.75)
    &:hover
      box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.1)
    & i, a
      font-size: 16px
      color: #c0c0c0
      align-self: center
      padding: 0
      +trans(color, .3s)
    & i:hover
      color: #656565
      transform: scale(1.2)
    & img
      margin-right: 14px
      max-height: 85px
      max-width: 72px
    &_desc
      width: 115px
      display: flex
      flex-direction: column
      justify-content: flex-start
      padding-right: 14px
      & i
        font-size: 12px
        color: #e4af48
        padding: 0
      & p
        font-size: 12px
        color: $selectColor
      & h3 a
        font-size: 12px
        font-weight: bold
        color: $darkColor
        text-align: left
        text-transform: uppercase
</style>
