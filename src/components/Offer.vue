<template>
  <section class="offer center">
    <router-link to="/catalog" class="offer__block offer1_img square">

      <div class="offer__content">
        <h5 class="offer__h5">Hot Deal</h5>
        <h4 class="offer__h4">FOR MEN</h4>
      </div>
    </router-link>
    <router-link to="/catalog" class="offer__block offer2_img rectangle">
      <div class="offer__content">
        <h5 class="offer__h5">LUXIROUS & trendy </h5>
        <h4 class="offer__h4">ACCESORIES</h4>
      </div>
    </router-link>
    <router-link to="/catalog" class="offer__block offer3_img rectangle">
      <div class="offer__content">
        <h5 class="offer__h5">30% offer</h5>
        <h4 class="offer__h4">women</h4>
      </div>
    </router-link>
    <router-link to="/catalog" class="offer__block offer4_img square">
      <div class="offer__content">
        <h5 class="offer__h5">new arrivals </h5>
        <h4 class="offer__h4">FOR kids</h4>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'Offer',
};
</script>

<style scoped lang="sass">
.offer
  margin-top: 98px
  height: 823px
  background-color: $bgColor
  display: flex
  flex-wrap: wrap
  flex-direction: column
  justify-content: space-between
  align-content: space-between
  &__block
    width: 560px
    border: 0
    display: flex
    justify-content: flex-start
    align-items: flex-start
    padding-top: 26px
    background-repeat: no-repeat
    background-position: center
    +trans(all, .3s)
    &:hover
      filter: contrast(1.3)
  &__content
    background-color: $bgColor
    padding: 18px
  &__h5
    font-size: 18px
    font-weight: 900
    color: #222222
    letter-spacing: 0.03em
    text-transform: uppercase
  &__h4
    font-size: 30px
    font-weight: 900
    color: $selectColor
    letter-spacing: 0.03em
    text-transform: uppercase
  &1_img
    background-image: url(../assets/img/offer1.png)
  &2_img
    background-image: url(../assets/img/offer2.png)
  &3_img
    background-image: url(../assets/img/offer3.png)
  &4_img
    background-image: url(../assets/img/offer4.png)

.square
  height: 542px

.rectangle
  height: 261px
</style>
