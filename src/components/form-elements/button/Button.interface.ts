import { HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import ThemeInterface from 'src/components/utils/Theme.interface';

interface ButtonInterface extends HtmlHTMLAttributes<HTMLButtonElement> {
  title: string;
  extras?: {
    bg?: string;
    hoverBg?: string;
    textColor?: string;
    hoverTextColor?: string;
    transitionSpees?: string;
    fontSize?: string;
  };
  icon?: {
    svg?: IconType;
    side: string;
    style?: {
      height?: string;
      width?: string;
    };
  };
  theme?: ThemeInterface;
}

export default ButtonInterface;
