import { memo, useCallback, useEffect, useRef, useState } from 'react';
import ButtonInterface from './Button.interface';
import styles from './ButtonStyles.module.scss';
import Flex from 'src/components/bare/flex/Flex';

const Button = memo(({ title, extras, icon }: ButtonInterface) => {
  const [iconColor, setIconColor] = useState<string>('');
  const iconContainerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  const func = useCallback(() => {
    if (iconContainerRef.current) {
      if (icon?.style) {
        iconContainerRef.current.style.width = `${icon.style.width}`;
        iconContainerRef.current.style.height = `${icon.style.height}`;
        const childNode = iconContainerRef.current.firstElementChild;
        icon?.style?.width &&
          childNode?.setAttribute('width', icon.style.width);
        icon?.style?.height &&
          childNode?.setAttribute('height', icon.style.height);
      }
    }
  }, [iconContainerRef.current]);

  const initButton = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'all 0.2s';
      buttonRef.current.style.backgroundColor = extras?.bg || '';
      if (titleRef.current) {
        titleRef.current.style.color = extras?.textColor || '';
        setIconColor(extras?.textColor || '');
      }
      buttonRef.current.onmouseenter = function () {
        if (buttonRef.current) {
          buttonRef.current.style.backgroundColor =
            extras?.hoverBg || extras?.bg || '';
        }
        if (titleRef.current) {
          titleRef.current.style.color =
            extras?.hoverTextColor || extras?.textColor || '';
          setIconColor(extras?.hoverTextColor || '');
        }
      };
      buttonRef.current.onmouseleave = function () {
        if (buttonRef.current) {
          buttonRef.current.style.backgroundColor = extras?.bg || '';
        }
        if (titleRef.current) {
          titleRef.current.style.color = extras?.textColor || '';
          setIconColor(extras?.textColor || '');
        }
      };
    }
  }, [buttonRef.current]);

  useEffect(() => {
    func();
  }, [iconContainerRef.current]);

  useEffect(() => {
    initButton();
  }, [buttonRef.current]);

  return (
    <button
      className={`${styles['button']}`}
      ref={(ref) => (buttonRef.current = ref)}
    >
      <Flex
        config={{
          styles: {
            alignItems: 'center',
            flexDirection: 'row',
          },
        }}
      >
        {icon?.side === 'left' && icon.svg && (
          <div
            ref={(ref) => (iconContainerRef.current = ref)}
            className={`${styles['button-icon']} ${styles['button-icon-left']}`}
          >
            <icon.svg
              width={icon.style?.width}
              height={icon.style?.height}
              color={iconColor || '#000'}
            />
          </div>
        )}
        <div className={styles['button-title']}>
          <p ref={(ref) => (titleRef.current = ref)}>{title}</p>
        </div>
        {icon?.side === 'right' && icon.svg && (
          <div
            ref={(ref) => (iconContainerRef.current = ref)}
            className={`${styles['button-icon']} ${styles['button-icon-right']}`}
          >
            <icon.svg
              width={icon.style?.width}
              height={icon.style?.height}
              color={iconColor || '#000'}
            />
          </div>
        )}
      </Flex>
    </button>
  );
});

export default Button;
