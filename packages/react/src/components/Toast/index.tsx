import { ComponentProps } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastClose aria-label="Close" asChild>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </RadixToast.Provider>
  )
}
