import { styled } from './styles'

const Button = styled('button', {
  color: '$ignite300',
  fontSize: '$lg',
  fontWeight: '$bold',

  height: '$4',
})

export function App() {
  return <Button>Send</Button>
}
