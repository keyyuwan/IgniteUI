import { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@keyyuwan-ignite-ui/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <Box css={{ background: 'transparent' }}>
          <Button onClick={() => setIsOpen(true)}>Schedule</Button>
          {Story({
            args: {
              open: isOpen,
              onOpenChange: setIsOpen,
              title: 'Meeting scheduled!',
              description: 'Monday, October 23 - 09:00AM',
            },
          })}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
