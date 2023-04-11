import { memo, useEffect, useRef } from 'react';
import styles from './ContainerStyles.module.scss';
import ContainerInterface from './Container.interface';

const Container = memo(
  ({
    children = null,
    spacingH = 1,
    spacingV = 0,
    widthUnit = '%',
    customWidth = 100,
    spacingUnit = 'rem',
    className,
  }: ContainerInterface) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.width = `${customWidth}${widthUnit}`;
        containerRef.current.style.padding = `${spacingV}${spacingUnit} ${spacingH}${spacingUnit} ${spacingV}${spacingUnit} ${spacingH}${spacingUnit}`;
      }
    }, [containerRef.current]);

    return (
      <div
        ref={(ref) => (containerRef.current = ref)}
        className={`${className} ${styles['container']} `}
      >
        {children}
      </div>
    );
  }
);

export default Container;
