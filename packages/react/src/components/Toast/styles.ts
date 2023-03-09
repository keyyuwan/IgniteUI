import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  fontSize: '$xl',
  fontFamily: '$default',
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontWeight: '$regular',
  fontSize: '$sm',
  fontFamily: '$default',
  color: '$gray200',
  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
  width: '$5',
  height: '$5',
  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {
  listStyle: 'none',
  zIndex: 2147483647,
  maxWidth: 360,
  width: '100%',
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$8',
})
