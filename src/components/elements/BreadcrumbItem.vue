<template>
<span v-if="route.name">
  &nbsp;/
<!-- regular link -->
    <router-link v-if="!route.meta.bcDynamic" :to="{name: route.name}" class="breadcrumb__line">
      {{route.meta.bcLinkText}}
    </router-link>

<!-- dynamic link -->
    <router-link v-if="route.meta.bcDynamic"
                 :to= "{name: route.name, params: {id: $route.params.id}}" class="breadcrumb__line">
      <template v-if="value">
        {{ formattedValue }}
      </template>
      <template v-if="!value">
        {{ loadingText }}
      </template>
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'BreadcrumbItem',
  props: ['route'],
  beforeCreate() {
    this.$options.computed.value = () => {
      let value = null;
      if (this.route.meta.bcGetter) {
        value = this.$store.getters[this.route.meta.bcGetter];
      }
      return value;
    };
  },
  computed: {
    formattedValue() {
      return this.route.meta.bcLinkText(this.value);
    },
    loadingText() {
      const loadingText = this.route.meta.bcLoadingText;
      return loadingText || 'Loading...';
    }
  },

};
</script>

<style lang="sass">

</style>
