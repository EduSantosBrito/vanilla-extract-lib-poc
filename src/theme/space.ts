const spaceBase = 4;
const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as const;
type Multipliers = (typeof multipliers)[number];
const conversionRate: Partial<{ [key in Multipliers]: number }> = {
  9: 10,
  10: 14,
  11: 16,
  12: 20,
  13: 24,
  14: 30,
};
type Tokens = `space.${Multipliers}`;

export type SpacingRecord = {
  [key in Tokens]: string;
};

export const space = multipliers.reduce(
  (acc, cur, index) => ({
    ...acc,
    [`space.${index + 1}`]: `${spaceBase * (conversionRate[cur] ?? cur)}px`,
  }),
  {} as SpacingRecord,
);
