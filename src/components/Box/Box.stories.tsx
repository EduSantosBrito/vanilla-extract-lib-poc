import { Box } from '@/components/Box';

export default { component: Box, title: 'Components/Box' };

const Template = (args: any) => (
  <Box width={'600px'} margin={'space.10'} {...args}>
    <h1>Something incredible</h1>
  </Box>
);

export const Default = Template.bind({});
