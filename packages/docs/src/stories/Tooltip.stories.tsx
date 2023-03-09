import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@keyyuwan-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Lorem ipsum</Text>,
    content: '21 de Maio - Disponível',
  },
  decorators: [
    (Story) => {
      return <Box css={{ textAlign: 'center' }}>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
