import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  getCssText,
  keyframes,
  globalCss,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
    lineHeights,
  },
})
