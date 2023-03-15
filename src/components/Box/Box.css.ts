import { recipe } from '@vanilla-extract/recipes';

export const box = recipe({
  variants: {
    active: {
      true: {
        '@media': {
          'screen and (min-width: 360px)': {
            selectors: {
              '&.active': {
                display: 'inherit',
              },
            },
          },
        },
      },
      false: {
        '@media': {
          'screen and (min-width: 360px)': {
            selectors: {
              '&.active': {
                display: 'none',
              },
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
