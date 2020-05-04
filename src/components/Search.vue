<template>
  <form action="#" class="header__form" @submit.prevent="search()">
    <div class="browse">
      <a class="browse__text" href="#">Browse</a>
      <i class="fas fa-sort-down browse__point"></i>
      <!-- Выпадающее меню -->
      <div class="drop browse_drop">
        <div class="drop__chapter">
          <h3 class="drop__h3">Women</h3>
          <ul class="drop__ul">
            <li><a class="drop__link" href="#">Dresses </a></li>
            <li><a class="drop__link" href="#">Tops </a></li>
            <li><a class="drop__link" href="#">Sweaters/Knits </a></li>
            <li><a class="drop__link" href="#">Jackets/Coats </a></li>
            <li><a class="drop__link" href="#">Blazers Denim </a></li>
            <li><a class="drop__link" href="#">Leggings/Pants </a></li>
            <li><a class="drop__link" href="#">Skirts/Shorts </a></li>
            <li><a class="drop__link" href="#">Accessories</a></li>
          </ul>
          <h3 class="drop__h3">Men</h3>
          <ul class="drop__ul">
            <li><a class="drop__link" href="#">Jackets/vests</a></li>
            <li><a class="drop__link" href="#">Tees/Tank tops</a></li>
            <li><a class="drop__link" href="#">Shirts/Polos</a></li>
            <li><a class="drop__link" href="#">Sweaters</a></li>
            <li><a class="drop__link" href="#">Sweatshirts/Hoodies</a></li>
            <li><a class="drop__link" href="#">Blazers</a></li>
            <li><a class="drop__link" href="#">Jackets/vests</a></li>
          </ul>
        </div>
      </div>

    </div>
    <input class="header__input" placeholder="Search for Item..."
           type="text" v-model="searchSrting">
    <button class="header__search" @submit.prevent="search()">
      <img alt="search" src="../assets/img/search.png"></button>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchSrting: '',
      filtered: [],
    };
  },
  methods: {

  },
};
</script>

<style scoped lang="sass">
.header__form
  display: flex
  align-items: center
</style>
