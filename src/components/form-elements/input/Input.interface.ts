import { HtmlHTMLAttributes } from 'react';

interface InputInterface extends HtmlHTMLAttributes<HTMLInputElement> {
  type?: string;
  name?: string;
  value?: string;
  spacing?: {
    vertical?: number;
    horizontal?: number;
  };
  title?: string;
}

export default InputInterface;
