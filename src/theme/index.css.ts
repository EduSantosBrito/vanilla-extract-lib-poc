import { createGlobalTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';
import '@/theme/global.css';
import { space } from '@/theme/space';

export const breakpoints = {
  smallMobile: 'screen and (min-width: 360px)',
  mobile: 'screen and (min-width: 640px)',
  largeMobile: 'screen and (min-width: 768px)',
  smallDesktop: 'screen and (min-width: 1024px)',
  desktop: 'screen and (min-width: 1366px)',
  largeDesktop: 'screen and (min-width: 1600px)',
  extraLargeDesktop: 'screen and (min-width: 2560px)',
};

const responsiveProperties = defineProperties({
  conditions: {
    smallMobile: { '@media': breakpoints.smallMobile },
    mobile: { '@media': breakpoints.mobile },
    largeMobile: { '@media': breakpoints.largeMobile },
    smallDesktop: { '@media': breakpoints.smallDesktop },
    desktop: { '@media': breakpoints.desktop },
    largeDesktop: { '@media': breakpoints.largeDesktop },
    extraLargeDesktop: { '@media': breakpoints.extraLargeDesktop },
  },
  defaultCondition: 'smallMobile',
  properties: {
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingInline: ['paddingLeft', 'paddingRight'],
    paddingBlock: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginInline: ['marginLeft', 'marginRight'],
    marginBlock: ['marginTop', 'marginBottom'],
  },
});

const colorProperties = defineProperties({
  properties: {
    background: colors,
    color: colors,
  },
  shorthands: {
    backgroundColor: ['background'],
  },
});

const borderProperties = defineProperties({
  properties: {
    borderRadius,
  },
});

export const sprinkles = createSprinkles(borderProperties, colorProperties, responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const theme = createGlobalTheme(':root', {
  borderRadius,
  colors,
  space,
});
