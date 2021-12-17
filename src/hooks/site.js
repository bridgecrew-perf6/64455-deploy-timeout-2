import { useEffect } from 'react';
import { useUIkit } from '@foundation/lib/uikit';

export const useCountUp = (
  ref,
  { initial = 0, value = 100, duration = 2000 }
) => {
  const ready = useUIkit();

  useEffect(() => {
    if (!ref?.current || !window.UIkit) return;

    const el = ref.current;

    const { util } = UIkit;

    UIkit.scrollspy(el, { repeat: true, delay: 100 });

    function inview() {
      function counter(start, end, duration) {
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        let timer = setInterval(() => {
          current += increment;
          el.textContent = current;
          if (current >= end) {
            clearInterval(timer);
          }
        }, step);
      }
      counter(initial, value, duration);
    }

    function outview() {
      if (el) el.textContent = 0;
    }

    util.on(el, 'inview', inview);

    util.on(el, 'outview', outview);

    return () => {
      util.off(el, 'inview', inview);
      util.off(el, 'outview', outview);
    };
  }, [duration, initial, ready, ref, value]);
};

export const useModalEvents = (modal, { onShow, onHide }) => {
  const ready = useUIkit();

  useEffect(() => {
    if (!modal?.current || !ready) return;

    const el = modal.current;

    const { util } = UIkit;

    function show(e) {
      if (typeof onShow === 'function') onShow(e);
    }

    function hide(e) {
      if (typeof onHide === 'function') onHide(e);
    }

    util.on(el, 'show', show);
    util.on(el, 'hide', hide);

    return () => {
      util.off(el, 'show', show);
      util.off(el, 'hide', hide);
    };
  }, [ready, modal, onShow, onHide]);
};
