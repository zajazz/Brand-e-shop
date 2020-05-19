<template>
  <header class="header center">
    <div class="header__left">
      <router-link class="logo" to="/">
        <img alt="logo" class="logo__img" src="../assets/img/logo.png">
        BRAN<span class="logo__color">D</span>
      </router-link>
      <Search ref="search"/>
    </div>
    <div class="header__right">
      <CartDrop />
      <a class="button" href="#"><span class="button__text">My Account</span>
        <i class="fas fa-sort-down button__point"></i>
      </a>
    </div>
    </header>
</template>

<script>
import CartDrop from './CartDrop.vue';
import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search,
    CartDrop,
  },
};
</script>

<style lang="sass">
/*.logo
  see App.vue */
.drop
  background-color: $bgColor
  border-radius: 5px
  padding-left: 20px
  padding-right: 20px
  padding-bottom: 8px
  display: none
  position: absolute
  top: 51px
  border: 1px solid #e8e8e8
  z-index: 100
.header
  height: 100px
  background-color: $bgColor
  border: 1px solid #ececec
  box-shadow: 0 0 10px 0 #000000
  display: flex
  justify-content: space-between
  align-items: center

  &__left
    display: flex
    align-items: center

  &__right
    display: flex
    align-items: flex-end

  &__cart
    margin-right: 26px
    height: 29px
    width: 32px

  &__input
    height: 38px
    width: 280px
    background-color: $bgColor
    border: 1px solid #e6e6e6
    padding: 14px 16px

  &__search
    +cc()
    height: 38px
    width: 36px
    background-color: $bgColor
    border: solid #e6e6e6
    border-width: 1px 1px 1px 0
    border-radius: 0 3px 3px 0
    cursor: pointer
    +trans(all, .3s)
    & img
      +trans(all, .3s)
    &:hover
      background-color: #d6d6d6
    &:hover img
      transform: scale(1.15)
      filter: brightness(.5)

.browse
  display: flex
  align-items: center
  height: 38px
  width: 87px
  border: solid #e6e6e6
  border-width: 1px 0 1px 1px
  border-radius: 3px 0 0 3px
  background-image: linear-gradient(180deg, #f9f9f9 0%, #f5f5f5 100%)
  position: relative
  transition: all .3s
  &:hover
    background-image: linear-gradient(180deg, #f1f1f1 0%, #e0e0e0 100%)
  &__point
    color: #838383
    margin-right: 9px
    font-size: 14px
    padding-bottom: 4px
    transition: all .3s
  &:hover &__point
    transform: rotate(180deg)

  &__text
    font-size: 14px
    font-weight: 300
    color: #222222
    letter-spacing: 0.03em
    line-height: 32px
    margin-left: 15px
    margin-right: 8px

  &:hover .drop
    display: flex

  &_drop
    position: absolute
    top: 36px !important
    z-index: 1
    border: none !important

    &::after
      content: ''
      position: absolute
      left: 67px
      top: -25px
      border-width: 15px 7px 15px
      border-style: solid
      border-color: transparent
      border-bottom: 10px solid $bgColor
.button
  height: 38px
  width: 130px
  background-color: $selectColor
  display: flex
  align-items: center
  justify-content: flex-end
  +trans(all, .3s)
  &:hover
    background-color: $darkSelect
  &__text
    font-size: 15px
    color: $bgColor
    letter-spacing: 0.03em
    line-height: 32px
  &__point
    margin-right: 12px
    margin-left: 9px
    font-size: 14px
    color: #ffffff
    padding-bottom: 4px
    transition: all .3s
  &:hover &__point
    transform: rotate(180deg)
</style>
