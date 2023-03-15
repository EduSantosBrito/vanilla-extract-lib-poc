/**
 * Global styling for CSS normalization, same code as normalizer from polished package + custom normalizer.
 *
 * @see {@link https://github.com/necolas/normalize.css/blob/master/normalize.css}
 */

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',

  // Custom normalizer
  height: '-webkit-fill-available',
  fontSize: '10px',
});

globalStyle('body', {
  margin: 0,
  fontSize: '1.8rem',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  minWidth: '320px',
  minHeight: '-webkit-fill-available',
  overscrollBehavior: 'contain',
  lineHeight: '1.8',
});

globalStyle('main', {
  fontSize: '2em',
  margin: '0.67em 0',
});

globalStyle('hr', {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible',
});

globalStyle('pre', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

globalStyle('a', {
  backgroundColor: 'transparent',

  // Custom normalizer
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('abbr[title]', {
  borderBottom: 'none',
  textDecoration: 'underline dotted',
});

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

globalStyle('code, kbd, samp', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

globalStyle('img', {
  borderStyle: 'none',
});

globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 1.15,
  margin: '0',
});

globalStyle('button, input', {
  overflow: 'visible',
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
  // Custom normalizer

  border: 'none',
  background: 'none',
  padding: '0',
  outline: 'none',
});

globalStyle(
  'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner',
  { borderStyle: 'none', padding: '0' },
);

globalStyle(
  'button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring',
  {
    outline: '1px dotted ButtonText',
  },
);

globalStyle('fieldset', {
  padding: '0.35em 0.75em 0.625em',
});

globalStyle('legend', {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal',
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('textarea', {
  overflow: 'auto',
});

globalStyle('[type="checkbox"],[type="radio"]', {
  boxSizing: 'border-box',
  padding: '0',
});

globalStyle(
  '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button',
  {
    height: 'auto',
  },
);

globalStyle('[type="search"]', {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle('[type="search"]::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle('details', { display: 'block' });

globalStyle('summary', {
  display: 'list-item',
});

globalStyle('template', {
  display: 'none',
});

globalStyle('[hidden]', {
  display: 'none',
});

// Custom normalizer

globalStyle('*', {
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
});

globalStyle('p', {
  margin: '0',
  marginBottom: '24px',
  lineHeight: '1.25',
  '@media': {
    'screen and (min-width: 40em)': {
      lineHeight: '1.44',
    },
  },
});

globalStyle('h1,h2,h3,h4,h4,h5,h6', {
  margin: 0,
});

globalStyle('button:hover', {
  cursor: 'pointer',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});
