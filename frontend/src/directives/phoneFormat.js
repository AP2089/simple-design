export default {
  updated: (el) => {
    el.href = el.href.replace(/\s/g, '');
  }
}