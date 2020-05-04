<template>
<div>
<Promo></Promo>
<Offer></Offer>
<section>
  <div class="title center">
    <h4 class="title__h4">Featured Items</h4>
    <p class="subtitle">Shop for items based on what we featured in this week</p>
  </div>
  <ProductBox :qty="8"/>
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
import Promo from '../components/Promo.vue';
import Offer from '../components/Offer.vue';
import Special from '../components/Special.vue';
import ProductBox from '../components/ProductBox.vue';

export default {
  name: 'Home',
  components: {
    ProductBox,
    Special,
    Offer,
    Promo,
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
