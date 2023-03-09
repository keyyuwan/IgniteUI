import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Text } from '../Text'
import { TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <TooltipContainer {...props}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <TooltipContent sideOffset={2}>
          <RadixTooltip.Arrow />

          <Text size="sm">{content}</Text>
        </TooltipContent>
      </TooltipContainer>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
