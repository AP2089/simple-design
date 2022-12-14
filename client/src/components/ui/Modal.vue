<template>
  <Transition
    name="modal"
    @before-enter="onBeforeEnterModal"
    @after-leave="onAfterLeaveModal"
  >
    <div
      class="modal"
      v-if="isShow"
    >
      <div class="modal__container">
        <div
          class="modal__backdrop"
          @click="hideModal"
        ></div>
        <div class="modal__wrap">
          <button
            class="modal__close"
            @click="hideModal"
          >
            <Sprite
              name="main-close"
              variant="modal__close-icon"
            />
          </button>
          <h3
            v-if="heading"
            class="modal__heading"
          >
            {{heading}}
          </h3>
          <div class="modal__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Sprite from '@/components/ui/Sprite';
import {hideScrollbar, showScrollbar} from '@/helpers/scroll';

export default {
  name: 'Modal',
  components: {
    Sprite
  },
  emits: ['controlModal'],
  props: {
    heading: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    onBeforeEnterModal: hideScrollbar,
    onAfterLeaveModal: showScrollbar,
    hideModal() {
      this.$emit('controlModal', {
        isShow: false
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  $main: &;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;

  &__container {
    width: 100%;
    min-height: 100%;
    padding: 50px 15px;
    position: relative;
  }

  &__backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &__wrap {
    max-width: 600px;
    padding: 25px;
    background-color: #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  &__close {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;

    &:hover {
      #{$main}__close-icon {
        fill: #000000;
      }
    }
  }

  &__close-icon {
    display: block;
    width: 16px;
    height: 16px;
    fill: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: fill .5s;
  }

  &__heading {
    font-size: 24px;
    line-height: 1.1;
    margin: 0 0 15px 0;
  }

  &__content {
    line-height: 1.6;
  }

  &-enter-active,
  &-leave-active {
    opacity: 1;
    transition: opacity 0.5s ease;

    #{$main}__wrap {
      transform: translateY(0);
      transition: transform 0.5s ease;
    }
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;

    #{$main}__wrap {
      transform: translateY(-50px);
    }
  }
}
</style>