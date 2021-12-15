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
