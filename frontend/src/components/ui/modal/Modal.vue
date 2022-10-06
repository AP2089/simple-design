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
import Sprite from '@/components/ui/sprite';
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
@import './modal.scss';
</style>