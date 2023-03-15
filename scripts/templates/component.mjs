export const generateIndexFile = (
  componentName,
  isTypesRequired,
) => `export { ${componentName} } from './${componentName}';
${isTypesRequired ? `export type { ${componentName}Props } from './${componentName}.types';` : ''}`;

export const generateCssFile = () => `
import { style } from '@vanilla-extract/css';
export const container = style({});
`;

export const generateMockFile = () => `
export const data = [];
`;

export const generateTypesFile = componentName => `
import { HTMLAttributes } from 'react';

export type ${componentName}Props = HTMLAttributes<HTMLElement>;
`;

export const generateComponentFile = (componentName, isTypesRequired) => `
import * as styles from '@/components/${componentName}/${componentName}.css';
${
  isTypesRequired
    ? `import { ${componentName}Props } from '@/components/${componentName}/${componentName}.types';`
    : ''
}

export const ${componentName} = (${
  isTypesRequired ? `{ className }: ${componentName}Props` : ''
}) => {
  return <div className={${
    isTypesRequired ? '`${styles.container} ${className}`' : 'styles.container'
  }}></div>
}
`;

export const generateStoriesFile = componentName => `
import { ${componentName} } from '@/components/${componentName}';
import { Box } from '@/components/Box';

export default { component: ${componentName}, title: 'Components/${componentName}' };

const Template = (args: any) => (
  <Box width={'600px'} margin={'space.10'}>
    <${componentName} {...args} />
  </Box>
);

export const Default = Template.bind({});
`;

export const generateTestFile = componentName => `
import { render } from '@testing-library/react';

import { ${componentName} } from '@/components/${componentName}';

test('component renders', () => {
  render(<${componentName} />);
  expect(true).toBe(true);
});
`;
