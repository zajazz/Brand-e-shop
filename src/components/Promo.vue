<template>
  <div class="promo center">
    <div class="promo__content">
      <h2 class="promo__h2">THE BRAND</h2>
      <h3 class="promo__h3">OF LUXERIOUS <span class="promo__color">FASHION</span></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promo',
};
</script>

<style scoped lang="sass">
.promo
  height: 613px
  background-color: #e8e8e8
  background-image: url(../assets/img/promo.png)
  background-repeat: no-repeat
  background-position: center -51px
  display: flex
  align-items: center
  &__h2
    font-size: 60px
    font-weight: 900
    color: #222222
    letter-spacing: 0.03em
    line-height: 45px
    margin-bottom: 15px
  &__h3
    font-size: 40px
    font-weight: 900
    color: #222222
    letter-spacing: 0.03em
    line-height: 33px
  &__color
    font-size: 40px
    font-weight: 900
    color: $selectColor
    letter-spacing: 0.03em
  &__content
    border-left: 12px solid $selectColor
    padding-left: 12px
</style>
