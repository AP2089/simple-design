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
import Sprite from '@/components/ui/Sprite';

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
.main-contact {
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5px 0 0 39px;
  position: relative;

  &__phone-icon {
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 5px;
    left: 0;
    fill: #000000;
  }

  &__gist {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.2;
    color: #3B3B3B;
    margin-bottom: 2px;
  }

  &__gist-link {
    text-decoration: none;
    color: inherit;
    transition: color .5s;

    &:hover {
      color: #BD7048;
      text-decoration: none;
    }
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.2;
    color: rgba(59, 59, 59, 0.5);
  }
}
</style>