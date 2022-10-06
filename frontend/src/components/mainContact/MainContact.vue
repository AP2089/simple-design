<template>
  <div class="main-contact">
    <Sprite
      name="main-phone"
      variant="main-contact__phone-icon"
    />
    <div class="main-contact__gist">
      <a :href="'tel:' + phone" class="main-contact__gist-link" v-phoneFormat>{{phone}}</a>
    </div>
    <div class="main-contact__description">{{time}}</div>
  </div>
</template>

<script>
import phoneFormat from '@/directives/phoneFormat';
import Sprite from '@/components/ui/sprite';

export default {
  name: 'MainContact',
  directives: {
    phoneFormat
  },
  components: {
    Sprite
  },
  props: {
    phone: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import './mainContact.scss';
</style>