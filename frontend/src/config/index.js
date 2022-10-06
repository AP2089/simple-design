import {getScrollbarWidth} from '@/helpers/scroll';

const {
  NODE_ENV,
  VUE_APP_BASE_URL,
  VUE_APP_API_URL,
  VUE_APP_I18N_LOCALE,
  VUE_APP_I18N_FALLBACK_LOCALE
} = process.env;

export const baseUrl = VUE_APP_BASE_URL;
export const apiUrl = VUE_APP_API_URL;
export const locale = VUE_APP_I18N_LOCALE;
export const fallbackLocale = VUE_APP_I18N_FALLBACK_LOCALE;
export const locales = VUE_APP_I18N_LOCALE;
export const mode = NODE_ENV;
export let scrollbarWidth = getScrollbarWidth();

window.addEventListener('resize', () => {
  scrollbarWidth = getScrollbarWidth();
});