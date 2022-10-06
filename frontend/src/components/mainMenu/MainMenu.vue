<template>
  <nav class="main-menu"
    v-if="items.length > 0"
  >
    <ul class="main-menu__list">
      <li
        class="main-menu__item"
        v-for="item in items"
        :key="item.url"
      >
        <router-link
          :to="item.url"
          class="main-menu__link"
        >
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    items: {
      type: Array,
      default: []
    },
  }
}
</script>

<style lang="scss" scoped>
@import './mainMenu.scss';
</style>