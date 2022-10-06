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
@import './infoMenu.scss';
</style>