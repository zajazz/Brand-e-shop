<template>
<div>
  <div class="title center"><h4 class="title__h4">About this project</h4></div>
  <div class="info center">
    <div class="info__left">
      <div>
      <img src="../assets/img/author.png" alt="Zoya Ivanova" class="info__photo">
        <a href="https://github.com/izoya/Brand-e-shop" target="_blank">Explore at Github</a>
        <a href="mailto:ivanova.zoya.r@gmail.com">Contact me</a>
      </div>
    </div>
    <div class="info__right">
      <h3>Greetings!</h3>
      <p>I'm Zoya, the developer of this website.
        I've created it for study and portfolio purposes.
      </p>
      <h4>Here's a technology stack and some key features of the project:</h4>
      <ul>
        <li>
          HTML + CSS (via SASS). The layout is made using flex-box technology,
          accordions and dropdowns work without javascript.
        </li>
        <li>
          Vue.js based frontend, including Vuex
        </li>
        <li>
          Simple node.js backend (it only stores and returns catalog and cart ).
        </li>
        <li>Some basic e-shop functional:
          <ul>
            <li>dynamic catalog;</li>
            <li>filter by category, brand, price range;</li>
            <li>cart (you can add, remove products and change quantity).</li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Info',
};
</script>

<style scoped lang="sass">
.title__h4
  padding-top: 40px
  font-size: 30px
  font-weight: bold
  color: #222222
  text-align: center
  letter-spacing: 0.03em
  padding-bottom: 14px
.info
  margin-top: 10px
  margin-bottom: 90px
  display: flex
  justify-content: center
  &__left
    flex-grow: 1
    display: flex
    flex-direction: column
    align-items: flex-end
    padding: 15px
    & div
      text-align: center
      & img
        width: 150px
        height: auto
        margin-bottom: 15px
      & a
        display: block
        padding: 5px 0
  &__right
    margin-left: 35px
    flex-basis: 250px
    flex-grow: 3
    padding: 15px
    & p
      line-height: 25px
      padding: 10px 0 20px
    & h4
      color: #ef5b70
    & ul
      padding: 15px 25px
    & li
      padding: 7px 0 5px 25px
      & ul
        padding-top: 5px

</style>
