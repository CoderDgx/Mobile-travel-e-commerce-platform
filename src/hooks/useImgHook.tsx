import { useEffect } from 'react';
import { isEmpty } from 'project-libs';

let observer: any;
export default function useImgHook(
  ele: any,
  callback: any,
  watch: [] | null = [],
) {
  useEffect(
    () => {
      const nodes = document.querySelectorAll(ele);
      if (!isEmpty(nodes)) {
        observer = new IntersectionObserver((entries) => {
          callback && callback(entries);
          entries.forEach((item) => {
            // console.log(item)
            if (item.isIntersecting) {
              const dataSrc = item.target.getAttribute('data-src');
              item.target.setAttribute('src', dataSrc as string);
              observer.unobserve(item.target);
            }
          });
        });
        nodes.forEach((item) => {
          observer.observe(item);
        });
      }

      return () => {
        if (!isEmpty(nodes) && observer) {
          observer.disconnect();
        }
      };
    },
    watch ? watch : undefined,
  );
}
