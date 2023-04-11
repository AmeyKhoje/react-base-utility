import { useId, useInsertionEffect, useMemo } from 'react';
import styleToCss from 'style-object-to-css-string';

const useTranslatedStyles = (stylesCreator: any, props = {}) => {
  const [styles, styleRules] = useMemo(() => {
    const styles = {};
    const styleRules = [];

    for (const [styleProperty, styleValue] of Object.entries(
      stylesCreator(props)
    )) {
      const hashedClassName = `${styleProperty}_${useId()}`;
      styles[styleProperty] = hashedClassName;
      const rule = `.${hashedClassName} {${styleToCss(styleValue)}}`;
      styleRules.push(rule);
    }

    return [styles, styleRules];
  }, [stylesCreator, props]);

  useInsertionEffect(() => {
    const stylesheet = document.createElement('style');
    document.head.appendChild(stylesheet);

    for (const rule of styleRules) {
      stylesheet.sheet?.insertRule(rule);
    }

    return () => {
      document.removeChild(stylesheet);
    };
  }, [styles, styleRules]);
};

export default useInsertionEffect;
