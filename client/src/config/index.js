import {getScrollbarWidth} from '@/helpers/scroll';

const {
  VUE_APP_CLIENT_URL,
  VUE_APP_API_URL,
  VUE_APP_LOCALE
} = process.env;

export const baseUrl = VUE_APP_CLIENT_URL;
export const apiUrl = VUE_APP_API_URL;
export const locale = VUE_APP_LOCALE;
export let scrollbarWidth = getScrollbarWidth();

window.addEventListener('resize', () => {
  scrollbarWidth = getScrollbarWidth();
});