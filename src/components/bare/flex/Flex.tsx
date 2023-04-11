// https://stackoverflow.com/questions/75978467/error-element-implicitly-has-an-any-type-because-index-expression-is-not-of-t

import {
  ReactElement,
  ReactNode,
  memo,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import FlexInterface, { StylesInterface } from './Flex.interface';
import styles from './FlexStyles.module.scss';

const Flex = memo(({ children, config, className }: FlexInterface) => {
  const flexRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (flexRef.current) {
      if (config?.styles) {
        Object.keys(config.styles).map((key: string, index: number) => {
          if (flexRef.current && config?.styles) {
            if (config.styles[key as keyof StylesInterface]) {
              flexRef.current.style[key] =
                config.styles[key as keyof StylesInterface];
            }
          }
        });
      }
    }
  }, [flexRef.current, config?.styles]);

  return (
    <div ref={(ref) => (flexRef.current = ref)} className={`${styles['flex']}`}>
      {children}
    </div>
  );
});

export default Flex;
