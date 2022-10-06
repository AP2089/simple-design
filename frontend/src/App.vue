<template>
  <router-view/>
</template>

<script>
import useAddSpriteSvg from '@/hooks/useAddSpriteSvg';

export default {
  name: 'App',
  setup() {
    useAddSpriteSvg('img/sprite.svg');
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>