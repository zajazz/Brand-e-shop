<template>
  <div class="drop">
    <div class="drop__chapter">
      <h3 class="drop__h3">{{ category.name }}</h3>
      <ul class="drop__ul">
        <li v-for="sub of subs" :key="sub.id">
          <router-link class="drop__link" :to="link(category.id, sub.id)">
            {{ sub.name }} </router-link>
        </li>
      </ul>
    </div>
    <div class="drop__chapter">
      <h3 class="drop__h3">Temporary</h3>
      <ul class="drop__ul">
        <li><a class="drop__link" href="#">Multiple</a></li>
        <li><a class="drop__link" href="#">Chapter</a></li>
        <li><a class="drop__link" href="#">Example</a></li>
      </ul>
      <h3 class="drop__h3">Temporary</h3>
      <ul class="drop__ul">
        <li><a class="drop__link" href="#">Multiple</a></li>
        <li><a class="drop__link" href="#">Chapter</a></li>
        <li><a class="drop__link" href="#">Example</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavDrop',
  props: ['category', 'subs'],
  data() {
    return {
    };
  },
  methods: {
    link(catId, subId) {
      return `/catalog/${catId}/${subId}`;
    },
  },
  mounted() {
  },
};
</script>

<style lang="sass">
.drop
  &__chapter
    width: 234px
    margin-right: 46px

    &:last-of-type
      margin-right: 0
  &__h3
    font-size: 14px
    color: #232323
    letter-spacing: 0.03em
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    padding-bottom: 8px
    margin-top: 21px
    cursor: pointer
    &:hover
      color: $selectColor

  &__ul
    list-style-type: none

  &__link
    font-size: 14px
    color: #646464
    letter-spacing: 0.03em
    line-height: 28px

    &:hover
      color: $selectColor

</style>
