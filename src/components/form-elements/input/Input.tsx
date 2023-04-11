import { memo, useEffect, useRef } from 'react';
import './InputStyles.module.scss';
import InputInterface from './Input.interface';
import styles from './InputStyles.module.scss';

const Input = memo(
  ({ type, name, value, placeholder, onChange, spacing }: InputInterface) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      console.log(containerRef);
    }, []);

    return (
      <div
        ref={(ref) => (containerRef.current = ref)}
        className={`${styles['input-container']}`}
      >
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${styles['input']}`}
        />
      </div>
    );
  }
);

export default Input;
