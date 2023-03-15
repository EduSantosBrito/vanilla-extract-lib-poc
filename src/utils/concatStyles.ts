export const concatStyles = (styles: (string | undefined)[]) => {
  return styles.filter((style: string | undefined) => style != undefined).join(' ');
};
