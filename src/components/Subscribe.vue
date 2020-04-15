<template>
  <div class="subscribe center">
    <div class="subscribe_left">
      <img alt="" class="feedback__img" src="src/assets/img/feedback.png">
      <div class="feedback">
        <p class="feedback-text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
          condimentum a. Aliquam condimentum mattis neque sed pretium”
        </p>
        <p class="feedback-author color">Bin Burhan</p>
        <p class="feedback-author-add">Dhaka, Bd</p>
        <div style="display: flex;">
          <a class="feedback-switch" href="#"></a>
          <a class="feedback-switch fb_activ" href="#"></a>
          <a class="feedback-switch" href="#"></a>
        </div>
      </div>

    </div>
    <div class="subscribe_right">
      <div class="cta">
        <p class="cta__1">Subscribe</p>
        <p class="cta__2">FOR OUR NEWsLETTER AND PROMOTION</p>
      </div>
      <form action="#" class="subscribe__form">
        <input class="subscribe__input" placeholder="Enter Your Email" type="email">
        <button class="subscribe__button">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
};
</script>

<style scoped lang="sass">
.subscribe
  height: 438px
  /* eslint-disable-next-line vue/max-attributes-per-line */
  background-image: url(../assets/img/bottom_bg_gr.png), url(../assets/img/bottom_bg.png)
  background-repeat: no-repeat
  background-position: center
  display: flex
  justify-content: center
  margin-bottom: 109px
  &_left
    padding-top: 111px
    display: flex
    justify-content: flex-end
    padding-right: 0
    width: 569px
  &_right
    padding-left: 92px
    display: flex
    flex-direction: column
    justify-content: center
    width: 478px
  &__input
    height: 46px
    width: 334px
    background-color: #e1e1e1
    border-radius: 23px
    border-style: none
    padding: 18px 78px 18px 28px
    &:hover
      border: 1px solid #b2b2b2
      background-color: #efefef
  &__button
    height: 46px
    width: 104px
    background-color: $selectColor
    border-radius: 0 23px 23px 0
    border-style: none
    position: absolute
    left: 282px
    font-size: 14px
    color: $bgColor
    text-align: center
    letter-spacing: 0.03em
    cursor: pointer
    +trans(all, .3s)
    &:hover
      background-color: #ff99aa
  &__form
    display: flex
    position: relative

.feedback
  padding-top: 12px
  margin-right: 33px
  &__img
    height: 83px
    width: 83px
    border-radius: 83px
    margin-right: 28px
  &-author
    padding-top: 10px
    font-size: 16px
    font-weight: bold
    text-align: left
    letter-spacing: 0.03em
    line-height: 26px
    &-add
      font-size: 12px
      font-weight: 300
      color: #222224
      text-align: left
      letter-spacing: 0.03em
      line-height: 14px
  &-text
    font-size: 16px
    font-style: italic
    color: $darkColor
    text-align: left
    letter-spacing: 0.03em
    line-height: 26px
  &-switch
    display: block
    height: 4px
    width: 38px
    background-color: #d6d6d6
    margin-top: 41px
    margin-right: 13px
    &:hover
      background-color: $selectColor

.fb_activ
  background-color: $selectColor !important

.cta
  padding: 0 0 35px
  &__2
    font-size: 14px
    color: #222224
    text-align: center
    letter-spacing: 0.03em
    line-height: 24px
    text-transform: uppercase
  &__1
    font-size: 24px
    color: #222224
    text-align: center
    letter-spacing: 0.03em
    line-height: 34px
    text-transform: uppercase
</style>
