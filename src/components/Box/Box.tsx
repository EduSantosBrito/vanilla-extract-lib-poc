import { forwardRef } from 'react';

import { box } from '@/components/Box/Box.css';
import { BoxProps } from '@/components/Box/Box.types';
import { sprinkles } from '@/theme/index.css';

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    { children, width: widthProp, height: heightProp, active, style: styleProp, ...sprinklesProps },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={{
          ...styleProp,
          width: widthProp,
          height: heightProp,
        }}
        className={`${box({ active })} ${sprinkles(sprinklesProps)}`}
      >
        {children}
      </div>
    );
  },
);
