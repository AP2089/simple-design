<template>
  <nav class="info-menu">
    <ul class="info-menu__list">
      <li
        class="info-menu__item"
        v-for="item in items"
        :key="item.url"
      >
        <button
          v-if="isStringHasHash(item.url)"
          @click="showModal(item.url)"
          class="info-menu__link"
          :class="{'active': item.isShow}"
        >
          {{item.title}}
        </button>
        <router-link
          v-else
          :to="item.url"
          class="info-menu__link"
        >
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {isStringHasHash} from '@/helpers/hash';

export default {
  name: 'InfoMenu',
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  methods: {
    isStringHasHash,
    showModal(url) {
      this.$emit('controlModal', {
        isShow: true,
        url
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.info-menu {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin: 0 0 4px 0;
    padding: 0;
    line-height: 1.2;
  }

  &__link {
    display: inline;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    color: rgba(59, 59, 59, 0.5);
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    transition: color .5s;

    &:hover,
    &.active {
      color: #000000;
      text-decoration: none;
    }
  }
}
</style>