import { HTMLAttributes } from 'react';

import { Sprinkles } from '@/theme/index.css';

export type BoxProps = HTMLAttributes<HTMLElement> & {
  width?: string | number;
  height?: string | number;
  active?: boolean;
  style?: React.CSSProperties;
} & Sprinkles;
