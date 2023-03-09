import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  maxWidth: 210,
  width: '100%',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.4)',
})
