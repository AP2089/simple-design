import {scrollbarWidth} from '@/config';

export function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

export function hideScrollbar() {
  const hasVerticalScrollbar = document.body.scrollHeight > document.body.clientHeight;

  if (hasVerticalScrollbar) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollbarWidth + 'px';
  }
}

export function showScrollbar() {
  document.body.style.overflowY = '';
  document.body.style.paddingRight = '';
}