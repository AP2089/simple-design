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
.main-menu {
  padding-top: 5px;
  
  &__list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0 45px 0 0;
    padding: 0 0 10px 0;
    line-height: 1.2;
    position: relative;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    transition: color .5s;

    &:after {
      display: block;
      content: '';
      width: 0;
      height: 1px;
      background-color: #BD7048;
      position: absolute;
      bottom: 0;
      right: 0;
      transition: width .5s;
    }

    &:hover,
    &.active {
      text-decoration: none;
      color: #BD7048;

      &:after {
        width: 60%;
      }
    }

    &.active {
      font-weight: 600;
    }
  }
}
</style>